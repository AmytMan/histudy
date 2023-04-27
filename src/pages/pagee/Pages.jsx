import React from 'react'
import Effect from '../../components/Effect'
import Page_content from './Page_content'
function Pages() {
  return (
    <div>
        <Effect navtitle="Pages" content={<Page_content/>} 
        dropdown_menu_position={{left:"50px"}}/>
    </div>
  )
}

export default Pages