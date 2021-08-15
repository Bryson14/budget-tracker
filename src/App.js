import "./App.css";
import ExpenseTable from "./components/expense_table";
import Login from "./components/login";
import EnterExpense from "./components/enter_expense";
import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { date: "8/14/21", amount: 12.3, category: "groceries", note: "nothing" },
    { date: "8/15/21", amount: 84.5, category: "fun money", note: "idk" },
    { date: "8/16/21", amount: 12.23, category: "apartment", note: "why me" },
  ]);

  const [categories, setCategories] = useState([
    "Groceries",
    "Bry's fun Money",
    "Jazmin's Fun Money",
    "Apartment",
  ]);

  const addExpense = (expense) => {
    if (
      expense.hasOwnProperty("date") &&
      expense.hasOwnProperty("amount") &&
      expense.hasOwnProperty("category") &&
      expense.hasOwnProperty("note")
    ) {
      debugger;
      setExpenses([...expenses, expense]);
      post_new_transaction_to_airtable();
    } else {
      alert(
        "The expense object made did not have the following props: date, amount, category, note. \n Failed to set state"
      );
    }
  };

  useEffect(() => {
    get_transactions_from_airtable();
    get_categories_from_airtable();
  });

  async function get_transactions_from_airtable() {}

  async function get_categories_from_airtable() {}

  async function post_new_transaction_to_airtable() {}

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
