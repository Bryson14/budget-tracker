import { useState } from "react";

const EnterExpense = ({
  addExpense,
  categories,
  category_amount_remaining,
}) => {
  var today = new Date().toISOString();
  today = today.slice(0, today.indexOf("T"));
  const [date, setDate] = useState(today);
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [photo, setPhoto] = useState(null);

  const goodLabelStyle = "col-sm-4 col-form-label text-white";
  const badLabelStyle = "text-danger col-sm-4 col-form-label text-white";
  const goodInputStyle = "form-control";
  const badInputStyle = "form-control is-invalid";

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
      let left_to_spend = "";
      if (
        category_amount_remaining[item.name] != null &&
        category_amount_remaining[item.name] > 0
      ) {
        left_to_spend =
          "$" + String(Math.round(category_amount_remaining[item.name]));
        left_to_spend = left_to_spend.padEnd(5) + "- ";
      } else {
        left_to_spend = "$0".padEnd(5) + "- ";
      }
      return (
        <option key={i} value={item.name}>
          {left_to_spend}
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
          setDate(today);
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
    <form onSubmit={handleSubmit} className="px-4">
      <div className="form-group row">
        <label className={dateLabelStyle} htmlFor="dateinput">
          Date
        </label>
        <div className="col-sm-8">
          <input
            type="date"
            className={dateInputStyle}
            value={date}
            onChange={handleChange("date")}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className={amountLabelStyle} htmlFor="amountinput">
          Amount
        </label>
        <div className="col-sm-8">
          <input
            type="number"
            step="0.01"
            className={amountInputStyle}
            value={amount}
            onChange={handleChange("amount")}
            id="amountinput"
            aria-describedby="amountHelp"
            placeholder="Amount"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className={categoryLabelStyle} htmlFor="categorySelect">
          Category
        </label>
        <div className="col-sm-8">
          <select
            className={categorySelectStyle}
            value={category}
            onChange={handleChange("category")}
          >
            <option value="">Choose...</option>
            {categoriesOptions}
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className={noteLabelStyle} htmlFor="noteInput">
          Note
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            value={note}
            onChange={handleChange("note")}
            className={noteInputStyle}
            id="noteInput"
            aria-describedby="noteHelp"
            placeholder="Description"
          />
        </div>
      </div>

      <div className="form-group row">
        <label className={noteLabelStyle} htmlFor="pictureInput">
          Recipt Picture
        </label>
        <div className="col-sm-8">
          <input
            type="file"
            className={noteInputStyle}
            value={photo}
            onChange={(e) => setPhoto(e.target.files[0])}
            alt="submit a picture"
            id="pictureInput"
            aria-describedby="pictureHelp"
            placeholder="submit a picture"
            accept="image/*"
          />
        </div>
      </div>

      <div className="form-group row justify-content-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EnterExpense;
