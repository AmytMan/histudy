import React from 'react'

function Content_sub_item(props) {
  const styles = {
    color: "white",
    backgroundImage: "linear-gradient(90deg, #2f57ef, #b966e7)",
    textAlign: "center",
    borderRadius: "15px",
    fontSize: "10px",
    padding: "3px",
    marginLeft:"2px"
  };
  return (
    <div >
      <p style={styles}>{props.sub_item}</p>
    </div>
  );
}


export default Content_sub_item
