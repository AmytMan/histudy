import React from 'react'
import Effect from "../../components/Effect"
import Elements_content from './Elements_content'
function Elements() {
  return (
    <div>
        <Effect navtitle="Elements" content={<Elements_content/>}
        dropdown_menu_position={{left:"200px"}}/>
    </div>
  )
}

export default Elements