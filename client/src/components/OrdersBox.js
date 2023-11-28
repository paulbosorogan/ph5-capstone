import React, {useState} from 'react'
import Button from '../styles/Button'

function OrdersBox({order}) {
  const [orderDetails, setOrderDetails] = useState(false)
  function handleOrderDetails(){
    setOrderDetails( orderDetails => !orderDetails)
  }

  function OrderDetails(){
    return (
      <div>
        <p>Order No. {order.id}</p> 
        
        { order.item_details.map( item => (
          <ul key={item.id}>
              <li><i>{item}</i></li>
          </ul>
        ))}
        <p>Total: $<b>{order.total_price}</b></p>
        <Button style={{backgroundColor: "red", color: "white"}} onClick={handleOrderDetails}>Close details</Button>
      </div>
  )} 

  function SimpleOrder(){
    return (
      <div>
        <p>Order No. {order.id}</p>  
        <p>Total: $<b>{order.total_price}</b></p>
        <Button onClick={handleOrderDetails}>See order details</Button>
      </div>
    )
  }
  return (
    <div className='column order-card'>
  
        { orderDetails ? <OrderDetails/> : <SimpleOrder/>}
             
    </div>
  )
}

export default OrdersBox