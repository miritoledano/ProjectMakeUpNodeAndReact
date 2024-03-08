import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addOrder } from "./orderApi";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {EmptyBasket} from "../order/orderSlice"
import { TextField, Button, Box } from "@mui/material";

export const Form = () => {
  const basket = useSelector((state) => state.order.basket);
const dispatch=useDispatch();
  const user = useSelector((state) => state.user.currentUser);
const minmalProdact=basket.map(product=>({CountProduct:product.CountProduct,name:product.name,_id:product._id}))
  console.log(user)
  const [message, setMessage] = useState("");
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {

      const response = await addOrder(data.address, minmalProdact,data.DueDate, user.token);
      console.log(response)
      setMessage("ההזמנה בוצעה בהצלחה");
      localStorage.removeItem("basket")
      localStorage.removeItem("count")
      dispatch(EmptyBasket())
      reset();
    } catch (error) {
      setMessage(error.response.data.message);
      console.error("Error details:", error);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div style={{fontWeight:"bolder",marginBottom:"13px"}}> השלם את הפרטים:</div>
      <Box>
  <TextField
    label="מספר כרטיס אשראי:"
    variant="outlined"
    margin="dense"
    {...register("creditCardNumber", {
      required: "שדה חובה",
      pattern: {
        value: /^\d{16}$/,
        message: "יש להזין 16 ספרות"
      }
    })}
    error={Boolean(errors.creditCardNumber)}
    helperText={errors.creditCardNumber?.message}
   
  />
</Box>
<Box>
        <TextField
          label="תוקף:"
          variant="outlined"
          margin="dense"
        
        />
      </Box>
      <Box>
        <TextField
          label="שלוש ספרות בגב הכרטיס:"
          variant="outlined"
          margin="dense"
        
        />
      </Box>

      <Box>
        <TextField
          label="כתובת:"
          variant="outlined"
          margin="dense"
          {...register("address", { required: "שדה חובה" })}
          error={Boolean(errors.address)}
          helperText={errors.address?.message}
        />
      </Box>

     

      <Box>
        <TextField
          label="תאריך יעד:"
          variant="outlined"
          margin="dense"
          {...register("DueDate", { required: "שדה חובה" })}
          error={Boolean(errors.DueDate)}
          helperText={errors.DueDate?.message}
        />
      </Box>
      

      <Button
        type="submit"
        variant="contained"
        style={{ marginTop: "20px", backgroundColor: "rgb(228, 90, 128)" }}
      >
        שליחה
      </Button>
      <Link to="/list">
      <Button
        type="submit"
        variant="contained"
        style={{ marginTop: "20px",marginRight:"250px",marginLeft:"25px", backgroundColor: "rgb(228, 90, 128)" }}
      >
        חזרה לחנות
      </Button>
                </Link> 

      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
