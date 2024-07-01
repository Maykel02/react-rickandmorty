import { useEffect, useState } from "react"
import { getData } from "../../../services/apiUsers"


function getEpisodes(){

    const [ episodes, setEpisodes ] = useState([])

    useEffect(()=>{

        async function fetchEpisodes(){
            try{
                const data = await getData('/episode')
                setEpisodes(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchEpisodes()
    },[])

    return{
        episodes
    }
}

export default getEpisodes