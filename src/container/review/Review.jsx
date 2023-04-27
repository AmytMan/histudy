import FeatherIcon from 'feather-icons-react';
import React from 'react'
import Heading from "../../components/Heading";
import image from "../../constant/image"
import "./Review.css"
function Review() {
  return (
    <>
      <div className='review-title'>
        <div className='review-heading'>
          <Heading subtitle="A FEW WORDS FROM OUR CLIENTS" title="What people are saying about"/>
          <div className="text-animi"></div>
        </div>
      </div>  

      <div className="read_more_review_wrapper">
      <div className='scroll_animation_wrapper  my-5'>
        <div className=" customer-review bg_gradient  move_left_right">
          <img src={image.rating} alt=""  />
          <p>The theme itself suits my needs, but the support is the superstar that earns this theme and the team behind <strong>it a 5 stars rating.</strong>  Kudos!</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>Arikurnia1</span>
        </div>

        <div className="customer-review move_left_right ">
          <img  src={image.rating} alt=""  />
          <p> I needed support on a issue to install the theme demo, the CS team is super efficient, they <strong>fixed the issue in few hours.</strong> Thank you!</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>stephanieprugne</span>
        </div>

        <div className=" customer-review bg_gradient move_left_right">
          <img src={image.rating} alt="" />
          <p> <strong>Awesome Customer support.</strong>  Fixed issues in less than 24 Hours. Very professional and prompt.</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>taggrwal</span>
        </div>

        <div className=" customer-review bg-white move_left_right">
          <img src={image.rating} alt="" />
          <p>These guys are the REAL deal. Fantastic website and even <strong>better customer support.</strong>  Highly recommend and will work with them again.</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} />
          <span> phil148</span>
        </div>

        <div className=" customer-review bg_gradient move_left_right">
          <img src={image.rating} alt=""  />
          <p> <strong> Beautiful theme! </strong>(Of course, that’s why I got it). But most importantly, thank you for the quick responses from your customer support. I was finding it hard to install and customise the demo but he guided</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}}/> <span>teechelle</span>
        </div>

        <div className="customer-review move_left_right">
          <img src={image.rating} alt="" />
          <p> <strong>The design Quality is perfect!</strong>  Customer Support is the best so far. Thank you!</p>
          <img src={image.envatos} alt=""style={{width:"40px",borderRadius:"50%"}} /> <span>3anbo3d</span>
        </div>
      </div> 

      {/* review scroll-section-2 begins */}
     
      <div className='scroll_animation_wrapper my-5 '>
        <div className="customer-review bg_gradient move_right_left">
          <img src={image.rating} alt=""  />
          <p><strong>Responsive and Competent</strong>They perfectly answer the questions of use and the various problems that one can have. A big Thank-You!</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>couletcorentin</span>
        </div>

        <div className="customer-review move_right_left ">
          <img src={image.rating} alt=""  />
          <p>They assist me very well and did everything I asked !
          Quick answer to <strong>So yes I recommand</strong> </p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>saverysyoann</span>
        </div>

        <div className="customer-review bg_gradient move_right_left">
          <img src={image.rating} alt="" />
          <p>I have zero experience with web design and found this template super easy to use. Very helpful support team too.</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>thomasmcbrien00</span>
        </div>

        <div className="customer-review bg-white move_right_left">
          <img src={image.rating} alt="" />
          <p>they was so kindly and replay so fast and they fixed all what i want, thank you so much !</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} />
          <span> ordersgate</span>
        </div>

        <div className="customer-review bg_gradient move_right_left">
          <img src={image.rating} alt=""  />
          <p>They are really amazing, the customization is really dope, and Support is really awesome</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}}/> <span>rohithaditya</span>
        </div>

        <div className="customer-review move_right_left">
          <img src={image.rating} alt="" />
          <p>One of the best support and clean code on codecanyon! <strong>Highly recommended!</strong></p>
          <img src={image.envatos} alt=""style={{width:"40px",borderRadius:"50%"}} /> <span>neosofts</span>
        </div>

        <div className="customer-review move_right_left">
          <img src={image.rating} alt="" />
          <p>I have never seen support as fast and efficient as this one.
          I can't say anything about the theme yet since I just started building the site, but with this kind of support,<strong>I am confident it will be awesome</strong> </p>
          <img src={image.envatos} alt=""style={{width:"40px",borderRadius:"50%"}} /> <span>desdizajn</span>
        </div>

      </div>

       {/* review-section-3 begins */}
       <div className='scroll_animation_wrapper my-5'>
        <div className="customer-review bg_gradient  move_left_right">
          <img  src={image.rating} alt=""  />
          <p>Very Beautiful theme and great support team and fast response from author team.</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>teechelle</span>
        </div>

        <div className="customer-review move_left_right ">
          <img  src={image.rating} alt=""  />
          <p>The design Quality is perfect! Customer Support is the best so
          far.Thank you!</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>3anbo3d</span>
        </div>

        <div className="customer-review bg_gradient move_left_right">
          <img  src={image.rating} alt="" />
          <p>The theme is awesome,and the support it's just fantastic, solved my problems in few hours.5 stars are not enough</p>
          <img src={image.envatos} alt="" style={{width:"40px",borderRadius:"50%"}} /> <span>alesmp82</span>
        </div>

        <div className="customer-review move_left_right">
          <img  src={image.rating} alt="" />
          <p>One of the best support and clean code on codecanyon! <strong>Highly recommended!</strong></p>
          <img src={image.envatos} alt=""style={{width:"40px",borderRadius:"50%"}} /> <span>neosofts</span>
        </div>

        <div className="customer-review bg_gradient move_left_right">
          <img src={image.rating} alt="" />
          <p>I have never seen support as fast and efficient as this one.
          I can't say anything about the theme yet since I just started building the site, but with this kind of support,<strong>I am confident it will be awesome</strong> </p>
          <img src={image.envatos} alt=""style={{width:"40px",borderRadius:"50%"}} /> <span>desdizajn</span>
        </div>

        <div className="customer-review move_left_right">
          <img  src={image.rating} alt="" />
          <p>Very Beautiful theme and great support team and fast response from author team.</p>
          <img src={image.envatos} alt=""style={{width:"40px",borderRadius:"50%"}} /> <span>pranavkumbhare</span>
        </div>
      </div>
      <div className='read_more_review'>
        <h4 className='text-center text-white mt-2 fs-3 fw-bolder'> Our Fantastic <br /> Envato Customers Reviews </h4>
        <div className=' rounded-4  text-white fs-2 text-center mx-3 p-4 purchasenow'>
          <span className='front-arrow'>{<FeatherIcon icon="arrow-right" size={22} />}</span>
          ⭐ Read More Review
          <span className='back-arrow'>{<FeatherIcon icon="arrow-right" size={22}/>}</span> 
        </div>
        <h6 className='my-5 text-white'>4.85 AVERAGE <br />
        BASED ON 300+ RATINGS.</h6>
        <img className='my-5' src={image.line_shape2} alt="" />
      </div>
    </div>
    </>
  )
}

export default Review