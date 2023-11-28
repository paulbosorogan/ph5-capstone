import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import OrdersBox from './OrdersBox'

function UserProfile() {
  const {user} = useContext(UserContext)

  const bodyText =  user.orders.length > 0 ? ('Here is a list of your previous orders:') :
     ('You haven`t placed an order yet? What are you waiting for?')
  
  
  return (
    <div className='user-profile-page'>
      <h3>Hello, {user.name}</h3>
      <div className='order-box'>
      <h2>{bodyText}</h2><br/>
        <div className='row orders'>
          {user.orders.map( (order, index) => (
              <OrdersBox key={index.toString()} order={order}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfile