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

  const addExpense = (expense) => {
    if (
      expense.hasOwnProperty("date") &&
      expense.hasOwnProperty("amount") &&
      expense.hasOwnProperty("category") &&
      expense.hasOwnProperty("note")
    ) {
      setExpenses([...expenses, expense]);
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
            console.log("Retrieved category:", record.get("Name"));
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

  async function post_new_transaction_to_airtable(expense) {
    base("Transactions").create([{ fields: expense }], function (err, records) {
      if (err) {
        alert(`Error posting Expense to Airtable ${expense}.`);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  }

  useEffect(() => {
    get_transactions_from_airtable();
    get_categories_from_airtable();
  }, []);

  // calculating the actual amounts spend by iterating over the expense transactions
  let actual_budget_spent = {};
  expenses.forEach((expense) => {
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
  });

  return (
    <div className="container m-4 p-4">
      <h1>Budget Tracker</h1>
      <EnterExpense addExpense={addExpense} categories={categories} />
      {/* <Login /> */}
      {Object.entries(actual_budget_spent).map(([key, value]) => {
        // Pretty straightforward - use key for the key and value for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.

        return (
          <BudgetCard
            category={key}
            budget_amount={categories[name_index_category_dict[key]]}
            current_amount={value}
          />
        );
      })}

      <div className="container m-3 p-3">
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
