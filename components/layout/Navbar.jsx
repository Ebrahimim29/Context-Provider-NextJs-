'use client'

import { MainContext } from "@/context/MainContext"
import { useContext } from "react"
import ToggleBtn from "../particial/ToggleBtn"

const Navbar = () => {
    const {setDarkMode} = useContext(MainContext)
    
    return(
        <nav className={"bg-amber-300 dark:bg-gray-500 h-navber_height fixed top-0 left-0 w-full shadow-lg"}>
            <div className={"w-full p-1 h-full"}>
                <div className={"h-full flex items-center"}>
                    <ToggleBtn title={"dark"} onChange={(e)=>setDarkMode(e.target.checked ? "dark" : "light")}/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;