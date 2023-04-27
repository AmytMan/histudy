import React,{useState} from 'react'
import Heading from '../../components/Heading'
import image from '../../constant/image'
import  FeatherIcon from 'feather-icons-react'
import Content_sub_item from '../../components/Content_sub_item';
import "./BlogDesign.css"
function BlogDesign() {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + imageArray.length - 1) % imageArray.length);
  };

  const imageArray = [
    image.blog_layout_1,
    image.blog_layout_2,
    image.blog_layout_3,
    image.blog_layout_4,
    image.blog_layout_5,
    image.blog_layout_6,
    image.blog_layout_7,
    image.blog_layout_8,
    image.blog_layout_9,
   
  ];
  const blogName = (number) => {
    const words = [
      'Blog List',
      'Blog Grid',
      'Blog Minimal',
      'Blog with Sidebar',
      'Blog Details',
      'Post Format Standard',
      'Post Format Quote',
      'Post Format Audio',
      'Post Format Video'
      
    ];
    return words[number];
  };
 

  return (
    <div className='blogdesign_wrapper'>
        <div className='blogdesign_items'>
            <div>
                <Heading subtitle="PIXEL-PERFECT BLOG DESIGN" 
                title="Create a Super Clean Blog in Seconds!"
                detailPara=" Have a nice blog layout for presentation your articles. You can choose from over available blog templates in histudy education template.
                "/>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={image.post_format} alt="post_format" />
            </div>
            
            <div className='container-fluid '>
              <h2 className='text-center'>Blog Feature List:</h2>
              <div className='d-flex justify-content-around align-items-center '>
                <div className="showcase_icon my-3 ">
                  <div >
                    {<FeatherIcon icon="check-circle" size={20} />} <span>Blog List</span>
                  </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Blog Grid</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Blog Grid Minimal</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Blog With Sidebar</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span> Blog Details</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Post Format Standard</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Post Format Gallery</span>
                </div>

              </div>

              <div className="showcase_icon">
                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Post Format Quote</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Post Format Audio</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Post Format Video</span>
                </div>

                <div>
                <span > {<FeatherIcon icon="check-circle" size={20} />} Media Under Tittle</span> <span className='coming'>coming</span>
                </div>

                <div>
                <span > {<FeatherIcon icon="check-circle" size={20} />} Sticky Sidebar </span> <span className='coming'>coming</span>
                </div>

                <div>
                <span> {<FeatherIcon icon="check-circle" size={20} />} Auto Masonry</span> <span className='coming'>coming</span>
              </div>

              <div>
                <span> {<FeatherIcon icon="check-circle" size={20} />} Meta Overlaid <span className='coming'>coming</span> </span>
              </div>             
            </div>
          </div>   
        </div>
      </div>
      <div className='blogdesign_gallery_wrapper'>
        <div className='container '>
          <div className=" showcase">
            <div className="showcase_gallery">
              <img src={imageArray[currentIndex]} alt="" />
            </div>
            <div className='showcase_button_wrapper'>
              <div className=" showcase_button ">

                <div className="slidebutton  " onClick={prevImage}>
                  {<FeatherIcon icon="arrow-left" size={20} />} <span className='a'>Prev</span>
                </div>

                <div className="slidebutton " onClick={nextImage}>
                  <span className='a' > Next</span>
                  {<FeatherIcon icon="arrow-right" size={20} />}
                </div>


              </div>
            </div>

            <div className='showcase_count '>
              <div className='fs-4 p-3'>
                <span> {blogName(currentIndex)}</span>
              </div>
              <div className='showcase_number my-3 fs-4'>{currentIndex + 1}/9</div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default BlogDesign