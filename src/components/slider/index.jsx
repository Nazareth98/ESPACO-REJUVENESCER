import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = (props) => {
  return (
    <SimpleImageSlider
      width={props.width}
      height={props.height}
      images={props.images}
      showBullets={true}
      showNavs={true}
    />
  );
};

export default Slider;
