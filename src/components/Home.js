import React, { useEffect } from "react";
import Typed from "typed.js";
import Carousel from "../Carousel";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["Computer Science Student", "Data Science Enthusiast", "Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, This is</div>
          <div className="text-2">Abhinav Nagar</div>
          <div className="text-3">and I'm a <span className="typing"></span></div>
          <a href="mailto:abhinavnagar2696@gmail.com">Contact me</a>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Home;
