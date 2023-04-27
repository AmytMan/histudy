import React,{useState}  from 'react'
import "../../pages/dashboard/Dashboard";
 import "./Home_mobile.css"
function Home_mobile() {
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
   
      <div  className='d-flex justify-content-between  'onClick={handleClicked}>
        <div  >
          Home
        </div> 
        <div>
          <span >{clicked ?"-":"+"}</span>
        </div>
      </div>
      <hr />
       
      </div>
      
      <div className={clicked ? "histudy_show":"histudy_hide"} >
        <ul>
          <li>
            <a href="#">Home Demo</a>
          </li>
           <hr />
          <li>
            <a href="#">Marketplace</a>
          </li>
          <hr />
          <li>
            <a href="#">Kindergarten</a>
          </li>
           <hr />
          <li>
            <a href="#">University Classic</a>
          </li>
          <hr />
          <li>
            <a href="#">Home Elegant</a>
          </li>
           <hr />
          <li>
            <a href="#">Gym Coaching</a>
          </li>
          <hr />
          <li>
            <a href="#">online School</a>
          </li>
           <hr />
          <li>
            <a href="#">University Status</a>
          </li>
          <hr />
          <li>
            <a href="#">Home Technology</a>
          </li>
           <hr />
          <li>
            <a href="#">Instructor Portfolio</a>
          </li>
          <hr />
          <li>
            <a href="#">Language Academy</a>
          </li>
           <hr />
          <li>
            <a href="#">Single Course</a>
          </li>
          <hr />
          <li>
            <a href="#">Online Course</a>
          </li>
           <hr />
          <li>
            <a href="#">Classic LMS</a>
          </li>
          <hr />
          <li>
            <a href="#">Course School</a>
          </li>
           <hr />
          <li>
            <a href="#">Coming Soon</a>
          </li>
          <hr />
        </ul>
      </div>    
    </>
  )
}

export default Home_mobile