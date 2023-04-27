import React from 'react'
import Effect from '../../components/Effect'
import Courses_content from './Courses_content'

function Courses() {
  return (
    <div>
      <Effect navtitle="Courses" content={<Courses_content/>} />
    </div>
  )
}

export default Courses