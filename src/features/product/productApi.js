import axios from "axios"
let baseUrl = "http://localhost:5300/api/product/";
export const getProduct = (page, perPage, search) => {
  return axios.get(`${baseUrl}?page=${page}&perPage=${perPage}&txt=${search}`);
}

          export const getProductById=(id)=>{
return axios.get(`http://localhost:5300/api/product/${id}`)
          }
          export const deleteProduct=(id,token)=>{
            const headers= {
              "x-access-token": token,
            }
            return axios.delete(`http://localhost:5300/api/product/${id}`, { headers })
                      }
          
          export const updateById=(id,token)=>{
            const headers= {
              "x-access-token": token,
            }
            return axios.put(`http://localhost:5300/api/product/${id}`,{headers})
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
       
                     