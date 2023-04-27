import React from 'react'
import "./Courses.css"
function Courses_content() {
  return (
    <>
    <div className=' image-dis'>
        <div>
            <div className='fw-bolder mx-3 '>Developer hub</div>
            <p className='p-2 mx-3'>Start building fast, with code samples, key resources and more.</p>
            <div className='container dropdown_menu_list'>
                <div className="row">
                    <div className="col">
                        <h3>Course Layout</h3>
                        <hr />
                        <div className="course_Items ">Filter one Toggle</div>
                        <div className="course_Items">Filter one Open</div>
                        <div className="course_Items">Filter Two Toggle</div>
                        <div className="course_Items">Filter Two Open</div>
                        <div className="course_Items">Course With Tab One</div>
                        <div className="course_Items">Course With Tab Two</div>
                    </div>
                    <div className="col">
                        <h3>Course Layout</h3>
                         <hr />
                        <div className="course_Items">Course Card Two</div>
                        <div className="course_Items">Course Card Three</div>
                        <div className="course_Items">Course Masonary</div>
                        <div className="course_Items">Course With Sidebar</div>
                        <div className="course_Items">Course Details</div>
                        <div className="course_Items">Course Details Two</div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Courses_content