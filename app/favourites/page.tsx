"use client";

import ProductCard from "@/components/ProductCard";
import { useAppSelector } from "@/hooks";
import { Product } from "@/types/Product";
import React, { useEffect, useState } from "react";

export default function Favourites() {
  const [favouriteProducts, setFavouriteProducts] = useState<Product[]>([]);
  const { products } = useAppSelector((state) => state);

  const getFavouriteProducts = () => {
    const filteredProducts = products.products.filter(
      (product: Product) => product.isFavourite
    );
    setFavouriteProducts(filteredProducts);
  };

  useEffect(() => {
    getFavouriteProducts();
  }, [products]);
  return (
    <>
      {favouriteProducts.length === 0 ? (
        "No Favourite Products"
      ) : (
        <div className="grid grid-cols-4 gap-4 p-4 mb-16">
          {favouriteProducts?.map((product: Product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      )}
    </>
  );
}
