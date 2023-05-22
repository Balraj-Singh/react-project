import { useState } from "react";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

export default function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2020");

  const listToRender = props.allData.filter((e) => {
    return e.date.getFullYear().toString() === chosenYear;
  });

  function handleOnSelectYear(selectedYear) {
    setChosenYear(selectedYear);
  }

  return (
    <div className="expenses">
      <ExpenseFilter
        chosenYear={chosenYear}
        onSelectYear={handleOnSelectYear}
      />
      <ExpenseChart expenses={listToRender}></ExpenseChart>
      <ExpenseList list={listToRender}></ExpenseList>
    </div>
  );
}
