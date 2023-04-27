import React,{useState} from 'react'
import Content_sub_item from '../../components/Content_sub_item';
import FeatherIcon from 'feather-icons-react';
function PageMobile() {
    const [clicked ,setClicked] = useState(false)

  const handleClicked = () => {
     if (clicked != true) {
      setClicked(true);
   } else {
      setClicked(false);
     }
   };

  return (
    <div>
        <div className='mx-4 mobile_content_wrapper'>
            <div  className='d-flex justify-content-between'onClick={handleClicked}>
                <div>
                    Page
                </div> 
                <div>
                    <span >{clicked ?"-":"+"}</span>
                </div>
            </div>
            <hr />
        </div>
           
        <div className={clicked ? "histudy_show":"histudy_hide"} >
        <span >GET STARTED</span><hr />
            <ul>  
                <li>
                    <a href="#">About us</a>
                </li>
                <hr />
                <li>
                    <a href="#">About Us 2</a>
                </li>
                <hr />
                <li>
                    <a href="#">Event Grid</a>
                </li>
                <hr />
                <li>
                    <a href="#">Event List</a>
                </li>
                <hr />
                <li>
                    <a href="#">Event Sidebar</a>
                </li>
                <hr />
                <li>
                    <a href="#">Event Details</a>
                </li>
                <hr />
                <li>
                    <a href="#">Academic Gallery</a>
                </li>
                <hr />
                <li>
                    <a href="#">Admission Guide</a>
                </li>
                <hr />
            </ul>
           
            <span > GET STRATED</span><hr />  
            <ul>
                
                <li>
                    <a href="#">Profile</a>
                    
                </li>
                <hr />
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <hr />
                <li>
                 <a href="#">Become a Teacher</a>
                </li>
                <hr />
                <li>
                <a href="#">Instructor</a>
                </li>
                <hr />
                <li>
                <a href="#">FAQs</a>
                </li>
                <hr />
                <li>
                <a href="#">Privacy Policy</a>
                </li>
                <hr />
                
                <li>
                <a href="#">404 Page</a>
                </li>
                <hr />
                <li>
                <a href="#">Maintenance</a>  
                </li>
                <hr />
            </ul> 
            
            <span >SHOP PAGES </span><hr />
            <ul>
                <li>
                    <a className=" d-flex ">Shop<Content_sub_item sub_item="sale anything"/></a>
                </li>
                <hr />
                <li>
                    <a href="#">Single Product</a>
                </li>
                <hr />
                <li>
                    <a href="#">Cart Page</a>
                </li>
                <hr />
                <li>
                    <a href="#">Checkout</a>
                </li>
                <hr />
                <li>
                    <a href="#">Wishlist Page</a>
                </li>
                <hr />
                <li>
                    <a href="#">My Account</a>
                </li>
                <hr />
                <li>
                    <a href="#">Login & Register</a>
                </li>
                <hr />
                <li> 
                    <a href="#">Subscription</a>
                </li>
                <hr />
            </ul> 
              
             <div >
                <div className="page_img1 my-3 p-3 rounded-4 fs-6" style={{width:"250px"}}>
                    <div>University<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img2 my-3 p-3 rounded-4 fs-6" style={{width:"250px"}}>
                    <div>Language Club<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img3 my-3 p-3 rounded-4 fs-6"style={{width:"250px"}} >
                    <div>University Status<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img4 my-3 p-3 rounded-4 fs-6"style={{width:"250px"}} >
                    <div>Course School<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>

                <div className="page_img5 my-3 p-3 rounded-4 fs-6" style={{width:"250px"}}>
                    <div>Academy<FeatherIcon icon="chevron-right" size={18}/></div>
                </div>
            </div>
        </div>
    </div>
)}

export default PageMobile