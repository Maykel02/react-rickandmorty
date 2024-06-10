import Links from "./components/Links"

import routers from "../../routers/routers"


export default function Sidebar(){

    return(

        <div className="bg-white flex fixed w-72 ">
                <div className=" h-screen flex flex-col justify-center items-end py-5 px-10">
                    <div className="h-24">
                        <h1 className="text-2xl font-bold">Sidebar</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Links routers={routers} />
                    </div>
                </div>
                
        </div>
    )
}