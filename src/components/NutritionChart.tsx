import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Calories" fill="#8C7608" />
    </BarChart>
  );
};

export default NutritionChart;
