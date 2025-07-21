"use client";
import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import SearchBar from "../components/SearchBar/SearchBar";
import RecipeSummaryCards from "../components/recipe/RecipeSummaryCards";
import { Recipe } from "../types";

export default function recipePage() {
  // put recipes in state and set recipie in state
  const [r, setR] = useState<Recipe[]>([]);
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => setCollapsed(!collapsed);
  return (
    <div className="bg-slate-800 min-h-screen md:ml-64">
      <div className="">
        <Sidebar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="border-b-2 flex items-center justify-start">
        <h3 className="text-2xl p-5">Favorites</h3>
        <button
          className="px-4 py-2 rounded-4xl bg-blue-800 hover:bg-blue-950 transition"
          onClick={toggleCollapse}
        >
          {collapsed ? "Show Favorites" : "Hide Favorites"}
        </button>
      </div>
      <div className="border-b-2 flex items-center justify-start">
        <h3 className="text-2xl p-5">All Recipes</h3>
      </div>
      <div
        className="m-3 grid grid-cols-1 md:grid-cols-3 gap-x-1 gap-y-4 justify-items-center"
      >
        {r.map((recipe, index) => (
          <RecipeSummaryCards key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
