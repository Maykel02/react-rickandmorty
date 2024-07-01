function Cards(props){

    const {
        name,
        image
    }=props

    return(
        <div className="flex justify-start">
            <div className="bg-white w-1/3 flex">
                <img  className="" src={image} alt="" />
                <div className="p-3">
                    <h1 className="text-4xl text-center">{name}</h1>

                </div>
            </div>
        </div>
        
    )
}

export default Cards