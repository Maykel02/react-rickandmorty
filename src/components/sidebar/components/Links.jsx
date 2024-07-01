import { NavLink } from "react-router-dom"

export default function Links( props ){

    const { routers } = props

    const createLinks = (routes)=>{
        return routes.map((route, index) => {
            if(
                route.layout === "main"
            ){
                return(
                    <NavLink 
                        key={index}
                        to={route.path}
                        className={ ({isActive}) => 
                            isActive ? 'text-red-500 font-medium'  : 'text-gray-500 font-medium'
                        }
                    >
                        {route.name}
                    </NavLink>
                )
            }
        } 
    )
    }

    return createLinks(routers)
}