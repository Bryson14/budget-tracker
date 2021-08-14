const ExpenseRow = ({ date, amount, category, note }) => {
  let items = [date, amount, category, note];

  return (
    <tr>
      {items.map((item, idx) => (
        <td key={idx}>{item}</td>
      ))}
    </tr>
  );
};

export default ExpenseRow;
