import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { BiExit } from "react-icons/bi";
import { userOut } from "./features/user/userSlice";
// import { Dispatch } from "@reduxjs/toolkit";
import { setBasket,setCount } from "./features/order/orderSlice";
import "./NavBar.css";
// import { orderSlice } from "./features/order/orderSlice";
 export const NavBar = () => {
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user.currentUser)?.userName
 const countProduct=useSelector((state=>state.order.count))
 const role = useSelector((state) => state.user.currentUser)?.role

 const handleLogout = () => {
  dispatch(userOut());
  dispatch(setBasket([]));
  dispatch(setCount(0));
  window.location.href = "/";
};
  return (
    <>
{role==="ADMIN"&&(<div class="html-container">
<div class="html-section">
      <div class="html-project">
        <div class="navigation">
     
          <nav>
       
            {" "}
            <img  id="logo" src="/logo.jpg"></img>
            <ul class="nav-type">
            <li>
              

            <Link to={"/allOrders"}>
             
orders
              
                
                {/* <FavoriteBorderOutlinedIcon
                  sx={{ fontSize: 39 }}
                ></FavoriteBorderOutlinedIcon> */}

          </Link>
            </li>
            <li>
              <a
                href="/" 
                target="_blank"
                class="active"
              >
                Home
              </a>
            </li>
            
           
            
              <li>
              


                <Link to={"/list"}>
product
                
                  
                  {/* <FavoriteBorderOutlinedIcon
                    sx={{ fontSize: 39 }}
                  ></FavoriteBorderOutlinedIcon> */}

               </Link>
              </li>
              <li>
                <a
                  href="/" 
                  target="_blank"
                  class="active"
                >
                  Home
                </a>
              </li>
              
             
            
              <li>
              <Link to={"/Addproduct"}>
AddProduct
                
                  
                  {/* <FavoriteBorderOutlinedIcon
                    sx={{ fontSize: 39 }}
                  ></FavoriteBorderOutlinedIcon> */}

               </Link>
              </li>
              <li>
           
             
              {user}
             
             <BiExit size="2em"  onClick={handleLogout} />
          

            
            </li>
            </ul>{" "}
          </nav>
        </div>
      </div>
    </div>
  </div>)}
  {role=="user"&&(<div class="html-container">
    
    <div class="html-section">
      <div class="html-project">
        <div class="navigation">
     
          <nav>
        
            {" "}
            <img  id="logo" src="/logo.jpg"></img>
            
            <ul class="nav-type">
              <li>
            
              <Link to={"/wong"}>
              {countProduct}
                  {/* target="_blank"
                  class="active" */}
                
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: 39 }}
                  ></ShoppingBagOutlinedIcon>
                </Link>
               
              </li>{" "}
              <li>
              {/* <div class="container">
<input type="text" placeholder="Search..."/>
<div class="search"></div>
</div> */}

                <Link to={"/list"}>

                
                  
                  <FavoriteBorderOutlinedIcon
                    sx={{ fontSize: 39 }}
                  ></FavoriteBorderOutlinedIcon>
               </Link>
              </li>
              <li>
                <a
                  href="/" 
                  target="_blank"
                  class="active"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/TomikaBoy/full/LqMpaE"
                  target="_blank"
                  class="active1"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>
              <li>
           
              {user}
             
               <BiExit size="3em" onClick={handleLogout} />
            

              
              </li>
            </ul>{" "}
          </nav>
        </div>
      </div>
    </div>
  </div>)}
  {role===undefined&&(<div class="html-container">
    
    <div class="html-section">
      <div class="html-project">
        <div class="navigation">
     
          <nav>
       
            {" "}
            <img  id="logo" src="/logo.jpg"></img>
            <ul class="nav-type">
              <li>
            
              <Link to={"/wong"}>
              {countProduct}
                  {/* target="_blank"
                  class="active" */}
                
                  <ShoppingBagOutlinedIcon
                    sx={{ fontSize: 39 }}
                  ></ShoppingBagOutlinedIcon>
                </Link>
               
              </li>{" "}
              <li>
              {/* <div class="container">
<input type="text" placeholder="Search..."/>
<div class="search"></div>
</div> */}
                <Link to={"/list"}>
                  {/* href="/list"
                  target="_blank"
                  class="active" */}
                
                  
                  <FavoriteBorderOutlinedIcon
                    sx={{ fontSize: 39 }}
                  ></FavoriteBorderOutlinedIcon>
               </Link>
              </li>
              <li>
                <a
                  href="/" 
                  target="_blank"
                  class="active"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/TomikaBoy/full/LqMpaE"
                  target="_blank"
                  class="active1"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>
              <li>
              <Link to={"/Login"}>
                 
              {/* {user} */}
                <AccountCircleOutlinedIcon
                    sx={{ fontSize: 39 }}
                  ></AccountCircleOutlinedIcon>
                 
               </Link>
                 
              
              </li>
            </ul>{" "}
          </nav>
        </div>
      </div>
    </div>
  </div>)}
      
    </>
  );
};

export default NavBar;

