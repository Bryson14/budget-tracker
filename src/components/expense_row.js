const ExpenseRow = ({ id, date, amount, category, note }) => {
  let items = [date, amount, category, note];

  return (
    <tr id={id}>
      {items.map((item, idx) => (
        <td key={idx}>{item}</td>
      ))}
    </tr>
  );
};

export default ExpenseRow;
