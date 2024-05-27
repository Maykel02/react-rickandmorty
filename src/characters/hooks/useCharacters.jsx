
import { useEffect, useState } from 'react'
import { getAllCharacter, getByIdCharacter, getMultipleCharacter, getFilterCharacter } from '../services/apiUsers'



function UseCharactes(){
    const [ characters, setCharacters ] = useState([])
    

    useEffect(()=>{

        
        async function fetchCharacterAll(){
            try{
            const data = await getAllCharacter()
            setCharacters(data)
            }catch(error){
                console.log(error.message)
            }
        }
        fetchCharacterAll()
    },[])


  return{
    characters
  }
}

export default UseCharactes

