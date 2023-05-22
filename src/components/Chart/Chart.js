import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataNumbers = props.dataPoints.map((data) => data.value);
  const maxAmount = Math.max(...dataNumbers);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => {
        return (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={maxAmount}
            label={data.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
