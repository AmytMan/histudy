import React from 'react'
import Effect from "../../components/Effect"
import Home_content from './Home_content'
function Home() {
  return (
    <div>
      <Effect 
      navtitle="Home" 
       content={<Home_content/>}
       dropdown_menu_position={{left:"50px",background:"black"}}
        />
    </div>
  )
}

export default Home
