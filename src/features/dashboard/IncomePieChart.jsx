import { PureComponent, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useRecentIncoms } from "./useRecentIncomes";
import styled from "styled-components";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

useEffect(function () {
  const { incomes } = useRecentIncoms();

  const dividend = incomes
    .filter((cur) => cur.title === "dividend")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const gift = incomes
    .filter((cur) => cur.title === "gift")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const loan = incomes
    .filter((cur) => cur.title === "loan")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const salary = incomes
    .filter((cur) => cur.title === "salary")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const dealing = incomes
    .filter((cur) => cur.title === "dealing")
    .reduce((acc, cur) => acc + cur.amount, 0);
}, []);

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class IncomePieChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
