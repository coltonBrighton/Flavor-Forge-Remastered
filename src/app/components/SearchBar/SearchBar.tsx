import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full border-slate-700 bg-indigo-950 py-4 flex justify-center">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          name="search"
          placeholder="Search Recipes"
          className="flex-grow px-4 py-2 border border-cyan-500 rounded-l-4xl placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-800 text-white border border-cyan-500 border-l-0 rounded-r-4xl hover:bg-blue-950 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}
