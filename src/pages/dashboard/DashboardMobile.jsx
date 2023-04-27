import React,{useState} from 'react'

function DashboardMobile() {
    const [clicked ,setClicked] = useState(false)

    const handleClicked = () => {
       if (clicked != true) {
        setClicked(true);
     } else {
        setClicked(false);
       }
     };
  return (
    <div>
        <div className='mx-4 mobile_content_wrapper'>
   
   <div  className='d-flex justify-content-between  'onClick={handleClicked}>
     <div  >
       Dashboard
     </div> 
     <div>
       <span >{clicked ?"-":"+"}</span>
     </div>
   </div>
   <hr />
    
   </div>
   
   <div className={clicked ? "histudy_show":"histudy_hide"} >
        <div>
            <ul>
                <li>
                    <a href="#">Instructor Dashboard</a>
                </li>
                <hr />
                <li>
                    <a href="#">Student Dashboard</a>
                </li>
                <hr />
            </ul>
        </div>
   </div>
    </div>
  )
}

export default DashboardMobile