import ExpenseTable from "./expense_table";

const ModalExpenses = ({ category_name, expenses, show, close_event }) => {
  debugger;
  return (
    <div
      className="modal"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      visibility={show ? "visible" : "hidden"}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Expenses for {category_name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={close_event}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ExpenseTable expenses={expenses} tableVisible={true} />
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalExpenses;
