import UseCharactes from "../hooks/useCharacters"

function Characters(){

    const { characters } = UseCharactes()

    return(
        <>
            <h1>Characters</h1>
            {characters.map((users)=>(
                <h2 key={users.id}>{users.name}</h2>
            ))}
        </>
       
    )
}

export default Characters
