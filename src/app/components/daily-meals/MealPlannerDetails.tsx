"use client";
import React, { useState } from "react";

type Props = {
  dayOfWeek: string;
};

export default function MealPlannerDetails({ dayOfWeek }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="border-b p-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl  p-3 text-bold text-sky-200 w-120">{dayOfWeek}</h2>
        <button
          className="px-4 py-2 rounded-4xl bg-blue-800 hover:bg-blue-950 transition"
          onClick={toggleCollapse}
        >
          {collapsed ? "Hide Meals" : "Show Meals"}
        </button>
      </div>
    </div>
  );
}
