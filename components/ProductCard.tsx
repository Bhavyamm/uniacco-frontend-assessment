"use client";

import { Product } from "@/types/Product";
import Image from "next/image";
import React from "react";

const ProductCard = ({
  data,
  handleFavorite,
}: {
  data: Product;
  handleFavorite: (productId: number) => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-md shadow hover:shadow-lg transition duration-200 overflow-hidden">
      {data.image && (
        <div className="relative h-48 w-full">
          <Image
            src={data.image}
            alt={data.title}
            style={{ objectFit: "cover" }}
            loading="lazy"
            fill
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>

        {data.price && (
          <p className="text-lg text-green-600 mb-2">
            ${data.price.toLocaleString()}
          </p>
        )}

        {data.category && (
          <p className="text-lg font-bold mb-2">
            {`Category: ${data.category}`}
          </p>
        )}
        <button
          type="button"
          className="px-4 py-2 text-white bg-red-500 rounded-md 
             hover:bg-red-600"
          onClick={() => handleFavorite(data.id)}
        >
          {data.isFavourite ? "Unfavourite" : "Favourite"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
