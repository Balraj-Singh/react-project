import "./ExpenseCalculator.css";

import Expenses from "../Expenses";
import NewExpense from "../../NewExpense/NewExpense";
import { useState } from "react";
import expensesDummyData from "../expenseDummyData";

function ExpenseCalculator() {
  const [allData, setAllData] = useState(expensesDummyData);

  const onSaveNewExpenseHandler = (expense) => {
    const newExpenseData = expense;
    setAllData((prevState) => {
      return [expense, ...prevState];
    });

    console.log("From Exp Calc");
    console.log(newExpenseData);
  };

  return (
    <>
      <NewExpense onSaveNewExpense={onSaveNewExpenseHandler} />
      <Expenses allData={allData} />
    </>
  );
}

export default ExpenseCalculator;
