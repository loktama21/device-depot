import React, { useState, useEffect } from 'react';

export default function FilterBar({ onFilterChange }) {
  // Filter state
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Notify parent whenever any filter changes
  useEffect(() => {
    onFilterChange({ category, minPrice, maxPrice, search: searchTerm });
  }, [category, minPrice, maxPrice, searchTerm, onFilterChange]);

  return (
    <div className="filter-bar">
      {/* Category dropdown */}
      <label>
        Category:
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
        </select>
      </label>

      {/* Price range inputs */}
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          placeholder="0"
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          placeholder="1000"
        />
      </label>

      {/* Name search */}
      <label>
        Search:
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search by name..."
        />
      </label>
    </div>
  );
}
