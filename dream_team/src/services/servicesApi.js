
import api from "./api"


export const fetchDataServices = async () =>{
    try{
      const response = await api.get('/services');
      return response.data;
    }catch(error){
      console.error('response is failed', error.response?.data || error.message);
      throw error;
    }
}