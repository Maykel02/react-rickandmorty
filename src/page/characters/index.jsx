
import UseCharactes from "./hooks/useCharacters"
import CardsCharacters from "./components/CardsCharacters"

function Characters(){

    const { characters } = UseCharactes()
    

    return(
        <section className="ml-72 px-16" >
            <div className="relative">
                <h1 className="py-16 text-center text-4xl">Characters </h1>
                <span className="absolute right-0 top-2/4 -translate-y-1/2">Filter</span>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {characters.map((users)=>(
                    <CardsCharacters
                        key={users.id}
                        url={users.url}
                        name={users.name}
                        img={users.image}
                        status={users.status}
                        created={users.created}
                        species={users.species}
                        gender={users.gender}
                        origin={users.origin.name}
                    />
                ))}
            </div>
        </section>
    )
}

export default Characters
