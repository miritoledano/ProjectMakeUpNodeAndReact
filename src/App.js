
import './App.css';
import NavBar from './NavBar';
import { ProductList } from "./features/product/ProductList";
import { Details } from "./features/product/details";
import { Route, Routes } from 'react-router-dom';
import { Footer } from "./Footer";
import { Home } from "./Home";
import { ShoppingCart } from "./features/order/ShoppingCard";
import { SmallCart } from "./features/product/basketSmall";
import { SingUp } from "./features/user/SingUp"
import { Loginn } from './features/user/Login';
import { Form } from "./features/order/Form"
import { useDispatch } from 'react-redux';
import { userIn } from './features/user/userSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addToBasket } from './features/order/orderSlice';
import {setBasket,setCount} from "./features/order/orderSlice"
import { AddProduct } from './features/product/AddProduct';
import {UpdateProduct}from "./features/product/UpdateProduct"
import{AllOrders}from "./features/order/AllOrders"
import {ProtectedRoute}from "./ProtectedRoute"

function App() {

  let dispatch = useDispatch();
  useEffect(() => {
    let user = localStorage.getItem("currentUser");
    if (user) {
      dispatch(userIn(JSON.parse(user)));
    }
  }, []);

  useEffect(() => {
    let basket = localStorage.getItem("basket");
    if (basket) {
      dispatch(setBasket(JSON.parse(basket)));
    }
    
    let count = localStorage.getItem("count");
    console.log("count", count);
    if (count) {
      dispatch(setCount(JSON.parse(count)));
    }
  }, []);

 

 
  return (
    <>


  
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<ProductList />}>
               <Route path="updatProduct" element={<UpdateProduct />} />

            <Route path=":id" element={<Details />} />
            <Route path=":id/small" element={<SmallCart />} />

          </Route>
          <Route path="wong" element={<ShoppingCart />} >
            <Route path="form" element={<Form />} />
            <Route path="Login" element={<Loginn />} />
          </Route>
          <Route path="form" element={<Form />} />

          <Route path="list" element={<Details />} />
          <Route path="SingUp" element={<SingUp />} />
          <Route path="Login" element={<Loginn />} />
          <Route path="Addproduct" element={<ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>}/>
          <Route path="allOrders" element={<ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>}/>
         <Route path="Addproduct" element={<AddProduct />} />
          <Route path="allOrders" element={<AllOrders />} />
       
          

          {/* <Route path="/form" element={<Form />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
