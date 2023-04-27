import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image from '../../constant/image';
import "./SubMenu.css"
import Heading from '../../components/Heading';
function SubMenu() {
  return (
    <div className='submenu_wrapper'>
      <Heading subtitle="All in one templates" title="Why Choose Histudy." />
      <div>
        <div className='container' >
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
              <div className=' card h-100 bg_gradient1 '>
                <div className='card-body'>

                  <h6 className='card-subtitle text-center text-white'>FOR ONLINE COURSES</h6>
                  <h3 className='card-title fw-bolder text-center text-white'>Create Your Online Courses Website.</h3>

                  <img src={image.image1} alt="image1" />
                  <div className='course_heading'>
                    <div >Individual instructor</div>
                    <div  >Multiple Instructors</div>
                    <div >Marketplace</div>
                    <div >Single Course</div>
                    <div >Like Udemy</div>
                    <div>& More...</div>
                  </div>

                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
              <div className='card h-100 bg_gradient2 pic'>
                <div className='card-body'>
                  <h6 className='card-subtitle text-center text-white' >
                    FOR UNIVERSITY OR SCHOOL EDUCATION
                  </h6>
                  <h3 className='card-title text-center text-white fw-bolder'>Create Your Education Website.</h3>
                  <img  src={image.image2} alt="image2" />
                  < div className='course_heading mt-5'>
                    <div>Higher education</div>
                    <div>Universitys</div>
                    <div>Kindergarden</div>
                    <div>Pre School</div>
                    <div>High School</div>
                    <div>& More...</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
              <div  className='card h-100 bg_gradient3'>
                <div className='card-body'>
                  <h6 className='card-subtitle text-center text-white'>
                    FOR PROFESSIONAL COACHING
                  </h6>
                  <h3 className='fw-bolder text-white -text-center'>Create Your Coaching and Training Website.</h3>
                  <img  src={image.image3} alt="image3"/>
                  <div className='course_heading'>
                    <div>Language Academy</div>
                    <div>Gym Coaching</div>
                    <div>Career Training</div>
                    <div>Life Coaching</div>
                    <div>& More...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubMenu;
