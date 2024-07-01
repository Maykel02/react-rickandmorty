import Characters from "../page/characters"
import Episodes from "../page/episodes"
import Location from "../page/location"
import Character from "../page/characters/character"

const routes = [
    {
        name: "Characters",
        layout: "main",
        path: "/",
        component: <Characters/>,
    },
    {
        name: "Location",
        layout: "main",
        path: "location",
        component: <Location/>,
    },
    {
        name: "Episodes",
        layout: "main",
        path: "episode",
        component: <Episodes/>,
    },
    {
        name: "Users",
        path: "users/:id",
        component: <Character/>,
    },
]

export default routes