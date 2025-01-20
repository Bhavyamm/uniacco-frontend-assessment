import {
  ProductActions,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  UPDATE_CATEGORIES,
  UPDATE_FILTERED_PRODUCTS,
  UPDATE_PRODUCTS,
} from "@/actions/productActions";

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case PRODUCTS_LOADING:
      return { ...state, loading: action.payload };
    case PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
