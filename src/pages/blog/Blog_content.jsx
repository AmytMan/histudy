import React from 'react'
import Content_sub_item from '../../components/Content_sub_item';
import image from "../../constant/image";
import "./Blog.css"
function Blog_content() {
  return (
    <div className='blog_wrapper'>
        <div className="blog_content">
            <div>
                <span>BLOGS STYLE</span>
                <hr />
            <div className='blog_items'>Blog list</div>
            <div className='blog_items'>Blog Grid</div>
            <div className='blog_items'>Blog Grid Minimal</div>
            <div className='blog_items'>Blog With Sidebar</div>
            <div className='blog_items'>Blog Detail</div>
            <div className='blog_items'>Post Format Standard</div>
            <div className='blog_items'>Post Format Gallery</div>
            </div>
        </div>
        <div className="blog_content">
            <div>
                <span>GET STARTED</span><hr />
            </div>
            <div className='blog_items'>Post Format Quotes</div>
            <div className='blog_items'>Post Format Audio</div>
            <div className='blog_items'>Post Format Video</div>
            <div className='blog_items d-flex '  >
               <div>Media Under Title</div>
               <div> {<Content_sub_item sub_item="coming soon"/>}</div>
            </div>
            <div className='blog_items d-flex ' >
               <div> Sticky Sidebar</div>
               <div> {<Content_sub_item sub_item="coming soon"/>}</div>
            </div>
            <div className='blog_items d-flex '  >
               <div> Auto Masonary</div>
              <div>{<Content_sub_item sub_item="coming soon"/>}</div> 
            </div>
            <div className='blog_items d-flex' >
               <div>Meta Overlaid</div>
               <div>{<Content_sub_item sub_item="coming soon"/>}</div> </div>
        </div>
        <div className="blog_content">
            <img src={image.blog_img} alt=""   />
        </div>
    </div>
  )
}

export default Blog_content