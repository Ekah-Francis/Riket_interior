import PropTypes from "prop-types";
import "../CSS/Comingsoon.css";

const VideoComponent = ({ videoSrc, hoverText }) => {
  return (
    <div className="comingsoon">
      <h1>Riket market</h1>
      <p>Coming soon</p>
      <div className="video-container">
        <video className="video-element" src={videoSrc} autoPlay loop muted />
        <div className="overlay-text">{hoverText}</div>
      </div>
    </div>
  );
};

VideoComponent.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  hoverText: PropTypes.string.isRequired,
};

export default VideoComponent;
