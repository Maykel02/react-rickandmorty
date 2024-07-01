


function CardLocation({name, dimension, type}){

    return(
        <div className="bg-white p-4">
            <h2 className="text-2xl font-medium rounded-md">{ name }</h2>
            <p className="text-md">{ dimension }</p>
            <p className="font-medium">Tipo:  { type } </p>
        </div>
    )
}

export default CardLocation