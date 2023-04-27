import React from 'react';
import { Card} from "react-bootstrap";
import DotColor from './DotColor';
import Course_sub_item from "./Content_sub_item"

function ImageCard(props) {
  return (
    <div>
      <Card className='marginRight'>
        <DotColor />
        <Card.Img className='demo_img' src={props.imageSrc} />
        <Card.Img className='demo_mobile_img' src={props.mobImageSrc} style={{width:"8rem"}} />
        <Card.Title className='d-flex m-2'>
          {props.titles}
          {props.showButton ? (
            <Course_sub_item sub_item=" &nbsp; HOT &nbsp; "/>
        ) : null}
       </Card.Title>
       </Card>
        
    </div>
  );
}

export default ImageCard;
