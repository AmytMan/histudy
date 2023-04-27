import React from 'react'
import "./Elements.css";
import FeatherIcon from 'feather-icons-react';
function Elements_content() {
  return (
    <>
    <div className='elements_wrapper'>
        <div className='elements_item'>
            <div>Style Tab</div>
            <div>Accordian</div>
            <div>Advance Tab</div>
            <div>Brand</div>
            <div>Button</div>
            <div>Badge</div>
            <div>Card</div>
            <div>Call To Action</div>
        </div>
        <div className='elements_item'>
            <div>Counter</div>
            <div>Categories</div>
            <div>Header Style</div>
            <div>Newsletter</div>
            <div>Team</div>
            <div>Social</div>
            <div>Life Style</div>
            <div>Gallery</div>
        </div>
        <div className='elements_item'>
            <div>Pricing</div>
            <div>Progressbar</div>
            <div>Testimonial</div>
            <div>Service</div>
            <div>Split Area</div>
            <div>Search Style</div>
            <div>Instagram Style</div>
            <div>& more coming</div>
        </div>
    </div>
    <div className='elements_content_footer'>
    <span>Visit HiStudy Template <FeatherIcon icon="arrow-right" size={18}/></span>
</div>
</>
  )
}

export default Elements_content