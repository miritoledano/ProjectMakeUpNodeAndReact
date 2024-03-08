import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { addProduct } from "./productApi";
import { useSelector } from "react-redux";
import "./AddProduct.css"
export const AddProduct = () => {
    const user = useSelector((state) => state.user.currentUser);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        try {
            const response = await addProduct(data.code, data.name, data.ProviderCode, data.Discribe,user.token);
            setMessage(response.data + " המוצר נוסף בהצלחה");
            reset();
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        
            <div style={{ maxWidth: '600px', width: '100%', padding: '20px', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                <h1>הוספת מוצר חדש</h1>
                <form className="for"
                
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div className="addToCard">היי הוסף את  הכנס את המוצר שברצונך להוסיף</div>
                    <TextField
                        label="code"
                        variant="outlined"
                        margin="dense"
                        {...register("code", {
                            required: { value: true, message: "שדה זה הינו חובה" },
                        })}
                    />
                    {errors.code && (
                        <Alert severity="error" style={{ marginBottom: "10px" }}>
                            {errors.code.message}
                        </Alert>
                    )}

                    <TextField
                        label="name"
                        variant="outlined"
                        margin="dense"
                        {...register("name")}
                    />
                    {errors.name && (
                        <Alert severity="error" style={{ marginBottom: "10px" }}>
                            {errors.name.message}
                        </Alert>
                    )}

                    <TextField
                        label="providerCode"
                        variant="outlined"
                        margin="dense"
                        {...register("providerCode")}
                    />
                    {errors.providerCode && (
                        <Alert severity="error" style={{ marginBottom: "10px" }}>
                            {errors.providerCode.message}
                        </Alert>
                    )}

                    <TextField
                        label="Discribe"
                        variant="outlined"
                        margin="dense"
                        {...register("Discribe")}
                    />
                    {errors.Discribe && (
                        <Alert severity="error" style={{ marginBottom: "10px" }}>
                            {errors.Discribe.message}
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
                        color="primary"
                        style={{
                            marginTop: "20px",
                            backgroundColor: "#ef4c80",
                            color: "white",
                            border: "none",
                            borderRadius: "15px",
                            padding: "10px 20px",
                            cursor: "pointer",
                            width: "30%",
                            boxShadow: "0px 2px 4px rgba(25, 118, 210, 0.2)",
                            transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
                        }}
                    >
                        הוסף מוצר
                    </Button>
                </form>
                <div className="imgLast">
  {/* <img className="imggLast" src="/1.png" /> */}
  </div>
            </div>
        // </div>
    );
};

export default AddProduct;
