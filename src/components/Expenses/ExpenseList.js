import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let listToRender = (
    <li className="expenses-list__fallback">It feels lonely in here</li>
  );

  if (props.list.length > 0) {
    listToRender = props.list.map((o) => (
      <ExpenseItem
        key={o.id}
        title={o.title}
        amount={o.amount}
        date={o.date}
      ></ExpenseItem>
    ));
  }

  return <ul className="expenses-list">{listToRender}</ul>;
};

export default ExpenseList;
