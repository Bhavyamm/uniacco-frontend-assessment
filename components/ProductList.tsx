"use client";

import { Product } from "@/types/Product";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  UPDATE_CATEGORIES,
  UPDATE_FILTERED_PRODUCTS,
  UPDATE_PRODUCTS,
} from "@/actions/productActions";
import FilterProducts from "./FilterProducts";
import SortProducts from "./SortProducts";
import Pagination from "./Pagination";

const ProductList = () => {
  const { products } = useAppSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(
    (products.filteredProducts?.length || 0) / itemsPerPage
  );
  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res: Product[] = await data.json();

      const updatedProducts: Product[] = res.map((item: Product) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        image: item.image,
        isFavourite: false,
      }));

      dispatch({
        type: UPDATE_PRODUCTS,
        payload: updatedProducts,
      });

      const allCategories = updatedProducts.map(
        (product: Product) => product.category
      );

      const uniqueCategories = Array.from(new Set(allCategories));
      const categoriesWithAll = ["All", ...uniqueCategories];

      dispatch({
        type: UPDATE_CATEGORIES,
        payload: categoriesWithAll,
      });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFavorite = (productId: number) => {
    const toggleFavourite = (product: Product) =>
      product.id === productId
        ? { ...product, isFavourite: !product.isFavourite }
        : product;

    const updatedProducts = products.products?.map(toggleFavourite) || [];
    const updatedFilteredProducts =
      products.filteredProducts?.map(toggleFavourite) || [];

    dispatch({
      type: UPDATE_PRODUCTS,
      payload: updatedProducts,
    });

    dispatch({
      type: UPDATE_FILTERED_PRODUCTS,
      payload: updatedFilteredProducts,
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.filteredProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <SortProducts />
      <FilterProducts />
      <div className="grid grid-cols-4 gap-4 p-4 mb-16">
        {currentProducts?.map((product: Product) => (
          <ProductCard
            key={product.id}
            data={product}
            handleFavorite={handleFavorite}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductList;
