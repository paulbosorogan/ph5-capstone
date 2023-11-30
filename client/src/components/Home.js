import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import {SocialIcon} from 'react-social-icons'

 function Home() {
  return (
    <div className='homepage'>
            <h3 className='home-page'>NEW YORK'S BEST POKE BOWL</h3>
            <br/>
            <br/>
          <button className='home-bttn'>
            <b><NavLink style={{color: 'white',
              textShadow: '2px 2px 5px black'}} to='/menu'>
                ORDER HERE
              </NavLink></b></button>
          <br/>
          <br/>
            <div className='row social-icon'>
              <SocialIcon bgColor='green' fgColor='white' href='no' url='http://instagram.com/fortunepokebowl' />
              <SocialIcon bgColor='green' fgColor='white' href='no' url='http://facebook.com/fortunepokebowl'/>
              <SocialIcon bgColor='green' fgColor='white'  href='no' url='http://x.com/fortunepokebowl'/>
            </div>
    </div>
  
  )
}

export default Home