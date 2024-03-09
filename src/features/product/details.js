

//                     {/* <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" width="24" height="24" alt="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" title="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" data-was-processed="true"></img>
//                     <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" width="24" height="24" alt="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" title="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" data-was-processed="true"></img>
//                     <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-003-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-003-1.png?x23503" width="24" height="24" alt="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי BRONZE GLOW 003" title="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי BRONZE GLOW 003" data-was-processed="true"></img>
//                     <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-001-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-001-1.png?x23503" width="24" height="24" alt="SKIN REFRESH FOUNDATION סקין ריפרש  ROSE  001" title="SKIN REFRESH FOUNDATION סקין ריפרש  ROSE  001" data-was-processed="true"></img><img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-016-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-016-1.png?x23503" width="24" height="24" alt="SKIN REFRESH FOUNDATION סקין ריפרש  BRIGHT 016" title="SKIN REFRESH FOUNDATION סקין ריפרש  BRIGHT 016" data-was-processed="true"></img>
//                     <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-020-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-020-1.png?x23503" width="24" height="24" alt="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT IVORY 020" title="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT IVORY 020" data-was-processed="true"></img>
//                     <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-020-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-020-1.png?x23503" width="24" height="24" alt="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT IVORY 020" title="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT IVORY 020" data-was-processed="true"></img>
//                     <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-030-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-030-1.png?x23503" width="24" height="24" alt="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT BRIGHT 030" title="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT BRIGHT 030" data-was-processed="true"></img>

// import { GiSquare } from "react-icons/gi";
// import { FaShareSquare, FaHeart } from "react-icons/fa";
// import {SmallCart} from "./basketSmall"


// import { FaRegHeart } from "react-icons/fa6";
import './details.css';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "./productApi";
import { addToBasket } from "../order/orderSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Details = () => {
    let params = useParams();
    let [product, setProduct] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    let navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        getProductById(params.id)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                
                console.error('Error fetching product details:', error);
            });
    }, [params.id]);

    const handleAddToBasket = (product) => {
        dispatch(addToBasket(product));
        setShowSuccessMessage(true);
    };
    
    return (
        <>
        
            {product && (

                <div
                    className="item-details"
                    style={{
                        position: "fixed",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#ffd2e1",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "46%",
                        zIndex: "999",
                        textAlign: "center",
                        overflow: "auto",
                        //  backgroundColor:"rgb(246, 125, 209)"
                    }}
                >
                    
                     <button
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              padding: "5px",
            //   backgroundColor: "rgb(247, 95, 138)",
            backgroundColor:"black",

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
          
                    <div className="product-details">
                       
                        <img
                            src={product.ImagePath}
                            alt="תמונת המוצר"
                            style={{
                                 maxWidth: "50%",
                                top:"0",
                                bottom: "0",
                                // maxHeight: "50vh",
                                // cursor: "pointer",
                                transition: "transform 0.3s",
                                float: "right",
                                margin: "0 0 20px 20px"
                            }}
                            onClick={(e) => {
                                e.target.style.transform = "scale(1.2)";
                                setTimeout(() => {
                                    e.target.style.transform = "scale(1)";
                                }, 300);
                            }}
                        />

                        <h2 style={{marginTop:"25px"}}>{product.name}</h2>
                        <h3 style={{marginTop:"15px"}}>{product.Discribe}</h3>
                        
              <h4 style={{marginTop:"5px"}}>{product.price}:מחיר</h4>       
              <h4 style={{marginTop:"5px"}}>{product.code}:קוד</h4>  
        
  
              <h4 style={{marginTop:"5px"}}>{product.DateOfProduction}:תאריך יצור</h4>   
                        {showSuccessMessage && (
                            <div className="success-message">
                                {/* <p>המוצר נוסף לעגלה בהצלחה!</p> */}
                               {/* <SmallCart/>
                                <button onClick={() => setShowSuccessMessage(false)}>סגור</button>
                                <Link to="/wong">צפייה בעגלת הקניות</Link> */}
                                {/* <Link to="/small">צפייה בעגלת הקניות</Link> */}
                            </div>
                        )}
                    </div>
                  <Link to="small" >
                    <button
    className="plus-minus"
    onClick={() => handleAddToBasket(product)}
    style={{
        // position: "absolute",
        bottom: "0",
        left: "0",
        padding: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "rgb(247, 95, 138)",
        color: "#fff",
        cursor: "pointer",
        outline: "none",
        marginLeft: "20px",
        marginBottom: "20px",
        zIndex: "999",
    }}
>
    
    <i class="sh_m_sui_icon_addtocart_20px" data-v-42b4c5fb=""></i> הוסף לעגלה
  
</button>

</Link>
{/* <FaRegHeart style={{width:"400px"}}/> */}
<div className="colors">
<h2  className="color-change" style={{marginTop:"50px",marginRight:"150px",marginBottom:"10px"}}>colors:</h2>
                    <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" width="24" height="24" alt="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" title="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" data-was-processed="true"></img>
                                        <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-030-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/10/31000249-030-1.png?x23503" width="24" height="24" alt="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT BRIGHT 030" title="SKIN REFRESH FOUNDATION סקין ריפרש  LIGHT BRIGHT 030" data-was-processed="true"></img>

                    <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-001-1.png?x23503" width="24" height="24" alt="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" title="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי MOON GLOW 001" data-was-processed="true"></img>
                    <img class="item_color_image lazy loaded" data-optimized="product_color" src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-003-1.png?x23503" data-src="https://www.flormar.co.il/wp-content/uploads/2023/11/31000228-003-1.png?x23503" width="24" height="24" alt="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי BRONZE GLOW 003" title="MOOD BOOSTER ILLUMINATOR אילומינטור נוזלי BRONZE GLOW 003" data-was-processed="true"></img>
                    {/* <FaShareSquare
                            style={{ fontSize: "24px", marginRight: "190px", cursor: "pointer" ,marginTop:"20px"}}
                            onClick={() => {
                                // הוספת הלוגיקה לשיתוף המוצר
                            }}
                        />
                        <FaHeart
                            style={{ fontSize: "24px", cursor: "pointer",marginTop:"100px" }}
                            onClick={() => {
                                // הוספת הלוגיקה להוספת המוצר למועדפים
                            }}
                        /> */}</div>
                </div>
            )}
        </>
    );
};

export default Details;



