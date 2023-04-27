import React from 'react'
import "./Heading.css"
function Heading(props) {
    
  return (
    <div className='section-subtitle text-center '>
        <span className='subtitle bg-primary-opacity'>{props.subtitle}</span>
        <h2 className='title'><strong >{props.extra_detail}</strong>  {props.title}</h2>
        <p>{props.detailPara}</p>
    </div>
  )
}

export default Heading