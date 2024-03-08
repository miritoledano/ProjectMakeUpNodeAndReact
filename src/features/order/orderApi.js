import axios from "axios";

let baseUrl = "http://localhost:5300/api/order/";

export const addOrder = (address, theOrderedProducts ,/* userId, */DueDate,token) => {
  
  const data = {
    address: address,
    theOrderedProducts: theOrderedProducts,
  
    DueDate: DueDate
  };

  const headers= {
    "x-access-token": token,
  }

  return axios.post(baseUrl, data,{headers});
};
export const  getAllOrders= (token) => {
  
  
  const headers= {
    "x-access-token": token,
  }

  return axios.get(baseUrl,{headers});
};
export const updateById = (id, token) => {
  const headers= {
    "x-access-token": token,
  }
 return axios.put(`${baseUrl}${id}`, null, { headers });
};


 

