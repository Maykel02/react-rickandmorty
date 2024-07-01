import { Routes, Route } from "react-router-dom"
import Sidebar from "../../components/sidebar"
import routes from "../../routers/routers"


const getRoutes = (routes) =>{
    return routes.map((route, index) => (
        <Route key={index} path={`/${route.path}`} element={route.component} />
    ))
}

export default function Admin(){

    return(
        <div className="w-full h-full">
            <Sidebar />
            <div className="w-full">
                <Routes>
                    {getRoutes(routes)}
                </Routes>
            </div>
        </div>
    )
}