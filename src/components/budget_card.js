// import ModalExpenses from "./modal_expenses";
// import { useState } from "react";

const BudgetCard = ({
  category,
  budget_amount,
  amount_remaining,
  category_transactions,
}) => {
  if (category == "Car Maintenance") {
    debugger;
  }
  // amount_remaining is what the actual left on the budget
  // budget_amount and amount_remaining may be passed in as undefined
  budget_amount = budget_amount != null ? budget_amount : 0;
  amount_remaining =
    amount_remaining != null ? amount_remaining : budget_amount;

  let left_to_spend = amount_remaining > 0 ? amount_remaining : 0;
  let spent = budget_amount - amount_remaining;

  let card_style_class = "card card-block h-100";
  // setting message for card color
  let message = `  |  ${Math.round((spent * 100) / budget_amount)}% Usage`;

  if (budget_amount === 0 && spent === 0) {
    // Strange empty budget card, but just handling case
    card_style_class += "";
    message = "Error Card";
  } else if (budget_amount === 0 && spent > 0) {
    // spending on a category that has $0 budget
    card_style_class += " text-white bg-danger";
    message = "| No budget for this.";
  } else if (budget_amount === 0 && spent < 0) {
    // spending on a category that has $0 budget
    card_style_class += " text-white bg-info";
    message = " | Reason: Refund?";
  } else if (spent / budget_amount > 1) {
    // 100 % usage
    card_style_class += " text-white bg-danger";
  } else if (spent / budget_amount > 0.8) {
    // approaching 80% of usage
    card_style_class += " text-white bg-warning";
  } else if (spent / budget_amount > 0.5) {
    card_style_class += " text-white bg-secondary";
  } else {
    card_style_class += " text-white bg-success";
  }

  // const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    let s = `Transaction for ${category}\n++++++++++++++++++++\n`;
    category_transactions.forEach((trans) => {
      debugger;
      s = s + `${trans.date} - $${trans.amount} - ${trans.note}\n`;
    });
    alert(s);
    // setModalVisible(!modalVisible);
  };
  return (
    <>
      <div className="col-8 col-md-4 col-no-padding">
        <div className={card_style_class} onClick={showModal}>
          <h5 className="card-title pt-3">{category}</h5>
          <div className="card-body text-left">
            <p className="card-subtitle mb-2">
              Remaining: ${left_to_spend.toFixed(2)}
            </p>
            <h6 className="card-text">Budget: ${budget_amount}</h6>
            <h6 className="card-text">
              Spent: {spent.toFixed(2)} {message ? `${message}` : ""}
            </h6>
          </div>
        </div>
      </div>
      {/* <ModalExpenses
        category_name={category}
        expenses={category_transactions}
        show={modalVisible}
        close_event={showModal}
      /> */}
    </>
  );
};

export default BudgetCard;
