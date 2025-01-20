"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Product } from "@/types/Product";
import { UPDATE_FILTERED_PRODUCTS } from "@/actions/productActions";

type SortOrder = "Ascending" | "Descending" | "Default"

const SortProducts = () => {
  const { products } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [sortOrder, setSortOrder] = useState<SortOrder>("Default");

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as SortOrder);
  };

  useEffect(() => {
    let sorted: Product[] = products.filteredProducts as Product[];

    if (sortOrder === "Ascending") {
      sorted = [...products.filteredProducts as Product[]].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "Descending") {
      sorted = [...products.filteredProducts as Product[]].sort((a, b) => b.price - a.price);
    }

    dispatch({
      type: UPDATE_FILTERED_PRODUCTS,
      payload: sorted,
    });
  }, [sortOrder]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl space-y-4">
      <label
        htmlFor="sort-select"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Sort by Price:
      </label>
      <select
        id="sort-select"
        value={sortOrder}
        onChange={handleSort}
        className="block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="Default">Default</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
};

export default SortProducts;
