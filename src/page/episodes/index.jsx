import getEpisodes from "./hooks/useEpisodes"
import CardEpisode from "./components/CardEpisodes"

function Episodes() {

    const { episodes } = getEpisodes()

    return(
        <section className="ml-72 px-16" >
            <div className="relative">
                <h1 className="py-16 text-center text-4xl">Episdodes</h1>
                <span className="absolute right-0 top-2/4 -translate-y-1/2">Filter</span>
            </div>
            <div className="grid grid-cols-4 gap-6 pb-24">
                {episodes.map((item) => (
                    <CardEpisode
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    date={item.air_date}

                    />
                ))}
            </div>
        </section>
    )
}

export default Episodes