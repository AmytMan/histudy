import React from 'react'
import "./Topbanner.css";
import  FeatherIcon  from 'feather-icons-react';
import image from '../../constant/image'
function Topbanner() {
  return (
    <div className='top_banner_wrapper'>
       <div className='d-flex justify-content-center align-items-center p-2'>
            <div className='topbanner_text mx-3'>
                Limited Time Offer
            </div>

            <div >
                <img src={image.hand_emojji} alt="" style={{width:"20px"}} />
            </div>

            <div className='mx-1'>
                <span className='top_banner_intro'> Intro price. Get Histudy for Big Sale -95% off.</span>
            </div>

            <div className='mx-3 top_banner_purchase'>
                <a className ="fw-bolder mx-1" href='#'>Purchase Now</a>
                <span>{<FeatherIcon icon="arrow-right" size={16}/>}</span>
            </div>

            <div className=' topbanner_closing_tab_wrapper'>
                
                   <div className='closing_tab'>
                   <FeatherIcon icon="x" size={18}/>
                   </div> 
                 
            </div>

        </div>
    </div>
)}

export default Topbanner