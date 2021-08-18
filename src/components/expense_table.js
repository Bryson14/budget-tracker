import ExpenseRow from "./expense_row";
import { useEffect } from "react";

const ExpenseTable = ({ expenses, setSpentPerCategory }) => {
  const calculateCurrentExpenditures = () => {
    let amounts_spent = {};
    expenses.forEach((expense) => {
      if (amounts_spent.hasOwnProperty(expense.category)) {
        amounts_spent[expense.category] += expense.amount;
      } else {
        amounts_spent[expense.category] = expense.amount;
      }
    });
    setSpentPerCategory(amounts_spent);
  };

  useEffect(() => {
    calculateCurrentExpenditures();
  });

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Amount ($)</th>
            <th scope="col">Category</th>
            <th scope="col">Note</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, idx) => (
            <ExpenseRow
              id={idx}
              key={idx}
              date={expense.date}
              amount={expense.amount}
              category={expense.category}
              note={expense.note}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
