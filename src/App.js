import "./App.css";
import ExpenseTable from "./components/expense_table";
import Login from "./components/login";
import EnterExpense from "./components/enter_expense";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { date: "8/14/21", amount: 12.3, category: "groceries", note: "nothing" },
    { date: "8/15/21", amount: 84.5, category: "fun money", note: "idk" },
    { date: "8/16/21", amount: 12.23, category: "apartment", note: "why me" },
  ]);

  const categories = [
    "Groceries",
    "Bry's fun Money",
    "Jazmin's Fun Money",
    "Apartment",
  ];

  return (
    <>
      <h1>Budget tracker</h1>
      <Login />
      <ExpenseTable expenses={expenses} />
      <EnterExpense
        expenses={expenses}
        setExpense={setExpenses}
        categories={categories}
      />
    </>
  );
}

export default App;
