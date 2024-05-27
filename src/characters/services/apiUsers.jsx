import axios from "axios";

const API_BASE_URL = 'https://rickandmortyapi.com/api/'

const AxiosInstace = axios.create({
    baseURL: API_BASE_URL
})


export async function getAllCharacter(){
    try{
        const response = await AxiosInstace.get('/character');
       return response.data.results
    }catch(error){
        console.log(error.message);
        return error
    }
}

export async function getByIdCharacter(id=1){
    try{
        const response = await AxiosInstace.get(`/character/${id}`)
        return response
    }catch(error){
        const err = error
        console.log(err.message)
        return err
    }
}

export async function getMultipleCharacter(id1=1,id2=2){
    try{
        const response = await AxiosInstace.get(`/character/${id1},${id2}`)
        return response
    }catch(error){
        const err = error
        console.log(err.message)
        return err
    }
}

export async function getFilterCharacter(options){
    try{
        const response = await AxiosInstace.get('/character',{
            params:options
        })
        return response.data.results
    }catch(error){
        const err = error
        console.log(err.message)
        return err
    }
}



