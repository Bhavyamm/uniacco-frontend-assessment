"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Product } from "@/types/Product";
import { UPDATE_FILTERED_PRODUCTS } from "@/actions/productActions";

const FilterProducts = () => {
  const { products } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    if (!products) return;
    let filteredProducts: Product[];

    if (selectedCategory === "All" || selectedCategory === "") {
      filteredProducts = products.products as Product[];
    } else {
      filteredProducts = products.products?.filter(
        (product: Product) => product.category === selectedCategory
      );
    }

    dispatch({
      type: UPDATE_FILTERED_PRODUCTS,
      payload: filteredProducts,
    });
  }, [selectedCategory, products.products]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl space-y-4">
      <label
        htmlFor="category-select"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Filter by Category:
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-md"
      >
        {products.categories?.map((category: string) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterProducts;
