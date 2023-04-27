import React, { useState } from 'react';
import Heading from '../../components/Heading';
import image from '../../constant/image';
import './Course_showcase.css';
import FeatherIcon from 'feather-icons-react';

function Course_showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + imageArray.length - 1) % imageArray.length);
  };

  const imageArray = [
    image.course_layout_01,
    image.course_layout_02,
    image.course_layout_03,
    image.course_layout_04,
    image.course_layout_05,
    image.course_layout_06,
    image.course_layout_07,
    image.course_layout_08,
    image.course_layout_09,
    image.course_layout_10,
    image.course_layout_11,
  ];

  const numberToWord = (number) => {
    const words = [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Eleven'
    ];
    return words[number];
  };

  return (
    <>
      <div className=" showcase_wrapper ">
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
              <span>
                Course Layout {numberToWord(currentIndex)}
              </span>
              <div className='showcase_number my-3 fs-4'>{currentIndex + 1}/11</div>
            </div>
          </div>

        </div>
        <div className='showcase_items w-100'>
          <Heading title="Manage your courses in an authentic way." subtitle="Course Showcase" detailPara="Create your website course layout by choosing from 12 layout options." />
          <div className='d-flex justify-content-center align-items-center'>
            <img src={image.showcase_icon_1} alt="" />
          </div>
          <div className='container-fluid '>
            <h2 className='text-center'>Courses Feature List:</h2>
            <div className='d-flex justify-content-around align-items-center '>
              <div className="showcase_icon my-3">
                <div >
                  {<FeatherIcon icon="check-circle" size={20} />} <span>LMS Admin UI/UX</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Lesson Types</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>User Profile</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Teacher Profile</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Student Profile</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Course To Do</span>
                </div>

              </div>

              <div className="showcase_icon my-3">
                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Lesson Page</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Single Page Variation</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Quick Action</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Filter The Course</span>
                </div>

                <div>
                  {<FeatherIcon icon="check-circle" size={20} />} <span>Course Whitelist</span>
                </div>

                <div>
                {<FeatherIcon icon="check-circle" size={20} />} <span>Course Rating</span>
              </div>
            </div>

          </div>   



            

          </div>

        </div>
      </div>


    </>
  );
}

export default Course_showcase;
