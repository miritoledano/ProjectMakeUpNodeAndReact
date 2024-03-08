 import React from "react";
 import { useSelector, useDispatch } from "react-redux";
import {removeFromBasket,addToBasket}from "./orderSlice"
import './ShoppingCart.css'
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

export const ShoppingCart = () => {
  const role = useSelector((state) => state.user.currentUser)?.role
  const basket = useSelector((state) => state.order.basket);

   console.log("cart:", basket); // ניסיון להדפסת ה- cart בקונסול
  const dispatch = useDispatch();
  useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      dispatch({ type: "order/setBasket", payload: JSON.parse(savedCart) });
    }
  }, [dispatch]);

  // Save shopping cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(basket));
  }, [basket]);
const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
    

  
};
  const deletBasket = (productId) => {
  dispatch(removeFromBasket(productId));
  
};

 const calculateOrderSummary = () => {
  // חישוב סכום הזמנה
  const orderTotal = basket.reduce((total, item) => {
    return total + item.price * item.CountProduct;
    
  }, 0);
  const count = basket.reduce((total, item) => {
    return total +=item.CountProduct;
    
  }, 0);
  
  

  // קביעת עלות משלוח
  const shippingCost = 25; // עלות משלוח קבועה

  // חישוב הסכום הסופי כולל הזמנה ומשלוח
  const grandTotal = orderTotal + shippingCost;

  return {
    count,
    orderTotal,
    shippingCost,
    grandTotal,
  };
};

const orderSummary = calculateOrderSummary();


return (
  
  <>
 
      <h2>עגלת קניות</h2>
      
      <div className="shopping-cart">
      <div className="order-summary">
          <img className=" " src="/logo.jpg" />
          

          <h3>סיכום הזמנה</h3>
          <p>סה"כ: ₪{orderSummary.orderTotal.toFixed(2)}</p>
          <p>עלות משלוח: ₪{orderSummary.shippingCost.toFixed(2)}</p>
          <p>כמות: {orderSummary.count.toFixed(2)}</p>

          <h4 id="pay">
            סה"כ כולל משלוח: ₪{orderSummary.grandTotal.toFixed(2)}
          </h4>
          <Link to="/list">
                  <button >חזרה לחנות</button>
                </Link> 
       
          {role==undefined&&(
        <Link to="login">
  <button>לסיום הזמנה</button>
</Link>)}  
      {role!==undefined&&( <Link to="form">
  <button>לסיום הזמנה</button>
</Link>)}
<div className="ashrai">
  

  💕מכבדים את כל כרטיסי האשראי
<img src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282719811871317559.webp" class="c" data-v-5293e92d=""/>
<img src="//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.webp" class="c" data-v-5293e92d=""/>
<img src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.webp" class="c" data-v-5293e92d=""/>
<img src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.webp" class="c" data-v-5293e92d=""/>
</div>

          <div className="buttonS">
            {" "}
            {/* <Link to={"/order/form"}>
              <button className="purchase-button">רכישה</button>
            </Link> */}

          </div>
        </div>{" "}
        <ul>
        <div className="allProduct">:כול הפריטים</div>

          {basket.map((item) => (
            <li key={item.id}>
              <div className="count">
                <button onClick={() => handleAddToBasket(item)}>+</button>
                <h1>{item.CountProduct}</h1>
                <button onClick={() => deletBasket(item._id)}>-</button>
               
              </div>
<div className="all">
              <h2>{item.name}</h2>
              <h3>{item.Discribe}</h3>  
              <h4>{item.price*item.CountProduct}:מחיר</h4>       
              {/* <h4>{item.code}קוד:</h4>     */}
              </div>


                 
              
           
              <img style={{marginRight:"10px"}} className="imgShoppingLarg" src={item.ImagePath} alt="תמונת המוצר" />
             
               
            </li>
                 
          ))
          }
          
                
        </ul>
    
                
      
    
      
        </div>
      <Outlet/>
    </>
);
};

export default ShoppingCart;
