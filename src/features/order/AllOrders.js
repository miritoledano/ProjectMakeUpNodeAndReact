import React, { useEffect, useState } from "react";
import { getAllOrders, updateById } from "./orderApi";
import { useSelector } from "react-redux";
import "./AllOrders.css"
export const AllOrders = () => {
  const token = useSelector((state) => state.user.currentUser?.token);
  
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getAllOrders(token)
      .then((res) => {
        setArr(res.data);
      })
      .catch(() => {
        alert("לא ניתן לטעון את המוצרים");
        console.log("error");
      });
  }, [token]);

  const send = (id) => {
    updateById(id, token)
      .then(() => {
        alert(" עודכן בהצלחה");
            window.location.reload();
      })
      .catch((err) => {
        alert("לא ניתן לשנות את מצב ההזמנה");
        console.error("error", err);
      });
  };

  return (
    <>
      {arr.map((item) => (
        <div key={item._id} className="order-card">
          <p>{item.address}:כתובת</p>
          <p>{item.DueDate}</p>
          {/* <p>{JSON.stringify(item.theOrderedProducts)}:המוצרים</p> */}
          <p>isCameOut: {item.TheOrderHasStarted ? "Yes" : "No"}</p>
          {!item.TheOrderHasStarted && (
            <button className="send-button" onClick={() => send(item._id)}>
              Send
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default AllOrders;
