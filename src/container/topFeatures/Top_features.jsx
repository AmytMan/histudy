import React from 'react'
import Heading from "../../components/Heading";
import image from "../../constant/image";
import "./Top_features.css";
function Top_features() {
  return (
    <div>
        <div className='mt-5'>
            <Heading title="you need to succeed." subtitle="Top-Notch Features" extra_detail="Everything" detailPara="Histudy comes with interactive design tools and features that could 
            leave you feeling like a pro after just a few clicks."/>
        </div>
        <div className="container topfeature_wrapper p-0">
            <div className=" row ">                
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 h-100  ">
                    <div className="card  card_background" >
                        <div className="card-body">
                            <p className="card-text text-center"> <strong>Complete Education Package.</strong> 
                            A complete education package for build any type of education website.</p>
                        </div>
                        <img  src={image.feature_03} alt="feature"/>
                     </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card h-100" >
                        <img className="card-img-top" src={image.feature_08} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text topfeature_text-color"> <strong>Amazing Courses</strong> Have a lots of course layout options for creating a online education website.</p>
                        </div>
                     </div>
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card p-0  h-100" >
                        <img className="card-img-top" src={image.feature_04} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text topfeature_text-color"> <strong>Sass Available.</strong> The tamplate has Sass available for css. You can Change css by sass.</p>
                        </div>
                     </div>
                </div>
           

           
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card h-100  bg-dark ">
                        <img className="card-img-top " src={image.feature_01} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text text-white"> <strong>Perfect Responsive</strong> . Our Template is full Perfect for all device. You can visit our template all device easily.</p>
                        </div>
                     </div>
                </div>

                <div className="col-lg-8 col-md-6 col-sm-12 mb-3  ">
                    <div className="card h-100 " >
                        <div className="top_feature_items">
                        <div className="card-body">
                            <h2 className='feature-title m-3'>Fast Loading Speed.</h2>
                            <p className="card-text topfeature_text-color ">Histudy is faster loading speed. Histudy create your template so much faster.
                            </p>
                        </div>
                        <div>
                            <img  src={image.feature_06} alt="Card image cap"/>
                            
                        </div>
                        </div>
                        
                     </div>
                </div>
           

         
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card h-100" >
                        <img className="card-img-top" src={image.feature_05} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text topfeature_text-color"> <strong>Bootstrap5 Comfortable.</strong>  Bootstrap5 comfortable is available in Histudy. So layout changes is so much easily.</p>
                        </div>
                     </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card h-100 card_background2" >
                        <div className="card-body">
                            <p className="card-text"><strong>Freedom to Create The LMS Platform You Want </strong> By following Histudy layout you can create a LMS Platform as you like.</p>
                        </div>
                        <img className="card-img-top" src={image.feature_09} alt="Card image cap"/>
                     </div>
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card h-100 bg-dark text-white" >
                        <img className="card-img-top" src={image.feature_07} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text topfeature_text-color"> <strong>Well Documentation.</strong>Have a Well organized documentation and up to date is histudy.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>      
       
    </div>
  )
}

export default Top_features
