import React, { useState } from 'react';
import { Home, Home_mobile, Courses, CoursesMobile, Pages, PageMobile, Blog, BlogMobile, Elements, ElementMobile, Dashboard, DashboardMobile } from "../../pages/index";
import "./Navigation.css";
import image from "../../constant/image";
import FeatherIcon from 'feather-icons-react';

function Navigation() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {/* large screen content  */}
      <div className='large_screen_container'>
        <div className='nav_logo'>
          <img src={image.histudy} alt="logo" />
        </div>

        <div className='navbar_items'>
          <ul>
            <li>{<Home />}</li>
            <li>{<Courses />}</li>
            <li>{<Dashboard />}</li>
            <li>{<Pages />}</li>
            <li>{<Elements />}</li>
            <li>{<Blog />}</li>
          </ul>
        </div>
        <div className="box_wrapper">
          <div className='navbar_box'>
            <div className="navbar_box_text"> <a href='#'> Purchase Now</a> </div>
          </div>
        </div>
      </div>

      {/* small screen section */}
      <div className='small_screen_navbar'>
        <div className='small_screen_navbar_icon'>
          <img src={image.histudy} alt="logo" style={{ width: "100px" }} />
        </div>
        <FeatherIcon icon="menu" size={26} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='small_screen_items'>
            <div className='small_screen_closing_tab'>
              <img src={image.histudy} alt="logo" style={{ width: "100px" }} />
              <FeatherIcon icon="x" size={26} onClick={() => setToggleMenu(false)} />
            </div>
            <p>Histudy is a education website template. You can customize all.</p>
            <ul>
              <li>
                <a href="#">
                  <FeatherIcon icon='mail' size={16} />{" "}
                  example@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <FeatherIcon icon="phone" size={16} /> {" "}
                  (302) 555-0107
                </a>
              </li>

            </ul>
            <div className='mobile_main_menu'>
              <ul>
                <li>
                  <a href="#">{<Home_mobile />}</a>
                </li>

                <li >
                  <a href="#">{<CoursesMobile />}</a>
                </li>

                <li>
                  <a href="#">{<DashboardMobile />}</a>
                </li>

                <li>
                  <a href="#">{<PageMobile />}</a>
                </li>

                <li>
                  <a href="#">{<ElementMobile />}</a>
                </li>

                <li>
                  <a href="#">{<BlogMobile />}</a>
                </li>
              </ul>
            </div>

            <div className="small_screen_button_wrapper">
              <div className='small_screen_button'>
                <h6 className=''> Enroll Now</h6>
              </div>
            </div>

            <h6 className='my-3'>FIND WITH US</h6>

            <div className='small_screen_socialMedia_icon'>
              <a href='#'>
                <FeatherIcon icon='facebook' />
              </a>
              <a href='#'>
                <FeatherIcon icon='twitter' />
              </a>
              <a href='#'>
                <FeatherIcon icon='instagram' />
              </a>
              <a href='#'>
                <FeatherIcon icon='linkedin' />
              </a>
            </div>
          </div>
        )}
        <div>
        </div>
      </div>
    </>
  )
}

export default Navigation