import React from 'react';

function AboutUs(props) {

const {product, text} = props
  return (
    <div>
      <p>About Us</p>
      {props.text}
      -----------
      <ul>
        <li>name:{product.name}</li>
        <li>type:{product.type}</li>
        <li>media:{product.media}</li>
      </ul> 
    </div>
  );
}

export default AboutUs;