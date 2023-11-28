import { useState, useEffect, createContext } from "react";

const ItemsContext = createContext();

function ItemsProvider({children}){
    const [items, setItems] = useState(null)

    useEffect(()=> {
        fetch('/items').then((response)=> {
            if(response.ok){
                response.json().then((items)=> setItems(items))
            }
        })
    },[])

    return <ItemsContext.Provider value={{items, setItems}}>{children}</ItemsContext.Provider>
}
export {ItemsContext, ItemsProvider}