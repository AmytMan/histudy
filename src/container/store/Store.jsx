import React,{useState} from 'react'
import Heading from '../../components/Heading'
import image from '../../constant/image';
import  FeatherIcon  from 'feather-icons-react';
import "./Store.css";
function Store() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + imageArray.length - 1) % imageArray.length);
  };

  const imageArray = [
    image.shop_layout_1,
    image.shop_layout_2,
    image.shop_layout_3,
    image.shop_layout_4,
    image.shop_layout_5,
    image.shop_layout_6
  ];

  const numberToWord = (number) => {
    const words = [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six'
    ];
    return words[number];
  };

  return (
    <div className='store_wrapper'>
        
        <div className='container'>
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
                    <span>Shop Layout {numberToWord(currentIndex)}</span>
                    <div className='showcase_number my-3 fs-4'>{currentIndex + 1}/6</div>
                </div>
            </div>           
        </div>  
    <div className='store_gallery_wrapper'>
        <div >
            <Heading title="Create a Stunning Store in Minutes with HiStudy!" subtitle="WORLD-CLASS DESIGN"
            detailPara="Create a beautiful online Book store (Sale Anything) using powerful histudy template and start selling right away!" />
        </div>
        <h2 className='mx-5 mb-4'>Top Notech Shop Feature:</h2>
        
        <div  className='showcase_icon mx-5'>
              
            <div >
                {<FeatherIcon icon="check-circle" size={20}  />} <span>Pixel-Perfect Interface</span>
            </div>

            <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span> Perfect Product Layouts</span>
            </div>

            <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span> Single Product Variation</span>
            </div>

            <div>
                {<FeatherIcon icon="check-circle" size={20} />} <span> Offcanvas for Mini Cart</span>
            </div>

            <div>
                {<FeatherIcon icon="check-circle" size={20} />} <span>One Page Checkout</span>
            </div>

            <div>
                {<FeatherIcon icon="check-circle" size={20} />} <span>Wishlist Page</span>
            </div>
        </div>
    </div>
</div>
)}

export default Store