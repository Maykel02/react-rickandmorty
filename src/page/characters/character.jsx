import { useParams } from "react-router-dom"
import Cards from "./components/Cards"
import {useCharacter} from "./hooks/useCharacters"

function Character(){

    const  {id}  = useParams()
    const { character } = useCharacter([id])

    return(
        <section className="ml-72 px-16" >
            <div className="relative">
                <h1 className="py-16 text-center text-4xl"> Personaje Detalles</h1>
                <div>
                    {
                        <Cards
                            image={character.image}
                            name={character.name}
                        />
                    }
                </div>
            </div>
        </section>
    )
}

export default Character