import React, {useContext, useState} from 'react'
import '../index.css'
import { ItemsContext } from '../contexts/ItemsContext'
import { UserContext } from '../contexts/UserContext'
import Item from './Item'
import Button from '../styles/Button'
import { NavLink, Link } from 'react-router-dom'



function Menu({handleClickItem, handleRemoveItem}) {
const {items, setItems} = useContext(ItemsContext)
const {user} = useContext(UserContext)
const [filterValue, setFilterValue] = useState('')

let filteredItems = []

if(filterValue){
  filteredItems = items.filter( item => item.category === filterValue)
}

function handleButton(e){
  setFilterValue(e.target.id)
}

function onDeleteItem(id){
  const afterDeleteItem = items.filter ( item => item.id !== id)
  setItems(afterDeleteItem)
}

function onUpdate(updatedItem){
  const updatedItems = items.map( item => item.id === updatedItem.id ? updatedItem : item)
  setItems(updatedItems)
}
  return (
      <div className='menu-list-page'>
        <div className='filter-buttons'>
          <Button className='column' id='bowl' style={{
            width: '170px',
            height: '100px',
            marginRight: '10px',
            backgroundSize: 'cover',
            backgroundImage: `url('https://i.imgur.com/8MUsCSI.jpg')`,
            borderRadius: '20px',
            fontSize: '1.5rem',
            color: 'white',
            textShadow: '2px 2px 5px black',
            zoom: '1.5',
          }}
          onClick={handleButton}>Poke Bowls
          </Button>

          <Button className='column' id='ramen' style={{
            width: '170px',
            height: '100px',
            marginRight: '10px',
            backgroundSize: 'cover',
            backgroundImage: `url('https://i.imgur.com/fuAunjJ.jpg')`,
            borderRadius: '20px',
            fontSize: '1.5rem',
            color: 'white',
            textShadow: '2px 2px 5px black',
            zoom: '1.5'
          }}
          onClick={handleButton}>Ramen Noodles
          </Button>

          <Button className='column' id='soup' style={{
            width: '170px',
            height: '100px',
            marginRight: '10px',
            backgroundSize: 'cover',
            backgroundImage: `url('https://i.imgur.com/MgJ1TFJ.jpg')`,
            borderRadius: '20px',
            fontSize: '1.5rem',
            color: 'white',
            textShadow: '2px 2px 5px black',
            zoom: '1.5'
          }}
          onClick={handleButton}>Ramen Noodle Soup
          </Button>

          <Button className='column' id='side' style={{
            width: '170px',
            height: '100px',
            marginRight: '10px',
            backgroundSize: 'cover',
            backgroundImage: `url('https://i.imgur.com/uYECFwz.jpg')`,
            borderRadius: '20px',
            fontSize: '1.5rem',
            color: 'white',
            textShadow: '2px 2px 5px black',
            zoom: '1.5'
          }}
          onClick={handleButton}>Sides
          </Button>

          <Button className='column' id='drink' style={{
            width: '170px',
            height: '100px',
            marginRight: '10px',
            backgroundSize: 'cover',
            backgroundImage: `url('https://i.imgur.com/ruxIrPm.jpg')`,
            borderRadius: '20px',
            fontSize: '1.5rem',
            color: 'white',
            textShadow: '2px 2px 5px black',
            zoom: '1.5'
          }}
          onClick={handleButton}>Drinks
          </Button>
        </div>
        <br/>
        <br/>
        { user.name === 'admin' ? <NavLink eventkey='1' as={Link} to='/menu/item/new'><Button style={{backgroundColor: 'orange', color: "white"}}>Add new item</Button></NavLink> : null} <br/>


          <div className='items-list'>
            {filteredItems.map( item => (
              <div key={item.id}>
                <Item item={item} key={item.name} handleClickItem={handleClickItem} handleRemoveItem={handleRemoveItem}
                onDeleteItem={onDeleteItem} onUpdate={onUpdate}/>
              </div>
            ))}
          </div>
      </div>
  )
}

export default Menu