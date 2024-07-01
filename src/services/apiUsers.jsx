import axios from "axios";

const API_BASE_URL = 'https://rickandmortyapi.com/api/'

const AxiosInstace = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
      }
})


export async function getData(endpoint, params){

    const config = {
        params : params
    }
    
    try{
        const response = await AxiosInstace.get(endpoint, config);
       return response.data.results
    }catch(error){
        console.log(error.message);
        return error
    }
}

export async function getById(endpoint){

    try{
        const response = await AxiosInstace.get(endpoint)
        return response.data
    }catch(error){
        console.log(error.message)
        return error
    }
}