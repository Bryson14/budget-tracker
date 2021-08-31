// import ModalExpenses from "./modal_expenses";
// import { useState } from "react";

const BudgetCard = ({
  category,
  budget_amount,
  amount_remaining,
  category_transactions,
}) => {
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
    card_style_class += " text-white budget-past-100-percent";
    message = "| No budget for this.";
  } else if (budget_amount === 0 && spent < 0) {
    // refund on a category that has $0 budget
    card_style_class += " text-white bg-info";
    message = " | Reason: Refund?";
  } else if (spent / budget_amount > 1) {
    // 100 % usage
    card_style_class += " text-white budget-past-100-percent";
  } else if (spent / budget_amount > 0.8) {
    // approaching 80% of usage
    card_style_class += " text-white budget-between-50-100";
  } else if (spent / budget_amount > 0.5) {
    card_style_class += " text-white bg-secondary";
  } else {
    card_style_class += " text-white budget-below-50";
  }

  // const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    let s = `Transaction${
      category_transactions.length > 1 ? "s" : ""
    } for ${category}`;
    s += "\n";

    // arbitrary magic number 32 to stop text wrap on iphone
    for (let i = 0; i < 32; i++) {
      s += "_";
    }
    s += "\n\n";
    category_transactions.forEach((trans) => {
      const date_obj = new Date(trans.date);
      const day_month_date =
        String(date_obj.getMonth() + 1) + "/" + String(date_obj.getUTCDate());
      s += `${day_month_date} - $${trans.amount} - ${trans.note}\n`;
    });

    if (category_transactions.length === 0) {
      s = `No transaction for ${category} this month.`;
    }
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
