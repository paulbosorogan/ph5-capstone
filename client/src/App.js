import React, {useContext, useState} from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import Menu from './components/Menu';
import Login from './components/Login';
import { UserContext } from './contexts/UserContext';
import { ItemsContext } from './contexts/ItemsContext';
import UserProfile from './components/UserProfile'
import Cart from './components/Cart';
import {Store} from 'react-notifications-component'
import ItemForm from './components/ItemForm';




function App() {
  const {user} = useContext(UserContext)
  const {items} = useContext(ItemsContext)
  const [cartItems, setCartItems] = useState([])

  function handleClickItem(item){
    setCartItems([...cartItems, item]) 
    
    Store.addNotification({
      message: `${item.name} was added to the cart!`,
      type: "success",
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

  function handleRemoveItem(id){
    const updatedCart = cartItems.filter( cartItem => cartItem.id !== id)
    setCartItems(updatedCart)
    
    Store.addNotification({
      message: `Item was removed to the cart!`,
      type: "danger",
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

  if(!user) return <Login/>
  return (
    <div className="App">
      <div>
        <Navigation cartItems={cartItems}/>
      </div>
      <main className="App-header">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/menu' element={<Menu handleClickItem={handleClickItem} handleRemoveItem={handleRemoveItem}/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/user-profile' element={<UserProfile/>}/>
          <Route exact path='/cart' element={<Cart items={items} setCartItems={setCartItems} cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>}/>
          <Route exact path='/menu/item/new' element={<ItemForm/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
