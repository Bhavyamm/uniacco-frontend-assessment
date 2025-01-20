import { Product } from "@/types/Product";

export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_FILTERED_PRODUCTS = "UPDATE_FILTERED_PRODUCTS";
export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

interface UpdateProducts {
  type: string;
  payload: Product[];
}

interface UpdateFilteredProducts {
    type: string;
    payload: Product[];
  }

interface ProductsLoading {
  type: string;
  payload: boolean;
}

interface ProductsError {
  type: string;
  payload: string;
}

interface UpdateCategories {
  type: string;
  payload: string[];
}

export type ProductActions =
  | UpdateProducts
  | UpdateFilteredProducts
  | ProductsLoading
  | ProductsError
  | UpdateCategories;
