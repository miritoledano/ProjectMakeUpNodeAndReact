
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/order/orderSlice";
import useReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    order: orderReducer,
    user:useReducer,
    count:orderReducer
  },
});
