import React,{useState} from 'react'
import Heading from '../../components/Heading'
import image from '../../constant/image'
import "./Event_option.css";
import FeatherIcon from 'feather-icons-react';
function Event_option() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + imageArray.length - 1) % imageArray.length);
  };
  const imageArray = [
    image.event_layout_1,
    image.event_layout_2,
    image.event_layout_3,
    image.event_layout_4,
    
  ];

  const numberToWord = (number) => {
    const words = [
      'One',
      'Two',
      'Three',
      'Four',
      
    ];
    return words[number];
  };
  return (
    <div className='eventoption_wrapper '>
        <div className='eventoption_items_wrapper  '>
            <Heading title="Empower your event management skill with HiStudy" subtitle="EVENT OPTIONS"
            detailPara="Create event layouts, floor plans, event plans, and more with histudy. Get event layout templates, and more by our histudy template. You don't need to be a designer to create professional-looking results. Histudy event layout is perfect for event managemnt."/>
            <div className='container-fluid'>
                <h2 className='text-center'>Event Feature List:</h2>
                <div className='d-flex justify-content-around align-items-center text-nowrap'>
                    <div className=" showcase_icon my-3  eventoption_items">
                        <div >
                            {<FeatherIcon icon="check-circle" size={18} />} <span>Multiple Views</span>
                        </div>

                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span>Easy Events Classification</span>
                        </div>

                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span>Event Widgets</span>
                        </div>

                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span>Organizers & Venues</span>
                        </div>

                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span>Contact Organizer</span>
                        </div>
                    </div>

                    <div className="showcase_icon my-3  eventoption_items">
                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span>Google Maps</span>
                        </div>

                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span> Guest List</span>
                        </div>

                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span> Sell Tickets</span>
                        </div>

                        <div>
                            {<FeatherIcon icon="check-circle" size={18} />} <span>Attendee Information</span>
                        </div>
                    </div>
                </div>
            </div>   
        </div>

        
        <div className=" eventoption_gallery_wrapper ">
            <div className='container'>
                <div className="showcase ">
                    <div className="showcase_gallery">
                        <img src={imageArray[currentIndex]} alt="" />
                    </div>

                    <div className='showcase_button_wrapper'>
                        <div className=" showcase_button">
                            <div className="slidebutton  " onClick={prevImage}>
                            {<FeatherIcon icon="arrow-left" size={18} />}
                            <span className='a'>Prev</span>
                            </div>

                            <div className="slidebutton " onClick={nextImage}>
                                <span className='a' > Next</span>
                                {<FeatherIcon icon="arrow-right" size={18} />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='showcase_count '>
                <span> Event Layout {numberToWord(currentIndex)}</span>
                </div>

                <div className='showcase_number my-3 fs-3'>{currentIndex + 1}/4</div>
            </div>
          
        </div>
    </div>
)}

export default Event_option