import React from 'react'

import image from "../constant/image"
import "./Nav.css"
function Navs() {
  return ( 
  <div className='bg-dark navbar_container '>
    <div className='mx-3'>
      <img src={image.envato_market} alt="" />
    </div>
    <div className='mx-3 text-white p-2'>
      <div className='p-2 rounded-3 button_color'>Buy now</div>
    </div>
  </div> 
   
)}

export default Navs