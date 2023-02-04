
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url:"https://assets0.mirraw.com/banner_sliders/10031/05_%281%29_main_webp.webp?1674107278%22%7D"},
  { url: "https://assets0.mirraw.com/banner_sliders/10027/01_%281%29_main_webp.webp?1674107117" },
  { url: "https://assets0.mirraw.com/banner_sliders/10028/02_%282%29_main_webp.webp?1674107156" },
  { url: "https://assets0.mirraw.com/banner_sliders/10029/04_%281%29_main_webp.webp?1674107206" },
  { url: "https://assets0.mirraw.com/banner_sliders/9685/08_main_webp.webp?1672649895" }
];

const Carousel = () => {
  return (
    <div style={{width:"100%",backgroundSize:"contain"}}>
      <SimpleImageSlider
        width="100%"
        height={500}
        images={images}
        // showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3.5}
      />
    </div>
  );
}


export default Carousel