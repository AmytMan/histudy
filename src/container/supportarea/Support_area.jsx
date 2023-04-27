import React from 'react'
import image from '../../constant/image';
import "../../components/Nextlevel.css";
import "./Support_area.css"
import FeatherIcon from "feather-icons-react"
function Support_area() {
  return (
    <div className='container support_area'>
        <div className="supportArea_items_wrapper">
            <div className="w-100 dot-border mx-2 p-2">
                <img className='m-3' src={image.documentation} style={{width:"100px"}} alt="" />
                <h5>Online Documentation</h5>
                <p>Well organized and up to date</p>
                <div className='arrow_effect_1 bg-color-1 mx-5'>
                     <span className='front_arrow mx-2'><FeatherIcon icon="arrow-right" size={18}/></span>
                        View Documentation
                    <span className='back_arrow mx-2'><FeatherIcon icon="arrow-right" size={18}/></span>
                </div>
                <div className='d-flex flex-column my-5 histudy'>
                <a href='#'>Changelog  <FeatherIcon icon="arrow-right" size={18}/> </a> 
                <a href='#'>Video Tutorial <FeatherIcon icon="arrow-right"  size={18}/> </a> 
                <a href='#'>Download <FeatherIcon icon="arrow-right"  size={18}/></a>
                </div>
            </div>

            <div className="w-100 dot-border mx-2 p-2">
                <img className='m-3' src={image.support2} style={{width:"100px"}} alt="" />
                <h5>Dedicated Support</h5>
                <p>Need support ? Submit a ticket. We will be happy to assist you.</p>
                <div className='arrow_effect_2 bg-color-2 mx-5'>
                     <span className='front_arrow mx-2'><FeatherIcon icon="arrow-right" size={18}/></span>
                        Get Support
                    <span className='back_arrow mx-2'><FeatherIcon icon="arrow-right"size={18}/></span>
                </div>
                <div className=' my-5'>  Support Time: Monday – Friday <br />
                    Response Time: Maximum 24 hours</div>
            </div>

            <div className="w-100  rounded-3 mx-2 p-2 bg_gradient">
                <img className=' m-3' src={image.hire} style={{width:"100px"}} alt="" />
                <h5 className=''>Hire Developer & Designer</h5>
                <p>Just give us the details about the project our developer & designer will get it done faster, Better, and could possibly imagine.</p>
                <div className='arrow_effect_3 bg-color-3 mt-4 mx-5'>
                     <span className='front_arrow mx-2'><FeatherIcon icon="arrow-right" size={18}/></span>
                        Hire Experts
                    <span className='back_arrow mx-2'><FeatherIcon icon="arrow-right"size={18}/></span>
                </div>
                <div className='mt-4 mx-3'>
                    <FeatherIcon  icon="check-circle" size={18}/> <span>Response Time: 2 Hours</span>
                </div>
                <div className='mt-2 mx-3'>
                <FeatherIcon  icon="check-circle" size={18}/> <span>14-day money back guarantee</span>

                </div>
            </div>
          
        </div>
        
    </div>
  )
}

export default Support_area