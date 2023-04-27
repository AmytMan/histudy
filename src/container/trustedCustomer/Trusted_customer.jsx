import React from 'react'
import "./Trusted_customer.css";
import image from "../../constant/image";
import FeatherIcon  from 'feather-icons-react'
function Trusted_customer() {
  return (
    <div className='text-center text-capitalize customer_wrapper '>       
        <div className='trusted_customer_text_section '>
            <div className='d-flex flex-column justify-content-center align-items-center my-5 '>
                <h1>Globally trusted by hundreds of thousands of customers.</h1>
                <h4 className='my-3'>Work Smarter ☕ Create Better ⭐ Build Faster ⚡</h4>
                <div className='arrow_effect_3 bg-color-3 fw-bolder'>
                    <span className='front_arrow mx-2'><FeatherIcon icon="arrow-right" size={18}/></span>
                        Buy Histudy Now
                    <span className='back_arrow mx-2'><FeatherIcon icon="arrow-right"size={18}/></span>
                </div>
                <h6 className='my-5'>How will Histudy Benefit Me?</h6>           
            </div>
        </div>
        <div className='benefit_icons'>
            <div>
                <img src={image.benefit_01} alt="benefit_01" />
                <p>Free Life Time Update</p>
            </div>
            <div>
                <img src={image.benefit_02} alt="benefit_02" />
                <p>premium support 6month free</p>
            </div>
            <div>
                <img src={image.benefit_03} alt="benefit_03" /> 
                <p>High speed performance</p>
            </div>
            <div>
                <img src={image.benefit_04} alt="benefit_04" />
                <p>we provide permium pulgins (enjoy)</p>
            </div>
            <div>
                <img src={image.benefit_05} alt="benefit_05" />
                <p>developer friendly code and design</p>
            </div>
        </div>
    </div>
)}
export default Trusted_customer