import ExpenseRow from "./expense_row";

const ExpenseTable = ({ expenses }) => {
  debugger;
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount ($)</th>
          <th>Category</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, idx) => (
          <ExpenseRow
            id={idx}
            date={expense.date}
            amount={expense.amount}
            category={expense.category}
            note={expense.note}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
