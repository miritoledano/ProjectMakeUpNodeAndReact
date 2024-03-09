import { Alert } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
// import { ProductListItem } from "./ProductItem";
import { getProduct,deleteProduct,updateById } from "./productApi";
// import { addToBasket } from "../order/orderSlice";
import SearchIcon from '@mui/icons-material/Search';
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./productList.css";
import { Box, TextField, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';


import {SmallCart} from "./basketSmall"
export const ProductList = () => {
  const [arr, setArr] = useState([]);
   const [page, setPage] = useState(1);
   const [searchTerm, setSearchTerm] = useState('');
  //  const [buttomDelate,setbuttomDelate]=useState(false);
  //  const [buttomUpdate,setbuttomUpdate]=useState(false);
   const role = useSelector((state) => state.user.currentUser)?.role
   const token = useSelector((state) => state.user.currentUser)?.token
   const [showInput, setShowInput] = useState(false);
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState("");
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  // const dispatch = useDispatch();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    
  };
  const handleSearchSubmit = () => {
    setShowInput(true);
    // כאן תוכל להשתמש ב search כדי לסנן את הרשימה של המוצרים ולהציג רק את אלה שמתחילים בשם המוצר שנמצא ב search
    // לדוגמה, אם הרשימה של המוצרים שמוצגת כרגע היא arr, תוכל לסנן אותה כך:
    const filteredProducts = arr.filter((product) =>
      product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setArr(filteredProducts);
  };
  useEffect(() => {
    getProduct(currentPage, 10, "")
      .then((res) => {
        setArr(res.data);
      })
      .catch(() => {
        alert("לא ניתן לטעון את המוצרים");
        console.log("error");
      });
  }, [currentPage]);
  const handleDeleteConfirmation = (product) => {
    if (window.confirm('האם את מעוניין למחוק את המוצר?')) {
      onSubmitDelate(product);

    }
  };
  const handleUpdate = (product) => {
   
      onSubmitUpdate(product);
    
  };
  
  const onSubmitDelate = async (data) => {
    try {
        const response = await deleteProduct(data._id,token);

        setMessage(response.data + "המוצא נימחק" );
        window.location.reload();
        // reset();
    } catch (error) {
        setMessage(error.response.data.message);
    }
};
const onSubmitUpdate = async (data) => {
  try {
      const response = await updateById(data._id);
      setMessage(response.data + " המוצר נוסף בהצלחה");
      // reset();
  } catch (error) {
      setMessage(error.response.data.message);
  }
};
 
  return (
    <>
    <div class="container">
        <img class="image" src="/3.png" alt="3"/>
        <img class="image" src="/4.png" alt="2"/>
        <img class="image" src="/2.png" alt="1"/>
      </div>

      <Box display="flex" alignItems="center" className="serch2">
      <TextField className="search1"
        label="חיפוש"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        margin="dense"
        size="small"
        sx={{ borderRadius: '20px', marginRight: '20px' }}
        InputProps={{
          style: { width: '80%' }, // כאן ניתן לשנות את הגודל וסגנון המסגרת
        }}
      />
      <Button
        variant="contained"
        onClick={handleSearchSubmit}
        sx={{
          borderRadius: '20px',
          padding: '8px 16px',
       
          backgroundColor: '#1565c0', // גוון וורד כהה יותר
          color: 'white',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        <SearchIcon />
      </Button>
    </Box>

      {/* <input  style={{backgroundColor:"black"}}  type="text" value={searchTerm} onChange={handleSearchChange} /> */}
     {message && (
                        <Alert severity="success" style={{ marginBottom: "10px" }}>
                            {message}
                        </Alert>
                    )}
      <div className="product-list">
        
    

        {arr.map((item) => (
          <div className="product-item">
          <div className="product-image">
            {/* <img class="no-lazy" data-optimized="product_card_label" src="https://www.flormar.co.il/wp-content/uploads/2022/04/lable-42-1.png?x23503" width="70" height="70" alt="" title="" data-eio="p" /> */}
            <div className="overlay-image">
              <img src={item.ImagePath} alt="תמונת המוצר" />
              
            </div>
          </div>
          <div className="product-details">
            <p>{item.code}</p>
            {/* <p>{item.price}</p> */}
            {/* Add more details here if needed */}
          </div>
          <h4>{item.name}</h4>
          <div className="add-to-cart">
          {role==="ADMIN"&&(
      <div>
        <Link to={"updatProduct"}>
      <button className="update-product-btn" onClick={() => handleDeleteConfirmation(item)}>מחק מוצר</button>
      <button className="update-product-btn" onClick={() => handleUpdate(item)}>עדכן מוצר</button></Link>
    </div>
    )}
     {role!=="ADMIN"&&(
      
               <Link to={"" + item._id}>
           <button   className="plus-minus"><i class="sh_m_sui_icon_addtocart_20px" data-v-42b4c5fb=""></i></button>
           </Link>
           
         )}
         <Rating name="size-small" defaultValue={2} size="small" />
          </div>
        </div>
        
        ))}
        <Outlet />

        <style jsx>{`
        .gold-stars {
          margin-left:200px;
          margin-bottom:7px;
          display: flex;
          justify-content: space-between; /* מרחק אחיד בין הכוכבים */
          width: fit-content; /* מתאים את רוחב הקונטיינר לכמות התוכן */
        }
        
        .gold-stars svg {
          color: goldenrod; /* צבע הכוכבים */
          font-size: 20px; /* גודל הכוכבים */
      
        }
        
          // .product-list {
          //   display: grid;
          //   grid-template-columns: repeat(4, 1fr);
          //   gap: 80px;
          //   margin-left: 70px;
          //   margin-right: 70px;
          //   margin-top: 100px;
          //   margin-bottom: 4px;

          //   // background-color: rgba(249, 222, 230, 0.45);

          // }
          .product-item {
            // background-color:rgba(249, 222, 230, 0.45);
            position: relative;
            overflow: hidden;
            // border: 1px solid #ddd;
            // padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
            border-radius: 15px;
          }
          .product-item:hover {
            transform: translateY(-5px);
          }
          .product-image {
            position: relative;
            overflow: hidden;
            // border: 1px solid #000;
            border-radius: 5px;
          }
          
          .product-image img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.3s;
          }
          
          .product-image:hover img {
            transform: scale(1.1);
          }
          
          .product-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            // padding: 5px;
          }
          
          .product-actions button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
          }
          
          .product-actions button:hover {
            color: #f00;
          }
          
          
          
          .product-details {
            padding: 10px;
          }
          .add-to-cart {
            display: flex;
            align-items: center;
            // justify-content: center;
            margin-top: 10px;
            flex-direction: column;
           

            
          }
        
          .plus-minus {
            // border-radius: 5000px/20px; /* רדיוס עיגול גבוה מאוד ליצירת חצי עיגול */
            // border: 1px  black;
            // padding: 5px 10px;
            // cursor: pointer;
            // outline: none;
            border: 0;
    border-radius: 5000px ;
    padding: 2px  10px;
    cursor: pointer;
    border:solid black 0.8px;
    margin-left:200px;
    margin-bottom:5px;
        }
          .plus-minus:hover {
            background-color: ##FFC0CB;
          }
          .cart-icon {
            font-size: 24px;
            margin-left: 10px;
            cursor: pointer;
          }
          .cart-icon:hover {
            color: #f44336;
          }
          .success-message {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .success-message button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            margin-left: 10px;
            border-radius: 3px;
          }
          .success-message button:hover {
            background-color: #218838;
          }.sh_m_sui_icon_addtocart_20px{
            
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
            direction: rtl;
            --item-horizontal-gap: 4px;
            --item-vertical-gap: 12px;
            text-transform: none;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            color: #000;
            cursor: pointer;
            box-sizing: border-box;
            letter-spacing: normal!important;
            display: inline-block;
            width: 20px;
            height: 20px;
            isolation: isolate;
            background: url(data:image/svg+xml;base64,PHN2ZyBzdHlsZT0id2lkdGg6YXV0bztoZWlnaHQ6MWVtIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDMuMjV2MS41aDIuMTRsMS4yIDkuM2gxMS43MDNsLjk2MS03LjMxaC0xLjUxM2wtLjc2NCA1LjgxSDYuNjZsLTEuMi05LjNIMnoiIGZpbGw9IiMwMDAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjkgNC43NDdoLTEuNXYxLjk5aC0ydjEuNWgydjEuOTloMS41di0xLjk5aDJ2LTEuNWgtMnYtMS45OXpNNy4zMyAxNi4zYTEgMSAwIDEwLTIgMCAxIDEgMCAwMDIgMHpNMTcuMDUgMTYuM2ExIDEgMCAxMC0yIDAgMSAxIDAgMDAyIDB6IiBmaWxsPSIjMDAwIi8+PC9zdmc+) no-repeat;
            background-size: 100%;
            // padding:10px;
            margin-left:5px;
            margin-right:5px;

          }
        `}</style>
  
      </div>
     
      {/* <input  className="kkk"
  type="text"
  value={searchTerm}
  onChange={handleSearchChange}
  style={{ backgroundColor: "black" }}
/> */}
      <Pagination  className="page" count={4} sx={{ '& .Mui-selected': { backgroundColor: 'pink' }}} page={currentPage} onChange={handlePageChange} />
      <div className="imgLast">
  <img className="imggLast" src="/1.png"  alt="5"/>
  </div>
  
    </>
  );
};

export default ProductList;

