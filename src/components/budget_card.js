const BudgetCard = ({ category, budget_amount, current_amount }) => {
  // budget_amount may be passed in as a null object or .amount might be null
  budget_amount =
    budget_amount != null && budget_amount.amount != null
      ? budget_amount.amount
      : 0;

  let left_to_spend =
    budget_amount > current_amount ? budget_amount - current_amount : 0;

  let card_style_class = "card card-block mb-3 px-3 pb-2";
  let message = `  |  ${Math.round(
    (current_amount * 100) / budget_amount
  )}% usage`;

  if (budget_amount === 0 && current_amount === 0) {
    // Strange empty budget card, but just handling case
    card_style_class += "";
    message = "Error Card";
  } else if (budget_amount === 0 && current_amount > 0) {
    // spending on a category that has $0 budget
    card_style_class += " text-white bg-danger";
    message = "| No budget for this.";
  } else if (budget_amount === 0 && current_amount < 0) {
    // spending on a category that has $0 budget
    card_style_class += " text-white bg-info";
    message = " | Reason: Refund?";
  } else if (current_amount / budget_amount > 1) {
    // 100 % usage
    card_style_class += " text-white bg-danger";
  } else if (current_amount / budget_amount > 0.8) {
    // approaching 80% of usage
    card_style_class += " text-white bg-warning";
  } else if (current_amount / budget_amount > 0.5) {
    card_style_class += " text-white bg-secondary";
  } else {
    card_style_class += " text-white bg-success";
  }

  return (
    <div className={card_style_class}>
      <div className="card-body"> </div>
      <h5 className="card-title">{category}</h5>
      <p className="card-subtitle mb-2">Remaining: ${left_to_spend}</p>
      <h6 className="card-text">Budget: ${budget_amount}</h6>
      <p className="card-text">
        Spent: {current_amount} {message ? `${message}` : ""}
      </p>
    </div>
  );
};

export default BudgetCard;
