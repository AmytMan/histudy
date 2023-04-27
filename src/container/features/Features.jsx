import React from 'react'
import Heading from '../../components/Heading'
import image from '../../constant/image';
import "./Features.css"
function Features() {
  return (
    <div>
      <Heading subtitle="Core Features" title="Histudy Exclusive Features"/> 
      <div className='text-nowrap feature_container '>
        <div className='feature_wrapper'>
          <div>
            <img src={image.bootstrap} alt="bootstrap" />
            <h6>Bootstrap5</h6>
            <p>Css Framework</p>
          </div>
        
          <div className="my-5">
            <img src={image.slider} alt="slider" />
            <h6>Swiper Slider</h6>
            <p>Slider Plugin</p>
          </div>

          <div className="">
            <img src={image.font} alt="font" />
            <h6>Goggle Font</h6>
            <p>Exclusive Fonts</p>
          </div>

          <div className="my-5">
            <img src={image.contact} alt="contact" />
            <h6>Contact Font</h6>
            <p>Dnyamic Fonts</p>
          </div>

          <div className="">
            <img src={image.instagram} alt="instagram" />
            <h6>Instagram</h6>
            <p>Photo And Video</p>
          </div>

          <div className="my-5">
            <img src={image.popup} alt="popup" />
            <h6>Magnify Popup</h6>
            <p>LightBox & Dialog</p>
          </div>
        </div>
         
      <div className="feature_wrapper">
        <div>
          <img src={image.mainchimp} alt="manichimp" />
          <h6>Mainchimp</h6>
          <p>Mail Pltaform</p>
        </div>

        <div className="my-5">
          <img src={image.seo} alt="seo" />
          <h6>SEO Friendly</h6>
          <p>Search Engine</p>
        </div>
         
        <div className="">
          <img src={image.validation} alt="validation" />
          <h6>W3C Validation</h6>
          <p>Markup Validity</p>
        </div>

        <div className="my-5 ">
          <img src={image.support} alt="support" />
          <h6>Pro Support</h6>
          <p>Pro Support</p>
        </div>

        <div className="">
          <img src={image.isotop} alt="isotop" />
          <h6>Isotop</h6>
          <p>Imageloaded</p>
        </div>

        <div className="my-5">
          <img src={image.animation} alt="animation" />
          <h6>Animation</h6>
          <p>Traditional Animation</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Features