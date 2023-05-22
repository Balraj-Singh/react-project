import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showExpenseControls, setShowExpenseControls] = useState(false);

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (showExpenseControls) {
      const expenses = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveFormData(expenses);
    }

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    if (!showExpenseControls) setShowExpenseControls(!showExpenseControls);
  };

  const expenseControls = (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={changeTitleHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          value={enteredAmount}
          onChange={changeAmountHandler}
          min="0.01"
          step="0.01"
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          value={enteredDate}
          onChange={changeDateHandler}
          min="2019-01-01"
          max="2023-01-01"
        />
      </div>
    </div>
  );

  function cancelHandler() {
    setShowExpenseControls(false);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {showExpenseControls && expenseControls}
      <div
        className={
          showExpenseControls
            ? "new-expense__actions"
            : "new-expense__actions-default"
        }
      >
        {showExpenseControls && <button onClick={cancelHandler}>Cancel</button>}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
