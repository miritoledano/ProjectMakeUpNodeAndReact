import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, addToBasket } from "../order/orderSlice";
import "./basketSmaiil.css";
// import { Link } from "react-router-dom";

export const SmallCart = () => {
  const [isVisible, setIsVisible] = useState(true);
  const basket = useSelector((state) => state.order.basket);
  const dispatch = useDispatch();

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };

  const deleteBasket = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <h2>עגלת קניות</h2>
          <div className="shopping-cart-small">
            <ul>
              {basket.map((item) => (
                <li key={item.id}>
                  <div className="count-small">
                    <button onClick={() => handleAddToBasket(item)}>+</button>
                    <h1>{item.CountProduct}</h1>
                    <button onClick={() => deleteBasket(item._id)}>-</button>
                  </div>
                  <span>{item.name}</span>
                  <img className="imgShoppingLarg-small" src={item.ImagePath} alt="תמונת המוצר" />
                </li>
              ))}
            </ul>
            <div className="purchase-button">
              {/* <Link to={"wong"}> */}
          {/* <button>למעבר לסל קניות:</button></Link> */}
        </div>
          </div>
        </>
      )}
    </>
  );
};

export default SmallCart;
