import "./App.css";
import ExpenseTable from "./components/expense_table";
import Login from "./components/login";
import BudgetCard from "./components/budget_card";
import EnterExpense from "./components/enter_expense";
import { useState, useEffect } from "react";
var Airtable = require("airtable");
const api_key = process.env.REACT_APP_API_KEY;
var base = new Airtable({ apiKey: api_key }).base("app5VP16VBp5NgMg5");

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [spentPerCategory, setSpentPerCategory] = useState({});

  const addExpense = (expense) => {
    if (
      expense.hasOwnProperty("date") &&
      expense.hasOwnProperty("amount") &&
      expense.hasOwnProperty("category") &&
      expense.hasOwnProperty("note")
    ) {
      // the setExpenses triggers rerender and will fetch the new data from airTable.
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

  // creates new transaction to airtable
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

  return (
    <div className="container m-4 p-4">
      <h1>Budget Tracker</h1>
      <EnterExpense addExpense={addExpense} categories={categories} />
      {/* <Login /> */}
      <div class="container-fluid">
        <h2>Current Categories</h2>
        <div class="row d-flex flex-row flex-nowrap overflow-auto p-3 m-3">
          {categories.map((category, idx) => (
            <div className="col-3">
              <BudgetCard
                category={category.name}
                budget_amount={category.amount}
                amounts_spent={spentPerCategory[category.name]}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container m-3 p-3">
        <h2>Expenses</h2>
        <ExpenseTable
          expenses={expenses}
          setSpentPerCategory={setSpentPerCategory}
        />
      </div>
    </div>
  );
}

export default App;
