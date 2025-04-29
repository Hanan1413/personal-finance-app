import React from "react";

const SortBy = ({ sortOption, onSortOption }) => {
  return (
    <select value={sortOption} onChange={(e) => onSortOption(e.target.value)}>
      <option value="Latest">Latest</option>
      <option value="Oldest">Oldest</option>
      <option value="Amount: High to Low">Amount: High to Low</option>
      <option value="Amount: Low to High">Amount: Low to High</option>
    </select>
  );
};

export default SortBy;
