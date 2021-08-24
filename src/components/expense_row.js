const ExpenseRow = ({ id, date, amount, category, note }) => {
  const date_obj = new Date(date);
  const day_month_date =
    String(date_obj.getMonth() + 1) + "/" + String(date_obj.getUTCDate());
  const items = [day_month_date, amount.toFixed(2), category, note];

  return (
    <tr id={id}>
      {items.map((item, idx) => (
        <td key={idx}>{item}</td>
      ))}
    </tr>
  );
};

export default ExpenseRow;
