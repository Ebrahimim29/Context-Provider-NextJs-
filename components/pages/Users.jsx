import axios from "axios"
import { useEffect, useState } from "react"

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

    )
}