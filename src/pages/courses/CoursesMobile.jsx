import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import React ,{useState} from 'react'
import "./CoursesMobile.css"
function CoursesMobile() {
  const [clicked ,setClicked] = useState(false)

  const handleClicked = () => {
    if (clicked != true) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
  
    
  return (
    <>

   
    <div className='mx-4 mobile_content_wrapper'>
   
      <div onClick={handleClicked} className='d-flex justify-content-between  '>
        <div >
          Courses
        </div> 
        <div>
          <span >{clicked ? "-":"+"}</span>
        </div>
      </div>
      <hr />
       
      </div>
      
      <div className={clicked ? "histudy_show":"histudy_hide"}>

        <div className='bg-dark'>
            <h5 className='text-white fs-1'>Developer hub</h5>
           <p className='text-white'> Start building fast, with code samples, key resources and more.</p>
        </div>
        <h6>COURSE LAYOUT</h6>

        <ul>
          <li>
            <a href="#">Filter On Toogle</a>
          </li>
           <hr />
          <li>
            <a href="#">Filter One Toggle


</a>
          </li>
          <hr />
          <li>
            <a href="#">Filter One Open</a>
          </li>
           <hr />
          <li>
            <a href="#">Filter Two Toggle</a>
          </li>
          <hr />
          <li>
            <a href="#">Filter Two Open</a>
          </li>
           <hr />
          <li>
            <a href="#">Course With Tab</a>
          </li>
          <hr />
          <li>
            <a href="#">Course With Tab Two</a>
          </li>
           <hr />
        </ul>

        <h6>COURSE LAYOUT</h6>
           <ul>
          <li>
            <a href="#">Course Card Two</a>
          </li>
          <hr />
          <li>
            <a href="#">Course Card Three</a>
          </li>
           <hr />
          <li>
            <a href="#">Course Masonry</a>
          </li>
          <hr />
          <li>
            <a href="#">Course Details</a>
          </li>
           <hr />
          <li>
            <a href="#">Course Details Two</a>
          </li>
          <hr />
        </ul>
        <div className='courses_mobile_content '>
            <div >
                <FeatherIcon icon="folder" size={18}/> <span>Quick Start Guide</span> 
                <hr />

            </div>
           
            <div>
                <FeatherIcon icon="folder" size={18}/> <span>For Open Source</span> 
                <hr />
            </div>
            <div>
                <FeatherIcon icon="folder" size={18}/> <span>API Status</span> 
                <hr />
            </div>
            <div >
                <FeatherIcon icon="folder"size={18}/> <span>Support</span> 
                <hr />
            </div>
           
        </div>  
      </div>  
      
    </>
  )
}

export default CoursesMobile