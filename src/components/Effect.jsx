import React,{useState} from 'react';
import FeatherIcon from 'feather-icons-react';


function Effect(props) {

  
  const [isContentHovered, setIsContentHovered] = useState(false);
  const[isOpen,setIsOpen] = useState(false)
  const handleMouseover = () => {
    if (!isOpen) {
      setIsOpen(true);
     
    }
  };
  
  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsContentHovered(false)
    
  };
  const handleContentMouseOver = () => {
    setIsContentHovered(true);
  };

  const handleContentMouseLeave = () => {
    setIsContentHovered(false);
    setIsOpen(false);
  };
  const styles = {
    color: isOpen || isContentHovered ? `#0d6efd` : `#192335`
  };
  
  return (
   
    <div className="  dropdown-hover  ">
      <a 
        href="#"  
        role="button"
        onMouseOver={handleMouseover}
        onMouseLeave={handleMouseLeave}
        style={styles}
        >
        {props.navtitle}
        <FeatherIcon
          icon={isOpen || isContentHovered ? 'chevron-up' : 'chevron-down'}
          className="icon" size={18}
        />
        
      </a>
      <div className="dropdown-menu"
      onMouseLeave={handleContentMouseLeave}
      onMouseOver={handleContentMouseOver}
      style={props.dropdown_menu_position}>
      
      {props.content}
      
      </div>
      </div>
    )
}
export default Effect;