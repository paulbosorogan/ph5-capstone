import { useState, useEffect, createContext } from "react";

const OrdersContext = createContext();

function OrdersProvider({children}){
    const [orders, setOrders] = useState(null)
    useEffect(()=> {
        fetch('/orders').then((response)=> {
            if(response.ok){
                response.json().then((orders)=> setOrders(orders))
            }
        })
    },[])

    return <OrdersContext.Provider value={{orders, setOrders}}>{children}</OrdersContext.Provider>
}
export {OrdersContext, OrdersProvider}