import { useState, useEffect } from "react";
import "../CSS/Herosection.css"; // Import your CSS file
import slidedata from "../data/data.js";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderItems = slidedata;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="list">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""} ${
              index ===
              (currentIndex - 1 + sliderItems.length) % sliderItems.length
                ? "previous"
                : ""
            }`}
          >
            <img src={item.src} alt={`Slide ${index}`} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="hero-title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <ScrollLink
                className="home-link"
                to="projects"
                smooth={true}
                duration={500}
              >
                {index === 0 && <button className="button"> Explore</button>}
              </ScrollLink>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`thumbnail-item ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={item.src} alt={`Thumbnail ${index}`} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          {"<"}
        </button>
        <button id="next" onClick={handleNext}>
          {">"}
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default HeroSection;
