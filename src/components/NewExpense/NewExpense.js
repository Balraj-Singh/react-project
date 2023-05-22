import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  function onSaveFormDataHandler(expense) {
    const newExpenseData = { ...expense, id: Math.random.toString() };
    props.onSaveNewExpense(newExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveFormData={onSaveFormDataHandler} />
    </div>
  );
}
