import { useState } from "react";

const EnterExpense = ({ addExpense, categories }) => {
  var today = new Date().toDateString();
  const [date, setDate] = useState(today);
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const goodLabelStyle = "";
  const badLabelStyle = "text-danger";
  const goodInputStyle = "";
  const badInputStyle = "form-control is-invalid";

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
        <option key={i} value={item}>
          {item}
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
    if (categoryLabelStyle === "") {
      setCategoryLabelStyle(badLabelStyle);
      setCategorySelectStyle(badInputStyle);
      okay = false;
    } else {
      setCategoryLabelStyle(goodLabelStyle);
      setCategorySelectStyle(goodInputStyle);
    }

    if (okay) {
      try {
        let float_amount = Number(amount);
        setDate(new Date().toDateString());
        setNote("");
        setCategory("");
        setAmount("");
        addExpense({
          date: date,
          amount: float_amount,
          category: category,
          note: note,
        });
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
        setDate(e.target.value);
        break;
      default:
        alert(`An unknown data: ${data} was passed into the switch statement.`);
        break;
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={amountLabelStyle} for="dateinput">
            Date
          </label>
          <input type="date" value={date} onChange={handleChange("date")} />
        </div>
        <div className="form-group">
          <label for="amountinput">Amount</label>
          <input
            type="number"
            className={amountInputStyle}
            value={amount}
            onChange={handleChange("amount")}
            pattern="\d*"
            id="amountinput"
            aria-describedby="amountHelp"
            placeholder="Enter Expense Amount"
          />
          <small id="amountHelp" className="form-text text-muted">
            Remember the change!
          </small>
        </div>
        <div className="form-group">
          <label className={categoryLabelStyle} for="categorySelect">
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
          <label className={noteLabelStyle} for="noteInput">
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
