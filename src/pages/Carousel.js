import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

const images = [
  {
    label: "image 1",
    alt: "image1",
    url: "https://webstatic.hoyoverse.com/upload/op-public/2023/04/27/0f3aded8ca018c6140d98fcad6dfe1b8_6387881284674606347.jpg",
  },
  {
    label: "image 2",
    alt: "image2",
    url: "https://webstatic.hoyoverse.com/upload/op-public/2023/04/27/3f56f7f49b04235798875feeef266a51_2418161583024609387.jpg",
  },
  {
    label: "image 3",
    alt: "image3",
    url: "https://webstatic.hoyoverse.com/upload/op-public/2023/04/27/d0dca7f8a40346485900c511a0d5a8bf_8221120445015561654.jpg",
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
