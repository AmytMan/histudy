import React from 'react'
import image from '../../constant/image';
import FeatherIcon from 'feather-icons-react';


import "./Home.css"
function Home_content() {
  return (
    <div style={{background:"black"}}>
        <div class="container ">
          <div class="row mt-1 ">
            <div class="col  home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo1} alt="" />
              </div>
               <a href='#' className='home_items_name '>Home Demo{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo2} alt="" />
              </div>
              <a href='#' className='home_items_name '>Marketplace{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo3} alt="" />
              </div>
              <a href='#' className='home_items_name '>Kindergarten{<FeatherIcon icon="arrow-right" size={12}/>}</a>    
            </div>
            <div class="col home_items_card">
              <div className='card '>
                <img className='img-fluid' src={image.demo4} alt="" />
              </div> 
              <a href='#' className='home_items_name '>University Classic{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo5} alt="" />
              </div>
              <a href='#' className='home_items_name '>Home Elegant{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo6} alt="" />
              </div>
              <a href='#' className='home_items_name '>Gym Coaching{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
          </div>
  
          <div class="row mt-3 ">
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo7} alt="" />
              </div>
              <a href='#' className='home_items_name '>Online School{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo8} alt="" />
              </div>
              <a href='#' className='home_items_name '>University Status{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo9} alt="" />
              </div>
              <a href='#' className='home_items_name '>Home Technology{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo10} alt="" />
              </div>
              <a href='#' className='home_items_name '>Instructor Portfolio{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo11} alt="" />
              </div>
              <a href='#' className='home_items_name '>Language Academy{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo12} alt="" />
              </div>
              <a href='#' className='home_items_name '>Single Course{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
          </div>
  
          <div class="row my-3 ">
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo13} alt="" />
              </div>
              <a href='#' className='home_items_name '>Online Course{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo14} alt="" />
              </div>
              <a href='#' className='home_items_name '>Classic LMS{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo15} alt="" />
              </div>
              <a href='#' className='home_items_name '>Course School{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo16} alt="" />
              </div>
              <a href='#' className='home_items_name '>Coming Soon{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo17} alt="" />
              </div>
              <a href='#' className='home_items_name '>Coming Soon{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
            <div class="col home_items_card">
              <div className='card'>
                <img className='img-fluid' src={image.demo18} alt="" />
              </div>
              <a href='#' className='home_items_name '>Coming Soon{<FeatherIcon icon="arrow-right" size={12}/>}</a>  
  
            </div>
          </div>
  
  
        </div>
    </div>
  )
}

export default Home_content