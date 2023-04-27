import React from 'react';

function DotColor(props) {
  const customStyle = {
    margin: "3px",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
  };

  return (
    <div className='d-flex '>
      <div style={{ ...customStyle, backgroundColor: "red" }}></div>
      <div style={{ ...customStyle, backgroundColor: "yellow" }}></div>
      <div style={{ ...customStyle, backgroundColor: "green" }}></div>

    </div>
  );
}

export default DotColor;
