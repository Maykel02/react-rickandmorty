
import { useEffect, useState } from 'react'
import { getData, getById } from '../../../services/apiUsers'



export default function UseCharactes(id = '',params = {}){
    const [ characters, setCharacters ] = useState([])

    useEffect(()=>{
        async function fetchData(){
            try{
            const data = await getData(`/character/${id}`, params)
            setCharacters(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])

      

  return{
    characters,
  }
}

export function useCharacter(id = []){
  const [ character, setCharacter ] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await getById(`/character/${id}`)
        setCharacter(data)
      }catch(error){
        console.log(error.messange)
        return error
      }
    }
    fetchData()
  },[])
  return {
    character
  }
}

