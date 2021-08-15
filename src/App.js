import "./App.css";
import ExpenseTable from "./components/expense_table";
import Login from "./components/login";
import EnterExpense from "./components/enter_expense";
import { useState, useEffect } from "react";
var Airtable = require("airtable");
const api_key = process.env.REACT_APP_API_KEY;
var base = new Airtable({ apiKey: api_key }).base("app5VP16VBp5NgMg5");

function App() {
  const [expenses, setExpenses] = useState([
    { date: "8/14/21", amount: 12.3, category: "groceries", note: "nothing" },
    { date: "8/15/21", amount: 84.5, category: "fun money", note: "idk" },
    { date: "8/16/21", amount: 12.23, category: "apartment", note: "why me" },
  ]);

  const [categories, setCategories] = useState([
    { name: "Groceries", amount: 100 },
    { name: "Bry's fun Money", amount: 50 },
    { name: "Jazmin's Fun Money", amount: 75 },
    { name: "Apartment", amount: 60 },
  ]);

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

  async function get_category_name_from_id(id) {
    base("Category_Budgets").find(id, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Retrieved", record.name);
      return record.name;
    });
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
    debugger;
    base("Transactions").create([{ fields: expense }], function (err, records) {
      if (err) {
        console.error(err);
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
    <div className="container">
      <h1>Budget Tracker</h1>
      <Login />
      <ExpenseTable expenses={expenses} />
      <EnterExpense addExpense={addExpense} categories={categories} />
    </div>
  );
}

export default App;
