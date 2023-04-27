import React from 'react'
import FeatherIcon  from 'feather-icons-react';
import "./Nextlevel.css";
import image from '../constant/image'
function Nextlevel() {
  return (
<div className="container  p-0 bg-color text-white my-5 rounded-4 ">
    <div className="row ">
        <div className="col-lg-5  col-md-6 col-sm-12">
            <div className='p-2 purchase-animation '>
                <img src={image.envatos} style={{width:"30px", borderRadius:"50%"}} alt="" /> Purchas Now <FeatherIcon icon="chevron-right" size={18}/>Mandy F. Wood</div>
            <h2 className='my-3 mx-3 p-2 fs-1 fw-bolder'>Take your website to the next level!</h2>
            <span className=' rounded-4 text-white fs-2 text-center mx-3 p-3 purchasenow'>
                <span className='front-arrow'>{<FeatherIcon icon="arrow-right" size={22} />}</span>
                Purchase Now
                <span className='back-arrow'>{<FeatherIcon icon="arrow-right" size={22}/>}</span> 
            </span>
            <p className='mt-5 mx-3  '>One-time purchase. No additional fees or subscriptions.</p>
            
            <img src={image.line_shape} alt=""  />
        </div>

        <div className='col-lg-7 col-md-6 next_img'>
           
            <img className='rounded-4 h-100' src={image.line_img} alt=""   />
           
            
        </div>
    </div>
</div>

  )
}

export default Nextlevel