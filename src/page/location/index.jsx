import useLocationes from "./hooks/useLocactiones"
import CardLocation from "./components/CardLocation"

function Location(){

    const { locationes } = useLocationes()
    console.log(locationes)
    return(
        <section className="ml-72 px-16" >
            <div className="relative">
                <h1 className="py-16 text-center text-4xl">Location</h1>
                <span className="absolute right-0 top-2/4 -translate-y-1/2">Filter</span>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {locationes.map((item) => (
                    <CardLocation
                        key={item.id}
                        name={item.name}
                        type={item.type}
                        dimension={item.dimension}
                    />
                ))}
            </div>
        </section>
    )
}


export default Location