import React from 'react'
import Effect from "../../components/Effect";
import Blog_content from "./Blog_content"
function Blog() {
  return (
    <div>
       <Effect navtitle="Blog" content= {<Blog_content/>}
       dropdown_menu_position={{left:"300px"}}/> 
    </div>
  )
}

export default Blog