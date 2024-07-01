import { useEffect, useState } from "react"
import { getData } from "../../../services/apiUsers"


function useLocationes(){
    const [ locationes, setLocation ] = useState([])

    useEffect(()=>{

        async function fetchLocationAll(){
            try{
                const data = await getData('/location')
                setLocation(data)
            }catch(error){
                console.log(error.message)
            }
        }
        fetchLocationAll()
    },[])

    return{
        locationes
    }
}

export default useLocationes