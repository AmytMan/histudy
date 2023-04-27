import React from 'react'
import image from "../../constant/image";
import "./Header.css";

function Header() {

  return (
    <>
      <div className='container-fluid header_wrapper '>
        <div className='row'>
          <div className='col-lg-6 header_text_section'>
            <div className='row'>
              <div className='col-lg-3 mx-5'>
                <img src={image.rating} alt="elite" />
                <span className='header_text'>12500+ TRUST CUSTOMER</span>
              </div>
              <div className='col-lg-3 mx-5'>
                <img src={image.elite} alt="elite" style={{ width: "18px" }} />
                <span className='header_text '>ENVATO ELITE AUTHOR</span>
              </div>
            </div>

            <div className='row my-5'>
              <div className='header_title '> Have your dream <br /> site in minutes <br /> for
                <div className=' header_animi2 '>
                  <span className='header_animi text-nowrap  '></span>
                </div>
              </div>
              <p className='mt-5'>The most <strong className='text-decoration-underline'>powerful</strong>  yet the <strong className='text-decoration-underline'>easiest</strong>  template ever.</p>
            </div>
          </div>
          <div className='col-lg-6 banner_image'>
            <img src={image.banner} alt="banner" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header