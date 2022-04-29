import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = (props) => {
  return (
    <SimpleImageSlider
      width={500}
      height={500}
      images={props.images}
      showBullets={true}
      showNavs={true}
    />
  );
};

export default Slider;
