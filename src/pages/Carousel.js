import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

const images = [
  {
    label: "image 1",
    alt: "image1",
    url: "https://webstatic.hoyoverse.com/upload/op-public/2023/05/22/e10a697a32196d3d05e08d76d52bdbae_4787505608920387824.png",
  },
  {
    label: "image 2",
    alt: "image2",
    url: "https://webstatic.hoyoverse.com/upload/op-public/2023/05/22/0370e0d921cf5bae96083a4d2cd6b4f8_7044895680673227774.png",
  },
  {
    label: "image 3",
    alt: "image3",
    url: "https://webstatic.hoyoverse.com/upload/op-public/2023/05/22/a9ddcac7b0ee53f3ce843ed2cccbadc4_1662299043594752880.png",
  },
];

const imageRender = images.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
  </div>
));

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="carousel-img">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={images[currentIndex]}
        onChange={handleChange}
        className="whenthecarousel"
      >
        {imageRender}
      </Carousel>
    </div>
  );
}
