import ExpenseRow from "./expense_row";

const ExpenseTable = ({ expenses, tableVisible, removeTransaction }) => {
  let visibilityStyle = {
    visibility: tableVisible != null && !tableVisible ? "hidden" : "visible",
    overflow: "scroll",
  };
  return (
    <table
      style={visibilityStyle}
      className="table table-striped table-dark table-hover align-left table-condensed"
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
            airtableId={expense.airtable_id}
            removeTransaction={removeTransaction}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
