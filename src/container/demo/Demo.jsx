import React,{useState} from 'react'
import image from "../../constant/image";
import ImageCard from '../../components/ImageCard';

import "./Demo.css";
function Demo() {

    const [filterCategory, setFilterCategory] = useState('all');
       
  const handleFilterChange = (filter) => {
    setFilterCategory(filter);
  };
 

  return (
   <>
    <div className='container text-center ' >
        <div className='demo_title' > 
            <strong> World-Class</strong> <br />
            <strong>Stunning</strong><br />
            <strong>Demos</strong> 
        </div>
        <h2 className='mt-1 demo_detail'>  <strong >Best-in-class designs to get you <br /> started.</strong>  Use any demo or template for education website. You can mix  and match all the demos and templates.</h2>
        <p className='demo_detail'>Create a complete education website with a lots of demo page <br /> and 250+ section blocks to create a unique site.</p>
    </div>
    <div className='arrowdown'>
        <img src={image.arrowdown} alt="arrowdown" />
    </div>
    <div >
        <div className='demo_btn_wrapper  '>
            <div className='demo_btn' onClick={() => handleFilterChange('all')}  
              style={{backgroundColor:filterCategory=="all" ? "#2f57ef":'#f5f5f5',
              color:filterCategory=="all" ? "white":'#6b7385'}}
              
            >
                <span>All Demo <sup>15</sup></span>
            </div>

            <div className='demo_btn' onClick={() => handleFilterChange('marketplace')}
                          style={{backgroundColor:filterCategory=="marketplace" ? "#2f57ef":'#f5f5f5',color:filterCategory=="marketplace" ? "white":'#6b7385'}}
                          
               >
                <span >MarketPlace <sup>09</sup></span>   
            </div>

            <div className='demo_btn'  onClick={() => handleFilterChange('university')} style={{backgroundColor:filterCategory=="university" ? "#2f57ef":'#f5f5f5',color:filterCategory=="university" ? "white":'#6b7385'}}>
                <span >University <sup>07</sup> </span>   
            </div>

            <div className='demo_btn ' onClick={() => handleFilterChange('instructor')}style={{backgroundColor:filterCategory=="instructor" ? "#2f57ef":'#f5f5f5',color:filterCategory=="instructor" ? "white":'#6b7385'}}>
                <span >Instructor <sup>06</sup> </span>    
            </div>

            <div className='demo_btn' onClick={() => handleFilterChange('singlecourse')} style={{backgroundColor:filterCategory=="singlecourse" ? "#2f57ef":'#f5f5f5',color:filterCategory=="singlecourse" ? "white":'#6b7385'}}>
                <span >Single Course <sup>02</sup> </span>   
            </div>

            <div className='demo_btn' onClick={() => handleFilterChange('carrertranning')} style={{backgroundColor:filterCategory=="carrertranning" ? "#2f57ef":'#f5f5f5',color:filterCategory=="carrertranning" ? "white":'#6b7385'}}>
                <span > Carrer Tranning <sup> 09</sup></span>    
           </div>
        </div>
    </div>

    
        <div className='container '  >
            <div  className='row mb-5'>
                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 instructor marketplace carrertranning ${filterCategory==='marketplace' || filterCategory==='carrertranning' ||filterCategory==='instructor' || filterCategory==='all' ? 'show' : 'hide'}`} >
                 <ImageCard imageSrc={image.demo1} mobImageSrc={image.demomobile1} titles="Main Demo" showButton={true}/>
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 marketplace carrertranning ${filterCategory==='marketplace'||filterCategory==='carrertranning' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo2} mobImageSrc={image.demomobile2} titles="MarketPlace" showButton={true}/>
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 unversity ${filterCategory==='university' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo3} mobImageSrc={image.demomobile3} titles="Kindergarten" showButton={true}/>
                </div>
            
            
           
                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 university ${filterCategory==='university' || filterCategory==='all' ? 'show' : 'hide'}`} >
                 <ImageCard imageSrc={image.demo4} mobImageSrc={image.demomobile4} titles="University Classic" showButton={true}/>
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 instructor marketplace carrertranning ${filterCategory==='instructor'||filterCategory==='carrertranning'||filterCategory==="marketplace" || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo5} mobImageSrc={image.demomobile5} titles="Home Elegant"/>
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 instructor university carrertranning ${filterCategory==='instructor'||filterCategory==='carrertranning' ||filterCategory==='university' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo6} mobImageSrc={image.demomobile6} titles="GYM Coaching"/>
                </div>
            

           
                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 university marketplace carrertranning ${filterCategory==='university'||filterCategory==='carrertranning' ||filterCategory==='marketplace'|| filterCategory==='all' ? 'show' : 'hide'}`}>
                 <ImageCard imageSrc={image.demo7} mobImageSrc={image.demomobile7} titles="Online School"/>
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 university ${filterCategory==='university' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo8} mobImageSrc={image.demomobile8} titles="University Status"/>
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 instructor marketplace carrertranning ${filterCategory==='instructor'||filterCategory==='carrertranning'||filterCategory==='marketplace' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo9} mobImageSrc={image.demomobile9} titles="Home Technology"/>
                </div>
            
            
            
                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 singlecourse instructor  ${filterCategory==='singlecourse' ||filterCategory==='instructor'  || filterCategory==='all' ? 'show' : 'hide'}`}>
                 <ImageCard imageSrc={image.demo10} mobImageSrc={image.demomobile10} titles="Instructor Portfolio"/>
                
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 university marketplace carrertranning ${filterCategory==='university'||filterCategory==='carrertranning'||filterCategory==='marketplace' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo11} mobImageSrc={image.demomobile11} titles="Language Academy"/>
                
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 singlecourse instructor carrertranning ${filterCategory==='singlecourse'||filterCategory==='carrertranning'|| filterCategory==='instructor' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo12} mobImageSrc={image.demomobile12} titles="Single Course"/>
            
                </div>
           
                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 marketplace ${filterCategory==='marketplace' || filterCategory==='all' ? 'show' : 'hide'}`}>
                 <ImageCard imageSrc={image.demo13} mobImageSrc={image.demomobile13} titles="Online Course"  />
                 
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 marketplace carrertranning ${filterCategory==='marketplace'||filterCategory==='carrertranning' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo14} mobImageSrc={image.demomobile14} titles="Classic LMS"/>
                </div>

                <div className={` col-lg-4 col-md-6 col-sm-12 mb-4 university marketplace ${filterCategory==='university'||filterCategory==='marketplace' || filterCategory==='all' ? 'show' : 'hide'}`}>
                <ImageCard imageSrc={image.demo15} mobImageSrc={image.demomobile15} titles="Course School"/>
                </div>
            
            
            
        </div>

        
    </div>
     
     </>
  )
}

export default Demo