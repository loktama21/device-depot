// frontend/src/App.js
import React, { useState } from "react"
import Header from "./components/Header"
import FilterBar from "./components/FilterBar"
import ProductGrid from "./components/ProductGrid"
import "./index.css"

function App() {
  // Holds the current filter values
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    search: "",
  })

  return (
    <div className="App">
      <Header />
      <FilterBar onFilterChange={setFilters} />

      {/* Pass the current filters into ProductGrid */}
      <ProductGrid filters={filters} />
    </div>
  )
}

export default App
