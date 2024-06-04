import { useEffect, useState } from "react";
import "../CSS/About.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutText = document.querySelector(".about-text");
      const aboutImage = document.querySelector(".about-image");
      const aboutOffset =
        aboutText.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > aboutOffset) {
        aboutText.classList.add("slide-in-left");
        aboutImage.classList.add("slide-in-right");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="about-container">
        <div className="about-text">
          <h2>About the CEO</h2>
          <p className="about-paragraph">
            Welcome to <span className="riket">Riket-Interior</span>, where
            creativity meets excellence. I am <b>Akinyose Iyanuoluwa</b>, the
            visionary behind <span className="riket">Riket-Interior</span>. With
            a passion for transforming spaces into stunning works of art, I
            bring a touch of elegance and functionality to every project.
          </p>
          <p className="about-paragraph">
            Certified and highly skilled, I possess an in-depth knowledge of
            interior design principles and trends. My expertise extends across
            Nigeria, as I take pride in working inter-state, delivering
            exceptional results wherever my services are needed.
          </p>
          <div className={`additional-text ${isExpanded ? "expanded" : ""}`}>
            <p className="about-paragraph">
              At <span className="riket">Riket-Interior</span>, we believe that
              every space has a story to tell. My dedication to quality and
              attention to detail ensure that each design reflects the unique
              personality and lifestyle of my clients. From concept to
              completion, I am committed to creating beautiful, livable spaces
              that leave a lasting impression.
            </p>
            <p className="about-paragraph">
              Trust <span className="riket">Riket-Interior</span> to bring your
              vision to life with unmatched professionalism and creativity. Let
              embark on this journey together and make your dream space a
              reality.
            </p>
          </div>
          <button className="read-more-btn" onClick={toggleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="about-image">
          <img src="ceo2.jpeg" alt="CEO" />
        </div>
      </div>
    </>
  );
};

export default About;
