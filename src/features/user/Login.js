import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { Login } from "./userApi";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
//  import "./SingUp.css";
// import {useDispatch} from "react-redux"
import { userIn } from "./userSlice";
import "./Login.css"
export const Loginn = () => {
    const [userNotExist, setUserNotExist] = useState(false);
    const dispatch=useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
      const [message, setMessage] = useState("");
    
      const onSubmit = async (data) => {
        try {
          const response = await Login(data.email, data.password);
         
            setMessage(response.data.userName + " התחברת בהצלחה");
        
            window.location.href = "/";

            dispatch(userIn(response.data))
            reset();
          }
      
        
         catch (error) {
          setMessage(error.response.data.message);
          if(error.response.data.message==="User does not exist"){
            setUserNotExist(true);
                
          }
         console.error("Error details:", error);
        }
      };

  return (
    <div className="all-form">
        {userNotExist && (
            <div>
                <p>המשתמש לא קיים. נא להירשם:</p>
                <Link to="/SingUp">
                <Button
    type="submit"
    variant="contained"
    // color="#c71585"
    style={{
        marginTop: "20px",
        backgroundColor: "#ef4c80",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        boxShadow: "0px 2px 4px rgba(25, 118, 210, 0.2)",
        transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
    }}
>
    SingUp
</Button>
                </Link>
            </div>
        )}
      <div className="imag-from">
        <img
          src="https://www.flormar.co.il/wp-content/plugins/flormar-popup/popups//img/f_pink.png"
          alt="Flormar"
        ></img>
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
          <span style={{color:"#ef4c80"}}>HAPPINESS IS YOUR COLOR</span>
        </div>

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
<span>אני מסכים.ה לקבל מאוז קוסמטיקס בע"מ מידע על הטבות ודברי פרסומת, לרבות, מבצעים והנחות באמצעים טכנולוגים (לרבות, בדוא"ל, SMS, חיוג אוטומטי ועוד) בהתאם <a href="https://www.flormar.co.il/privacy-policy/"> למדיניות הפרטיות</a>
</span>
<Button
  type="submit"
  variant="contained"
  color="primary"
  style={{
    marginTop: "20px",
    backgroundColor: "#ef4c80",
    color: "white",
    border: "none",
    borderRadius: "15px",
    padding: "10px 20px",
    cursor: "pointer",
    // padding: "15px",
   
    width: "100%",
    boxShadow: "0px 2px 4px rgba(25, 118, 210, 0.2)",
    transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
  }}
>
  Login
</Button>

      </form>
    </div>
  );
};

export default Login;