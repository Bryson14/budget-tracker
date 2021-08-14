const EnterExpense = ({ expenses, setExpense, categories }) => {
  let categoriesOptions =
    categories.length > 0 &&
    categories.map((item, i) => {
      return (
        <option key={i} value={item}>
          {item}
        </option>
      );
    }, this);

  return (
    <div>
      <form>
        <div className="form-group">
          <label for="amountinput">Amount</label>
          <input
            type="number"
            className="form-control"
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
          <label for="categorySelect">Category</label>
          <select>
            <option selected>Choose...</option>
            {categoriesOptions}
          </select>
        </div>
        <div className="form-group">
          <label for="noteInput">Note</label>
          <input
            type="text"
            className="form-control"
            id="noteInput"
            aria-describedby="noteHelp"
            placeholder="And it came to pass..."
          />
          <small id="noteHelp" className="form-text text-muted">
            Add the store or other details to remember this.
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
