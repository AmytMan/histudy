import React from 'react'
import image from "../../constant/image"


import "./Menu.css";

function Menu() {
  return (
    <>
    
    <div className="menu_container">
      <div className="menu_box">
        <img src={image.icona} style={{ width: "80px" }} alt="icona" />
        <h5>Fast Performance</h5>
        <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
      </div>
      <div className="menu_box">
        <img src={image.iconb} style={{ width: "80px" }} alt="iconab" />
        <h5>Perfect Responsive</h5>
        <p>Our template is full perfect for all device. You can visit our template all device easily.</p>
      </div>
      <div className="menu_box ">
        <img src={image.iconc} style={{ width: "80px" }} alt="iconac" />
        <h5>Fast & Friendly Support</h5>
        <p >We are provide 24 hours support for all clients.You can purchase without hesitation.</p>
      </div>
      <div className="menu_box">
        <img src={image.icond} style={{ width: "80px" }} alt="icond" />
        <h5>Easy to Use</h5>
        <p>Create your own custom template or section by copying, pasting, and assembling.</p>
      </div>
    </div>
 
    </>
  )
}

export default Menu