import { useState, useEffect, createContext } from "react";

const UserContext = createContext();

function UserProvider({children}){
    const [user, setUser] = useState(null)
    console.log(user)
    useEffect(()=> {
        fetch('/me').then((response)=> {
            if(response.ok){
                response.json().then((user)=> setUser(user))
            }
        })
    },[])

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}
export {UserContext, UserProvider}