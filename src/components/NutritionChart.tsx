import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./NutritionChart.scss";

interface NutritionChartProps {
  total?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
}

const NutritionChart = (props: NutritionChartProps) => {
  const data = [
    {
      name: "Total",
      Calories: props.total,
    },
    {
      name: "Protein",
      Calories: props.protein,
    },
    {
      name: "Carbs",
      Calories: props.carbs,
    },
    {
      name: "Fat",
      Calories: props.fats,
    },
  ];

  return (
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 12,
            right: 30,
            left: -15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Calories" fill="#731a06" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NutritionChart;
