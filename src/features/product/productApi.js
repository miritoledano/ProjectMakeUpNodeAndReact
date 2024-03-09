import axios from "axios"
let baseUrl = "https://projectnode-1-49hj.onrender.com/api/product/";
export const getProduct = (page, perPage, search) => {
  return axios.get(`${baseUrl}?page=${page}&perPage=${perPage}&txt=${search}`);
}

          export const getProductById=(id)=>{
return axios.get(`https://projectnode-1-49hj.onrender.com/api/product/${id}`)
          }
          export const deleteProduct=(id,token)=>{
            const headers= {
              "x-access-token": token,
            }
            return axios.delete(`https://projectnode-1-49hj.onrender.com/api/product/${id}`, { headers })
                      }
          
          export const updateById=(id,token)=>{
            const headers= {
              "x-access-token": token,
            }
            return axios.put(`https://projectnode-1-49hj.onrender.com/api/product/${id}`,{headers})
                      }
          export const addProduct=(code, name, ProviderCode, Discribe,token)=>{
          const data={
            code:code,
            name:name,
            ProviderCode:ProviderCode,
            Discribe:Discribe
          }
          const headers= {
            "x-access-token": token,
          }
        
          return axios.post(baseUrl, data,{headers});
                      }
       
                     