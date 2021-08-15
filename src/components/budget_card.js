const BudgetCard = ({ category, budget_amount, current_amount }) => {
  return (
    <div className="card">
      <div className="card-body"> </div>
      <h5 className="card-title">{category}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Budget: {budget_amount}</h6>
      <p className="card-text">Spent: {current_amount}</p>
    </div>
  );
};

export default BudgetCard;
