"use client";

import { UPDATE_FILTERED_PRODUCTS, UPDATE_PRODUCTS } from "@/actions/productActions";
import ProductCard from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Product } from "@/types/Product";
import React, { useEffect, useState } from "react";

export default function Favourites() {
  const [favouriteProducts, setFavouriteProducts] = useState<Product[]>([]);
  const { products } = useAppSelector((state) => state);
  const dispatch = useAppDispatch()

  const currentProducts = products.products as Product[]
  const currentFilteredProducts = products.filteredProducts as Product[];

  const getFavouriteProducts = () => {
    const filteredProducts = currentProducts.filter(
      (product: Product) => product.isFavourite
    );
    setFavouriteProducts(filteredProducts);
  };

  useEffect(() => {
    getFavouriteProducts();
  }, [products]);

  const handleFavorite = (productId: number) => {
    const toggleFavourite = (product: Product) =>
      product.id === productId
        ? { ...product, isFavourite: !product.isFavourite }
        : product;

    const updatedProducts = currentProducts?.map(toggleFavourite) || [];
    const updatedFilteredProducts =
    currentFilteredProducts?.map(toggleFavourite) || [];

    dispatch({
      type: UPDATE_PRODUCTS,
      payload: updatedProducts,
    });

    dispatch({
      type: UPDATE_FILTERED_PRODUCTS,
      payload: updatedFilteredProducts,
    });
  };
  return (
    <>
      {favouriteProducts.length === 0 ? (
        "No Favourite Products"
      ) : (
        <div className="grid grid-cols-4 gap-4 p-4 mb-16">
          {favouriteProducts?.map((product: Product) => (
            <ProductCard key={product.id} data={product} handleFavorite={handleFavorite}/>
          ))}
        </div>
      )}
    </>
  );
}
