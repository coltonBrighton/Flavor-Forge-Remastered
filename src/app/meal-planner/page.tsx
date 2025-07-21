import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MealPlannerDetails from "../components/daily-meals/MealPlannerDetails";

export default function mealPlannerPage() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <MealPlannerDetails dayOfWeek={"Sunday"} />
        <MealPlannerDetails dayOfWeek={"Monday"} />
        <MealPlannerDetails dayOfWeek={"Tuesday"} />
        <MealPlannerDetails dayOfWeek={"Wednesday"} />
        <MealPlannerDetails dayOfWeek={"Thursday"} />
        <MealPlannerDetails dayOfWeek={"Friday"} />
        <MealPlannerDetails dayOfWeek={"Saturday"} />
      </div>
    </div>
  );
}
