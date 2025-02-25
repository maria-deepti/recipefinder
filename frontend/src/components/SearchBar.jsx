import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for recipes..."
        className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;