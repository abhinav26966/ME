import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Ensure jQuery is available and OwlCarousel is initialized
    if ($ && $(carouselRef.current).owlCarousel) {
      $(carouselRef.current).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });
    } else {
      console.error("OwlCarousel initialization failed. Ensure that the dependencies are correctly imported.");
    }
  }, []);

  return (
    <div className="owl-carousel owl-theme" ref={carouselRef}>
      <div className="item"><h4>1</h4></div>
      <div className="item"><h4>2</h4></div>
      <div className="item"><h4>3</h4></div>
      <div className="item"><h4>4</h4></div>
      <div className="item"><h4>5</h4></div>
      <div className="item"><h4>6</h4></div>
      <div className="item"><h4>7</h4></div>
      <div className="item"><h4>8</h4></div>
      <div className="item"><h4>9</h4></div>
      <div className="item"><h4>10</h4></div>
    </div>
  );
};

export default Carousel;
