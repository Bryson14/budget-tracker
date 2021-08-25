import ExpenseRow from "./expense_row";

const ExpenseTable = ({ expenses, tableVisible }) => {
  let visibilityStyle = {
    visibility: tableVisible != null && !tableVisible ? "hidden" : "visible",
  };
  return (
    <table
      style={visibilityStyle}
      className="table table-striped table-dark table-hover align-middle"
    >
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
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
  );
};

export default ExpenseTable;
