import "./App.css";
import ExpenseTable from "./components/expense_table";
import BudgetCard from "./components/budget_card";
import EnterExpense from "./components/enter_expense";
import { useState, useEffect } from "react";
import Login from "./components/login";
var Airtable = require("airtable");
var base = null;

function App() {
  const [apiKey, setApiKey] = useState(
    localStorage.getItem("apiKey") == null ? "" : localStorage.getItem("apiKey")
  );
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tableVisible, setTableVisible] = useState(true);

  const changeVisible = () => {
    setTableVisible(!tableVisible);
  };

  const addExpense = (expense) => {
    if (
      expense.hasOwnProperty("date") &&
      expense.hasOwnProperty("amount") &&
      expense.hasOwnProperty("category") &&
      expense.hasOwnProperty("note")
    ) {
      // the setExpenses triggers rerender and will fetch the new data from airTable.
      setExpenses([expense, ...expenses]);
      post_new_transaction_to_airtable(expense);
    } else {
      alert(
        "The expense object made did not have the following props: date, amount, category, note. \n Failed to set state"
      );
    }
  };

  async function get_transactions_from_airtable() {
    let list_records = [];
    base("Transactions")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            // adding airtable id to be able to remove
            record.fields["airtable_id"] = record.id;
            list_records.push(record.fields);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          } else {
            setExpenses(list_records);
          }
        }
      );
  }

  // gets the budget categories from airtable
  async function get_categories_from_airtable() {
    let list_records = [];
    base("Category_Budgets")
      .select({
        view: "Grid view",
        fields: ["name", "amount"],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            list_records.push(record.fields);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          } else {
            setCategories(list_records);
          }
        }
      );
  }

  async function remove_transaction_from_airtable(airtable_id) {
    debugger;
    base("Transactions").destroy(
      [`${airtable_id}`],
      function (err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        get_transactions_from_airtable();
      }
    );
  }

  // creates new transaction to airtable
  async function post_new_transaction_to_airtable(expense) {
    base("Transactions").create([{ fields: expense }], function (err, records) {
      if (err) {
        alert(`Error posting Expense to Airtable ${expense}.`);
        return;
      }
      records.forEach(function (record) {});
    });
  }

  useEffect(() => {
    if (apiKey) {
      base = new Airtable({ apiKey: apiKey }).base("app5VP16VBp5NgMg5");
      get_transactions_from_airtable();
      get_categories_from_airtable();
    }
  }, [apiKey]);

  // calculating the actual amounts spend by iterating over the expense transactions
  let actual_budget_spent = { total_spent: 0, total_budget: 0 };
  expenses.forEach((expense) => {
    actual_budget_spent.total_spent += expense.amount;
    if (actual_budget_spent.hasOwnProperty(expense.category)) {
      actual_budget_spent[expense.category] += expense.amount;
    } else {
      actual_budget_spent[expense.category] = expense.amount;
    }
  });

  // creating a look up dictionary between the name and index spot in categories
  let name_index_category_dict = {};
  categories.forEach((category, idx) => {
    name_index_category_dict[category.name] = idx;
    actual_budget_spent.total_budget += category.amount;
  });

  // calculating the current amount spent and amount left to spend from categories and transactions info
  // can be less than zero, each component that uses the data can decide if it wants to turn negatives to $0
  let category_amount_remaining = {};
  categories.forEach((category, idx) => {
    // data from the 2 async fetchs might take a big
    if (actual_budget_spent.hasOwnProperty(category.name)) {
      let amount_left = category.amount - actual_budget_spent[category.name];
      category_amount_remaining[category.name] =
        amount_left != null ? amount_left : 0;

      // if actual_budget_spent has gotten its data from fetch
      // but nothing has been spent in that category
    } else {
      category_amount_remaining[category.name] = category.amount;
    }
  });

  // calculating what you have to spend today.
  let today = new Date();
  let time = new Date(today.getTime());
  time.setMonth(today.getMonth() + 1);
  time.setDate(0);
  let days =
    time.getDate() > today.getDate() ? time.getDate() - today.getDate() : 0;
  let days_in_month = today.getDate() + days;
  let percentage_month_completed = today.getDate() / days_in_month;
  let todays_budget =
    actual_budget_spent.total_budget * percentage_month_completed -
    actual_budget_spent.total_spent;

  return (
    <>
      {!apiKey ? (
        <Login setApiKey={setApiKey} />
      ) : (
        <div className="container-fluid p-2 text-center">
          <div className="form-div enter-expense-gradient">
            <h1 className="text-white pt-3">Budget Tracker ????</h1>
            <small className="text-light">
              <mark className={todays_budget > 0 ? "mark-good" : "mark-bad"}>
                Today's Budget: <b>${todays_budget.toFixed(2)}</b>
              </mark>
            </small>
            <div className="row d-flex justify-content-center mt-2">
              <div className="col-md-6">
                <EnterExpense
                  addExpense={addExpense}
                  categories={categories}
                  category_amount_remaining={category_amount_remaining}
                />
              </div>
            </div>
          </div>
          <hr />

          <div className="container-fluid ">
            <h2>Categories</h2>
            <div className="row flex-row flex-nowrap overflow-auto">
              {categories.map((category, idx) => {
                // to keep the meta data in actual_budget_spent from being made into a category card
                return (
                  <BudgetCard
                    key={idx}
                    category={category.name}
                    budget_amount={category.amount}
                    amount_remaining={category_amount_remaining[category.name]}
                    category_transactions={expenses.filter(
                      (expense) => expense.category === category.name
                    )}
                    percentage_month_completed={percentage_month_completed}
                  />
                );
              })}
            </div>
          </div>
          <hr />

          <div className="">
            <div onClick={changeVisible} style={{ cursor: "pointer" }}>
              <h2> Expenses {tableVisible ? "??" : "??"} </h2>
              <small className="mb-2">
                <mark
                  className={
                    actual_budget_spent.total_spent >
                    actual_budget_spent.total_budget
                      ? "mark-bad"
                      : "mark-good"
                  }
                >
                  Spent $ <b>{actual_budget_spent.total_spent.toFixed(2)}</b> of
                  ${actual_budget_spent.total_budget}
                </mark>
              </small>
            </div>
            <ExpenseTable
              expenses={expenses}
              tableVisible={tableVisible}
              removeTransaction={remove_transaction_from_airtable}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
