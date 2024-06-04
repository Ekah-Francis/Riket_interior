import { useEffect, useRef } from "react";
import "../CSS/Recentproject.css"; // Assuming you put the CSS in this file
import { Link } from "react-router-dom";
const Recentproject = () => {
  const imageListRef = useRef(null);
  const prevSlideButtonRef = useRef(null);
  const nextSlideButtonRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  useEffect(() => {
    const imageList = imageListRef.current;
    const slideButtons = [
      prevSlideButtonRef.current,
      nextSlideButtonRef.current,
    ];
    const scrollbarThumb = scrollbarThumbRef.current;
    const sliderScrollbar = scrollbarThumb.parentElement;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const handleMouseMove = (startX, thumbPosition, e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition =
        sliderScrollbar.getBoundingClientRect().width -
        scrollbarThumb.offsetWidth;
      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;
      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = (e, startX, thumbPosition) => {
      document.removeEventListener("mousemove", (e) =>
        handleMouseMove(startX, thumbPosition, e)
      );
      document.removeEventListener("mouseup", handleMouseUp);
    };

    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      document.addEventListener("mousemove", (e) =>
        handleMouseMove(startX, thumbPosition, e)
      );
      document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });

    window.addEventListener("resize", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });

    handleSlideButtons();
    updateScrollThumbPosition();
  }, []);

  return (
    <div className="slider-container">
      <h2>Recent Projects </h2>
      <div className="slider-wrapper">
        <button
          id="prev-slide"
          className="slide-button material-symbols-rounded"
          ref={prevSlideButtonRef}
        >
          chevron_left
        </button>
        <ul className="image-list" ref={imageListRef}>
          <img className="image-item" src="recent/dinny2.jpeg" alt="img-1" />
          <img className="image-item" src="recent/console.jpeg" alt="img-2" />
          <img className="image-item" src="recent/dinny.jpeg" alt="img-3" />
          <img className="image-item" src="recent/chand.jpeg" alt="img-4" />
          <img className="image-item" src="recent/bath.jpeg" alt="img-5" />
          <img className="image-item" src="recent/living.jpeg" alt="img-6" />
          <img className="image-item" src="recent/ward.jpeg" alt="img-7" />
          <img className="image-item" src="recent/living4.jpeg" alt="img-8" />
          <img className="image-item" src="recent/living3.jpeg" alt="img-9" />
          <img className="image-item" src="recent/living2.jpeg" alt="img-10" />
          {/* <img className="image-item" src="recent/img-4.jpg" alt="img-10" />
          <img className="image-item" src="recent/img-6.jpg" alt="img-10" />
          <img className="image-item" src="recent/img-2.jpg" alt="img-10" />
          <img className="image-item" src="recent/img-8.jpg" alt="img-10" /> */}
        </ul>
        <button
          id="next-slide"
          className="slide-button material-symbols-rounded"
          ref={nextSlideButtonRef}
        >
          chevron_right
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
        </div>
      </div>

      <Link to="/gallery">
        <button className="cssbuttons-io-button">
          View Gallery
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Recentproject;
