const BudgetCard = ({ category, budget_amount, current_amount }) => {
  debugger;
  let actualSpent = 0;
  if (current_amount != null && current_amount.hasOwnProperty(category)) {
    actualSpent = current_amount[category];
  }
  return (
    <div className="card card-block p-2">
      <div className="card-body"> </div>
      <h5 className="card-title">{category}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Budget: {budget_amount}</h6>
      <p className="card-text">Spent: {actualSpent}</p>
    </div>
  );
};

export default BudgetCard;
