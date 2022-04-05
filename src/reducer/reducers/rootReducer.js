import { combineReducers } from "redux"
import priceRangeReducer from "../reducers/priceRangeReducer"
import emailReducer from "../reducers/emailReducer"
import cartReducer from "./cartReducer"
import productsReducer from "../reducers/productsReducer"
import productReducer from "../reducers/productReducer"

export const rootReducer = combineReducers({
  priceRange: priceRangeReducer,
  email: emailReducer,
  cart: cartReducer,
  products: productsReducer,
  productInfo: productReducer,
})
