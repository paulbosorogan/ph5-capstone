import React, {useState, useContext} from 'react'
import Button from '../styles/Button'
import '../index.css'
import {UserContext} from '../contexts/UserContext'
import EditItem from './EditItem'

function Item({item, handleClickItem, handleRemoveItem, onDeleteItem, onUpdate}) {
const [addToCartButton, setAddToCartButton] = useState(true)
const [isEdit, setIsEdit] = useState(false)
const {id, name, description, price} = item
const {user} = useContext(UserContext)

function handleDeleteItem(){
  fetch(`/items/${id}`,{
    method: "DELETE",
  }) 
  .then(onDeleteItem(id))
}
function activateEdit(){
  setIsEdit(isEdit => !isEdit)
}

function AdminItem(){
  return (
    <div className="card-body">
    <h5 className="card-title"><b>{name}</b></h5><hr/>
    <p className="card-text">{description}</p>
    <p className="card-price"><b>${price}</b></p>
    {isEdit ? <EditItem id={id} name={name} price={price} description={description} item={item} onUpdate={onUpdate}
    activateEdit={activateEdit} /> : 
    (
    <><Button onClick={activateEdit}>Edit item</Button>
    <Button 
    style ={{backgroundColor: "red", color: 'white'}}
    onClick={handleDeleteItem}>Remove item</Button></>)}
    </div>
  )
}

function handleAddItem(){
    handleClickItem({...item, quantity: 1})
    setAddToCartButton(addToCartButton => !addToCartButton)
}

function UserItem(){
  return (
  <div className="card-body">
              <h5 className="card-title"><b>{name}</b></h5><hr/>
              <p className="card-text">{description}</p>
              <p className="card-price"><b>${price}</b></p>
              {addToCartButton ? <Button 
              onClick={handleAddItem}>Add to cart</Button>
              : <Button onClick={()=> {
                handleRemoveItem(id)
                setAddToCartButton(addToCartButton => !addToCartButton)
                }}
                style ={{backgroundColor: "red", color: 'white'}}>Remove from cart</Button>}
                
            </div>
            )
}
  return (
    <div className='items-page'>
        <div className="card">
            { user.name === "admin" ? <AdminItem/> : <UserItem/>}
        </div><br/>
    </div>
  )
}

export default Item