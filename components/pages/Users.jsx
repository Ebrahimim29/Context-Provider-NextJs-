'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import TableLoading from "../particial/TableLoading";

const UsersPage = () => {
    
    const [users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const handleGetUsers = async () => {
        setIsLoading(true)
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        if (res.status === 200) {
            setUsers(res.data)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        handleGetUsers()
    },[])

    return isLoading ? (<TableLoading/>) : (
        <div className={"w-full p-4"}>
            <table className={"table w-full"}>
                <thead>
                    <tr className={"h-8"}>
                        <td className={"bg-amber-700 rounded-r-md"}>#</td>
                        <td className={"bg-amber-600 rounded-r-md"}>IdNumber</td>
                        <td className={"bg-amber-500 rounded-r-md"}>UserName</td>
                        <td className={"bg-amber-400 rounded-r-md"}>Email</td>
                        <td className={"bg-amber-300 rounded-l-md"}>Address</td>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td className={"bg-emerald-700 rounded-r-md p-1"}>{user.id}</td>
                            <td className={"bg-emerald-600"}>{user.name}</td>
                            <td className={"bg-emerald-500"}>{user.username}</td>
                            <td className={"bg-emerald-400"}>{user.email}</td>
                            <td className={"bg-emerald-300 rounded-l-md p-1"}>{user.address?.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default UsersPage;