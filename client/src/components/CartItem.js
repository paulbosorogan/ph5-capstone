import React from 'react'
import { Button } from 'react-bootstrap'

function CartItem({item, handleRemoveItem, cartItems, setCartItems}) {
    const {id, name, price, quantity} = item
 

    function Add(){
      const updatedCartItems = cartItems.map( product => {
        if(product.id === id){
          return {
            ...product,
            quantity: product.quantity + 1
          }
        } else {
          return product
        }
      })
      setCartItems(updatedCartItems)
    }

    function Substract(){
     const updatedLowerQuantity = cartItems.map ( product => {
      if(product.id === id && quantity > 1){
        return {
          ...product,
          quantity: product.quantity -1
        }
      } else {
        return product
      }
     })
     setCartItems(updatedLowerQuantity)
    }

  return (
  
    <div className="cart-card">
        <div className="cart-card-body">
          <h3 className='cart-card-title'><b>{name}</b></h3><hr/>
          <p><b>${price}</b></p>
          <div className='inside-cart-buttons'>
              <button className='substraction' onClick={Substract}> - </button>
              {quantity} 
              <button className='addition' onClick={Add}> + </button>
          </div>
          <Button style={{backgroundColor: "red", border: "none"}} onClick={()=>handleRemoveItem(id)}>Remove</Button>
        </div>
    </div>
  )
}

export default CartItem