import React, {useContext} from 'react'
import '../index.css'
import { NavLink, Link} from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'
import { UserContext } from '../contexts/UserContext'
import {ShoppingCart} from 'phosphor-react'



function Navigation({cartItems}) {
  const {user, setUser} = useContext(UserContext)


  function handleLogout(){
    fetch('/logout', {
      method: "DELETE"
    }).then((r)=>{
      if (r.ok) {
        setUser(null)
      }
    })
   
  }

  return (
    <Navbar bg="white" expand="lg" variant="light">

      <NavLink className='nav-bttn' eventkey='1' as={Link} to='/'><b>Fortune Poke Bowl</b></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className='nav-bttn' eventkey='2' as={Link} to='/about'>About Us</NavLink>
            <NavLink className='nav-bttn' eventkey='3' as={Link} to='/menu'>Menu</NavLink>
            <NavLink className='nav-bttn' eventkey='4' as={Link} to='/contact'>Contact</NavLink>            
         
          </Nav>
          {user ? 
          <Navbar.Text>
            Hi, <NavLink className='nav-bttn' eventkey='5' as={Link} to='/user-profile'>{user.name}</NavLink><b></b>
            <NavLink className='nav-bttn' eventkey='6' as={Link} to='/cart'><ShoppingCart size={23}/> {cartItems.length > 0 ? (<span className='cart' style={{color: "white"}}>{cartItems.length}</span>) : null} </NavLink>
            <NavLink eventkey='6' as={Link} to="/" onClick={handleLogout} className='nav-bttn'>Log Out</NavLink>
          </Navbar.Text> 
          : 
            null
          }
          
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation