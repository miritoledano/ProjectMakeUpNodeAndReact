import { createSlice } from '@reduxjs/toolkit'
// import { json } from 'react-router-dom';

 const initialState={
    //  details:{DueDate: "",
    //  address: "",
    // orderDate: "",
    //  TheOrderHasStarted: false,
    //  userId: ""},
     basket:[],
     count:0
   
 }
 
export const orderSlice=createSlice({
   name:"order",
    initialState,
    reducers:{
      EmptyBasket:(state,action)=>{
        state.basket=[];
        state.count=0;
      },
        addToBasket: (state, action) => {
            
          const existingProductIndex = state.basket.findIndex(item => item._id === action.payload._id);
          
          if (existingProductIndex!==-1) {
            state.basket[existingProductIndex].CountProduct += 1;
           state.count++;
          } else {
            state.basket.push({ ...action.payload, CountProduct: 1 });
            state.count++;

            console.log(localStorage.getItem("count"));
          }
          localStorage.setItem("basket", JSON.stringify(state.basket));
      localStorage.setItem("count", JSON.stringify(state.count));
        }, 
         setCount:(state,action)=>{
          state.count = action.payload;
         },
        setBasket: (state, action) => { // הוספת הפעולה החדשה
          state.basket = action.payload;
        },
        removeFromBasket: (state, action) => {
          const index = state.basket.findIndex(item => item._id === action.payload);
    
          if (index !== -1) {
            if (state.basket[index].CountProduct > 1) {
              state.basket[index].CountProduct -= 1;
              state.count--;
            } else {
              state.basket.splice(index, 1);

             
            }
          }
    }

    }

})
export const {addToBasket,removeFromBasket,addToOrders,setBasket,setCount,EmptyBasket} = orderSlice.actions

export default orderSlice.reducer

