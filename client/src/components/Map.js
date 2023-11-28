import React from 'react'

function Map() {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.929278847207!2d-73.99107508872137!3d40.763580171266554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258572954814f%3A0x10f7281e26ecfa80!2s746%209th%20Ave%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1699107033389!5m2!1sen!2sus"
      width="560" height="460"
      style={{border:0}}
      id='location-map'
      title='location-map-emb'
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  
    </div>
  )
}

export default Map