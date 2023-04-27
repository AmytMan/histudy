import React,{useState} from 'react'
import FeatherIcon from 'feather-icons-react';
function ElementMobile() {
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
                <div>
                    Elements
                </div> 
                <div>
                    <span >{clicked ?"-":"+"}</span>
                </div>
            </div>
            <hr/>
        </div>

        <div className={clicked ? "histudy_show":"histudy_hide"} >
            <ul>
                <li>
                    <a href="#">Style Tab</a>
                </li>
                <hr />
                <li>
                <a href="#">Accordian</a>
                </li>
                <hr />
                <li>
                <a href="#">Advance Tab</a>
                </li>
                <hr />
                <li>
                <a href="#">Brand</a>
                </li>
                <hr />
                <li>
                <a href="#">Button</a>
                </li>
                <hr />
                <li>
                <a href="#">Badge</a>
                </li>
                <hr />
                <li>
                <a href="#">Call To Action</a>
                </li>
                <hr />
                <li>
                <a href="#">Card</a>
                </li>
                <hr />
                <li>
                    <a href="#">Categories</a>
                </li>
                <hr />
                <li>
                <a href="#">Newsletter</a>
                </li>
                <hr />
                <li>
                <a href="#">Team</a>
                </li>
                <hr />
                <li>
                <a href="#">Social</a>
                </li>
                <hr />
                <li>
                <a href="#">Life Style</a>
                </li>
                <hr />
                <li>
                <a href="#">Gallery</a>
                </li>
                <hr />
                <li>
                <a href="#">Pricing</a>
                </li>
                <hr />
               
                <li>
                    <a href="#">Progressbar</a>
                </li>
                <hr />
                <li>
                <a href="#">Testimonial</a>
                </li>
                <hr />
                <li>
                <a href="#">Service</a>
                </li>
                <hr />
                <li>
                <a href="#">Split Area</a>
                </li>
                <hr />
                <li>
                <a href="#">Search Style</a>
                </li>
                <hr />
                <li>
                <a href="#">Instagram Style</a>
                </li>
                <hr />
                <li>
                <a href="#">& more coming</a>
                </li>
                <hr />
            </ul>
            
            <span className=' rounded-4 text-white fs-2 text-center mx-3 p-3 purchasenow '>
                <span className='front-arrow'>{<FeatherIcon icon="arrow-right" size={22} />}</span>
                Visit Histudy Template
                <span className='back-arrow'>{<FeatherIcon icon="arrow-right" size={22}/>}</span> 
            </span>
           
            
        </div>

    </div>
  )
}

export default ElementMobile