function CardEpisode({name,date,id}){

    return (
        <div className="bg-white p-4 ">
            <h1 className="text-2xl font-semibold">Epsidode {id} </h1>
            <h2 className="text-2xl font-normal">{name}</h2>
            <p>{date}</p>
        </div>
    )
}

export default CardEpisode