import "./App.css";
import ExpenseTable from "./components/expense_table";
import BudgetCard from "./components/budget_card";
import EnterExpense from "./components/enter_expense";
import { useState, useEffect } from "react";
var Airtable = require("airtable");
const api_key = process.env.REACT_APP_API_KEY;
var base = new Airtable({ apiKey: api_key }).base("app5VP16VBp5NgMg5");

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tableVisible, setTableVisible] = useState(true);

  const changeVisible = () => {
    debugger;
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
    get_transactions_from_airtable();
    get_categories_from_airtable();
  }, []);

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
  return (
    <div className="container-fluid p-2 text-center">
      <div className="form-div">
        <h1 className="text-white pt-3">Budget Tracker 💸</h1>
        <small className="text-light">
          Spent ${actual_budget_spent.total_spent.toFixed(2)} of $
          {actual_budget_spent.total_budget}
        </small>
        <div class="row d-flex justify-content-center mt-2">
          <div class="col-md-6">
            <EnterExpense addExpense={addExpense} categories={categories} />
          </div>
        </div>
      </div>
      <hr />

      {/* <Login /> */}
      <div className="container-fluid ">
        <h2>Categories</h2>
        <div className="row flex-row flex-nowrap overflow-auto">
          {Object.entries(actual_budget_spent).map(([key, value]) => {
            // to keep the meta data in actual_budget_spent from being made into a category card
            if (key === "total_spent" || key === "total_budget") {
              return <></>;
            }
            return (
              <BudgetCard
                category={key}
                budget_amount={categories[name_index_category_dict[key]]}
                current_amount={value}
              />
            );
          })}
        </div>
      </div>
      <hr />

      <div className="">
        <div onClick={changeVisible} style={{ cursor: "pointer" }}>
          <h2>Expenses ▼</h2>
        </div>
        <ExpenseTable expenses={expenses} tableVisible={tableVisible} />
      </div>
    </div>
  );
}

export default App;
