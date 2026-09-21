
import api from "./api"


export const fetchDataServices = async () =>{
    try{
      const response = await api.get('/db.json');
      return response.data.services;
    }catch(error){
      console.error('response is failed', error.response?.data || error.message);
      throw error;
    }
}

export const fetchDataPorjects = async () =>{
  try{
    const response = await api.get('/data/db.json');
    if (response.data && response.data.projects) {
      return response.data.projects;
    }
  }catch(error){
      console.error('response is failed', error.response?.data || error.message);
      throw error;
    }
}