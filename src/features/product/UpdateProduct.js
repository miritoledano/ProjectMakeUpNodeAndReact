import { useNavigate } from "react-router-dom";
export const UpdateProduct = () => {
    let navigate = useNavigate();
    
    return (   
        
      <div
        className="allDivProduct"
        style={{
          position: "fixed",
          top: "55%",
          left: "50%",
          padding: "10%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "  rgba(249, 222, 230, 0.99)",
          borderRadius: "8px",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
          zIndex: "999",
          textAlign: "center",
          overflow: "auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>עדכון מוצר</h1>
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            padding: "5px",
            backgroundColor: "black",
            color: "#fff",
            border: "none",
            borderRadius: "8px 0  0  0",
            cursor: "pointer",
            width: "40px",
            height: "30px",
          }}
        >
          X
        </button>
      </div>
     );
}
 
export default UpdateProduct;