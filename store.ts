import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './reducers/productsReducer'

const rootReducer = combineReducers({
    products: productsReducer,
  });

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch