import React, {useState, useContext} from 'react'
import CartItem from './CartItem'
import { NavLink, Link } from 'react-router-dom'
import Button from '../styles/Button'
import Error from '../styles/Error'
import { UserContext } from '../contexts/UserContext'
import { Store } from 'react-notifications-component'



function Cart({cartItems, setCartItems, handleRemoveItem}) {
  
  const {user, setUser} = useContext(UserContext)
  const [errors, setErrors] = useState([])


  function handleEmptyCart(){
    cartItems.length = 0
   setCartItems(cartItems.splice(0, cartItems.length))
  }

  const costItem = () =>{
    let itemCost = 0
    for (const item of cartItems){
      itemCost += item.price * item.quantity
  }
  return itemCost.toFixed(2)
}

const totalPrice = costItem()

function handleOrder(e){
  e.preventDefault()

  const order_items_param = cartItems.map( item => ({item_id: item.id, quantity: item.quantity}))
  
  fetch('/orders', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({order_items_param})
  }).then((response)=> {
    if (response.ok) {
        response.json().then(order => addOrder(order))
    } else {
        response.json().then((error)=> setErrors(error.errors))
    }
}).then(handleEmptyCart())

Store.addNotification({
  title: `Thank you!`,
  message: `Order has been placed!`,
  type: "warning",
  insert: "top",
  container: "top-center",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 2500,
    onScreen: true
  }
});
}

function addOrder(order){
  console.log(order)
  console.log(user)
  const updatedUser = {...user, 
  orders : [...user.orders, order]}
  setUser(updatedUser)
}

  return (
    <div className='cart-items-page'>
      {cartItems.length >= 1 ? (<div className='cart-items-list'>
      <h3>Your cart items:</h3><br/>
      {cartItems.map( item => (
        
        <CartItem key={item.description} item={item} handleRemoveItem={handleRemoveItem}
        cartItems={cartItems} setCartItems={setCartItems}/>
      ))}
     
      <h4>Total cost: <b>${totalPrice}</b> <small>*plus taxes</small></h4><br/>
      <NavLink as={Link} to='/menu'><Button>Add more items</Button></NavLink>
      {cartItems.length > 2 ? <Button style={{backgroundColor: "red", color: 'white'}} onClick={handleEmptyCart}>Empty cart</Button> : null}
       <Button onClick={handleOrder} style={{backgroundColor: "orange", color: "white"}}>Place order</Button>
       {errors.map((error)=> (
                    <Error key={error}>{error}</Error>
                ))}
    </div>) : 
    (<>
      <h3 className='empty-cart'>Your cart is empty. </h3>
    <NavLink as={Link} to='/menu'><Button>Add items</Button></NavLink>
    <br/>
    {user.orders.length > 1 ? 
    <NavLink as={Link} to='/user-profile'>
      <Button style={{backgroundColor: "orange", color: "white"}}>See previous orders</Button></NavLink> : null}
    </>)}
  </div>
  )
}

export default Cart