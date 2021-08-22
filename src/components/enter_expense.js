import { useState } from "react";

const EnterExpense = ({ addExpense, categories }) => {
  var today = new Date().toISOString();
  today = today.slice(0, today.indexOf("T"));
  const [date, setDate] = useState(today);
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const goodLabelStyle = "mr-3";
  const badLabelStyle = "mr-3 text-danger";
  const goodInputStyle = "my-1";
  const badInputStyle = "my-1 form-control is-invalid";

  const [dateLabelStyle, setDateLabelStyle] = useState(goodLabelStyle);
  const [dateInputStyle, setDateInputStyle] = useState(goodInputStyle);
  const [amountLabelStyle, setAmountLabelStyle] = useState(goodLabelStyle);
  const [amountInputStyle, setAmountInputStyle] = useState(goodInputStyle);
  const [noteLabelStyle, setNoteLabelStyle] = useState(goodLabelStyle);
  const [noteInputStyle, setNoteInputStyle] = useState(goodInputStyle);
  const [categoryLabelStyle, setCategoryLabelStyle] = useState(goodLabelStyle);
  const [categorySelectStyle, setCategorySelectStyle] =
    useState(goodInputStyle);

  let categoriesOptions =
    categories.length > 0 &&
    categories.map((item, i) => {
      return (
        <option key={i} value={item.name}>
          {item.name}
        </option>
      );
    }, this);

  const handleSubmit = (e) => {
    e.preventDefault();
    let okay = true;
    // setting amount label and input to okay or error
    if (amount === "" || amount === 0) {
      setAmountLabelStyle(badLabelStyle);
      setAmountInputStyle(badInputStyle);
      okay = false;
    } else {
      setAmountLabelStyle(goodLabelStyle);
      setAmountInputStyle(goodInputStyle);
    }
    // setting note label and input to okay or error
    if (note === "") {
      setNoteLabelStyle(badLabelStyle);
      setNoteInputStyle(badInputStyle);
      okay = false;
    } else {
      setNoteLabelStyle(goodLabelStyle);
      setNoteInputStyle(goodInputStyle);
    }
    // setting category label and input to okay or error
    if (category === "") {
      setCategoryLabelStyle(badLabelStyle);
      setCategorySelectStyle(badInputStyle);
      okay = false;
    } else {
      setCategoryLabelStyle(goodLabelStyle);
      setCategorySelectStyle(goodInputStyle);
    }
    // setting date label and input to okay or error
    if (date === "") {
      setDateLabelStyle(badLabelStyle);
      setDateInputStyle(badInputStyle);
      okay = false;
    } else {
      setDateLabelStyle(goodLabelStyle);
      setDateInputStyle(goodInputStyle);
    }

    if (okay) {
      try {
        var today = new Date().toISOString();
        today = today.slice(0, today.indexOf("T"));
        let float_amount = Number(amount);
        addExpense({
          date: date,
          amount: float_amount,
          category: category,
          note: note,
        });
        setDate(today);
        setNote("");
        setCategory("");
        setAmount("");
      } catch (e) {
        alert("Bad number conversion of amount to Number type");
      }
    }
  };

  const handleChange = (data) => (e) => {
    switch (data) {
      case "amount":
        setAmount(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "note":
        setNote(e.target.value);
        break;
      case "date":
        var today = new Date().toISOString();
        today = today.slice(0, today.indexOf("T"));
        if (e.target.value > today) {
          alert("Cannot have an expense in the future.");
          setDate("");
          return;
        }
        setDate(e.target.value);
        break;
      default:
        alert(`An unknown data: ${data} was passed into the switch statement.`);
        break;
    }
  };

  return (
    <div className="container-fluid m-2">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={dateLabelStyle} htmlFor="dateinput">
            Date
          </label>
          <input
            type="date"
            className={dateInputStyle}
            value={date}
            onChange={handleChange("date")}
          />
        </div>
        <div className="form-group">
          <label className={amountLabelStyle} htmlFor="amountinput">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            className={amountInputStyle}
            value={amount}
            onChange={handleChange("amount")}
            id="amountinput"
            aria-describedby="amountHelp"
            placeholder="Enter Expense Amount"
          />
          <small id="amountHelp" className="form-text text-muted">
            Remember the change!
          </small>
        </div>
        <div className="form-group">
          <label className={categoryLabelStyle} htmlFor="categorySelect">
            Category
          </label>
          <select
            className={categorySelectStyle}
            value={category}
            onChange={handleChange("category")}
          >
            <option selected value="">
              Choose...
            </option>
            {categoriesOptions}
          </select>
        </div>
        <div className="form-group">
          <label className={noteLabelStyle} htmlFor="noteInput">
            Note
          </label>
          <input
            type="text"
            value={note}
            onChange={handleChange("note")}
            className={noteInputStyle}
            id="noteInput"
            aria-describedby="noteHelp"
            placeholder="And it came to pass..."
          />
          <small id="noteHelp" className="form-text text-muted">
            Add the store name or other details to remember this.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterExpense;
