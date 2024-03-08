import { createSlice } from '@reduxjs/toolkit';
import { setBasket, setCount } from '../order/orderSlice';
import { useDispatch } from 'react-redux';

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userIn: (state, action) => {
      state.currentUser = action.payload;
    //  alert(state.currentUser)
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    userOut: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    localStorage.removeItem("basket");
      localStorage.removeItem("count");
      window.location.reload();

    },
   
  },
});

export const { userIn, userOut } = userSlice.actions;
export default userSlice.reducer;
