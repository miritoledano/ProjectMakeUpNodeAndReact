import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { addUser,Login } from "./userApi";
import { userIn } from "./userSlice";
import {  } from "@reduxjs/toolkit";
import "./SingUp.css";
import { useDispatch } from "react-redux";

export const SingUp = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState("");
const dispatch=useDispatch()
  const onSubmit = async (data) => {
    try {
      const res = await addUser(data.email, data.password, data.userName);
      setMessage("נירשם בהצלחה");

      const response = await Login(data.email, data.password);
         
            setMessage(response.data.userName + " התחברת בהצלחה");
        window.location.href = "/";
            
            dispatch(userIn(response.data))
      console.log(res.message);
      reset(); // Reset the form after successful submission
    } catch (error) {
      setMessage(error.response.data.message);
      console.log("error", error);
    }
  };

  return (

    <div className="all-form">
    <div className="imag-from">
      <img  className="img" src="https://www.flormar.co.il/wp-content/plugins/flormar-popup/popups//img/f_pink.png" alt="Flormar"></img>
    </div>
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        padding: "20px",
      }}
    >
      <div className="text-Login">
        היי, איזה כיף שבאת :)
        <br />
        הצטרפי למועדון הצבעוני של פלורמר
        <br />
        <span>HAPPINESS IS YOUR COLOR</span>
      </div>

      <TextField
        label="userName"
        variant="outlined"
        margin="dense"
        {...register("userName", {
          required: { value: true, message: "שדה זה חובה" },
          minLength: { value: 3, message: "שם משתמש קצר מידי" },
        })}
        // InputProps={{
        //   style: { width: '70%', border: '1px solid #ef4c80' }, // כאן ניתן לשנות את הגודל וסגנון המסגרת
        // }}
      />
      {/* {errors.userName && (
        <Alert   severity="error" style={{ marginBottom: "10px" }}>
          {errors.userName.message}
        </Alert>
      )} */}

      <TextField
        label="email"
        variant="outlined"
        margin="dense"
        {...register("email", {
          required: { value: true, message: "שדה זה חובה" },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "כתובת דואר אלקטרוני לא חוקית",
          },
        })}
      />
      {errors.email && (
        <Alert severity="error" style={{ marginBottom: "10px" }}>
          {errors.email.message}
        </Alert>
      )}

      <TextField
        className="m"
        label="password"
        variant="outlined"
        margin="dense"
        type="password"
        {...register("password", {
          required: { value: true, message: "שדה זה חובה" },
          minLength: { value: 6, message: "סיסמה קצרה מידי" },
        })}
      />
      {errors.password && (
        <Alert severity="error" style={{ marginBottom: "10px" }}>
          {errors.password.message}
        </Alert>
      )}

      {message && (
        <Alert severity="success" style={{ marginBottom: "10px" }}>
          {message}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        // color="pink";
        style={{ marginTop: "20px"  , backgroundColor: "#FF007F" }}
      >
        הרשם
      </Button>
    </form>
  </div>
);
};
   

export default SingUp;