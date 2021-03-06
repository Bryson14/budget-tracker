import { useState } from "react";

const ExpenseRow = ({
  id,
  date,
  amount,
  category,
  note,
  airtableId,
  removeTransaction,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const date_obj = new Date(date);
  const day_month_date =
    String(date_obj.getMonth() + 1) + "/" + String(date_obj.getUTCDate());
  const items = [day_month_date, amount.toFixed(2), category, note];

  if (showAlert) {
    return (
      <tr>
        <td>{items[0]}</td>
        <td>{items[1]}</td>
        <td>delete?</td>
        <td>
          <button
            onClick={() => {
              if (airtableId == null) {
                alert("Refresh and try again");
              } else {
                removeTransaction(airtableId);
                setShowAlert(false);
              }
            }}
            type="button"
            className="btn btn-danger"
          >
            delete
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              setShowAlert(false);
            }}
            type="button"
            className="btn btn-success"
          >
            cancel
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr id={id}>
        {items.map((item, idx) => (
          <td key={idx}>{item}</td>
        ))}
        <td
          onClick={() => {
            setShowAlert(true);
          }}
        >
          <button type="button" className="btn btn-secondary">
            X
          </button>
        </td>
      </tr>
    );
  }
};

export default ExpenseRow;
