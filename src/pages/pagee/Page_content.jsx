
import React from 'react'
import "./Page.css";
import FeatherIcon from 'feather-icons-react';
import Content_sub_item from '../../components/Content_sub_item';
function Page_content() {
  return (
    <div className=''>
        <div className=" page_wrapper">
            <div className="wrapper_col"> 
            
                <div className="wrapper_col_content"><span>GET STARTED</span></div><hr />
                <div className="wrapper_col_content">About us</div>
                <div className="wrapper_col_content">About Us 2</div>
                <div className="wrapper_col_content">Event Grid</div>
                <div className="wrapper_col_content">Event List</div>
                <div className="wrapper_col_content">Event Sidebar</div>
                <div className="wrapper_col_content">Event Details</div>
                <div className="wrapper_col_content">Academic Gallery</div>
                <div className="wrapper_col_content">Admission Guide</div>
           
            </div>
            <div className="wrapper_col"> 
                <div className="wrapper_col_content"> <span>GET STRATED</span></div><hr />
                <div className="wrapper_col_content">Profile</div>
                <div className="wrapper_col_content">Contact Us</div>
                <div className="wrapper_col_content">Become a Teacher</div>
                <div className="wrapper_col_content">Instructor</div>
                <div className="wrapper_col_content">FAQs</div>
                <div className="wrapper_col_content">Privacy Policy</div>
                <div className="wrapper_col_content">404 Page</div>
                <div className="wrapper_col_content">Maintenance</div>
                
            </div>
            <div className="wrapper_col">
                <div className="wrapper_col_content"><span>SHOP PAGES</span> </div><hr />
                <div className=" d-flex wrapper_col_content">Shop<Content_sub_item sub_item="sale anything"/></div>
                <div className="wrapper_col_content">Single Product</div>
                <div className="wrapper_col_content">Cart Page</div>
                <div className="wrapper_col_content">Checkout</div>
                <div className="wrapper_col_content">Wishlist Page</div>
                <div className="wrapper_col_content">My Account</div>
                <div className="wrapper_col_content">Login & Register</div>
                <div className="wrapper_col_content">Subscription</div>
            </div>
            <div className="page_image">
                <div className="page_img1" >
                <div>University<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img2" >
                <div>Language Club<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img3" >
                    <div>University Status<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img4" >
                <div>Course School<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img5" >
                    <div>Academy<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Page_content