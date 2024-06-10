import { Link } from "react-router-dom"

export default function Links(props ){

    const { routers } = props

    const createLinks = (routes)=>{
        return routes.map((route, index) => (
                <Link key={index} to={route.path}>
                    <p className="font-semibold text-lg">{route.name}</p>
                </Link>

        ))
    }

    return createLinks(routers)
}