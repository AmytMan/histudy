import React,{useState} from 'react'
import Content_sub_item from '../../components/Content_sub_item';
import image from '../../constant/image';
function BlogMobile() {
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
                Blog
            </div> 
            <div>
                <span >{clicked ?"-":"+"}</span>
            </div>
        </div>
        <hr />
    </div>

    <div className={clicked ? "histudy_show":"histudy_hide"} >
        <div>
        <span>BLOGS STYLE</span>
                <hr />
            <ul>
                <li>
                    <a href="#">Blog list</a>
                </li>
                <hr />
                <li>
                    <a href="#">Blog Grid</a>
                </li>
                <hr />
                <li>
                    <a href="#">Blog Grid Minimal</a>
                </li>
                <hr />
                <li>
                    <a href="#">Blog With Sidebar</a>
                </li>
                <hr />
                <li>
                    <a href="#">Blog Detail</a>
                </li>
                <hr />
                <li>
                    <a href="#">Post Format Standard</a>
                </li>
                <hr />
                <li>
                    <a href="#">Post Format Gallery</a>
                </li>
                <hr />
            </ul>
            <span>GET STARTED</span><hr />
            <ul>
                <li>
                    <a href="#">Post Format Quotes</a>
                </li>
                <hr />
                <li>
                    <a href="#">Post Format Audio</a>
                </li>
                <hr />
                <li>
                    <a href="#">Post Format Video</a>
                </li>
                <hr />
                <li>
                    <a href="#" style={{ display: "flex"}} >Media Under Title{<Content_sub_item sub_item="coming soon"/>}</a>
                </li>
                <hr />
                <li>
                    <a href="#" style={{ display: "flex" }} >Sticky Sidebar{<Content_sub_item sub_item="coming soon"/>}</a>
                </li>
                <hr />
                <li>
                    <a href="#" style={{ display: "flex" }} >Auto Masonary{<Content_sub_item sub_item="coming soon"/>}</a>
                </li>
                <hr />
                <li>
                    <a href="#" style={{ display: "flex" }} >Meta Overlaid{<Content_sub_item sub_item="coming soon"/>}</a>
                </li>
            </ul>
            <div className="blog_content">
            <img src={image.blog_img} alt="blog_image"   />
        </div>
        </div>
    </div>
   
   
           
            
            
        
            
            
            
            
            
            
    </div>
  )
}

export default BlogMobile