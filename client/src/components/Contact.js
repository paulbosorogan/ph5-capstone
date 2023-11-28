import React from 'react'
import '../index.css'
import Map from './Map'

function Contact(){

  return (
  <div className='contact-page'>
    <div className='contact'>
        <React.Fragment>
          <h2><b>PHONE</b> | (646) 429-9806</h2>
          <h2><b>HOURS</b> | 11:00 AM - 9:30 PM</h2>
          <h2><b>LOCATION | 746 9th Ave, New York, NY 10019</b></h2>
        </React.Fragment>
      
        <Map/>
      </div>
  </div>
  )
}

export default Contact