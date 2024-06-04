import { useEffect, useState } from "react";
import axios from "axios";
import "lightbox2/dist/css/lightbox.min.css";
import lightbox from "lightbox2/dist/js/lightbox.min.js"; // Import Lightbox2
import "../CSS/Gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Ensure that jQuery and Lightbox2 are properly loaded
    if (lightbox) {
      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        // Add other options as needed
      });
    } else {
      console.error("Lightbox2 not found.");
    }

    // Fetch default images on component mount
    const fetchDefaultImages = async () => {
      const API_KEY =
        "oxJ2zsGWs7c10KaBfhz01tr18N959AWydQEJK1Zgg76ojeVtykjP5OQT"; // Replace with your Pexels API key
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query: searchTerm || "interior decoration",
          per_page: 15,
          page: currentPage,
        },
      });
      setImages(response.data.photos);
      setTotalPages(Math.ceil(response.data.total_results / 15));
    };

    fetchDefaultImages();
  }, [currentPage, searchTerm]); // Fetch images whenever currentPage or searchTerm changes

  const handleSearch = async (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="overall-gallery">
      <nav>
        <Link
          className="home-link"
          to="/"
          style={{ background: "transparent" }}
        >
          <h3 style={{ color: "#6f2dbd" }}>
            Riket <span style={{ color: "#000" }}>Interior</span>
          </h3>
        </Link>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>

          <Link className="home-link" to="/">
            Home
          </Link>
          {/* <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link> */}
        </div>
      </nav>
      <div className="gallery-container">
        {/* <Link to="/">Go Back</Link> */}
        <h1>
          Step into the <span>Enchanted Gallery</span>!
        </h1>
        <p>
          Discover an array of captivating visuals. Click on any image for its
          enchanting tale.
        </p>
        <form onSubmit={handleSearch} className="gallery-search-form">
          <input
            type="text"
            placeholder="Search for interior decoration..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="gallery-search-input"
          />
          <button type="submit" className="gallery-search-button">
            Search
          </button>
        </form>
        <div className="gallery">
          {images.map((image) => (
            <a
              key={image.id}
              href={image.src.original}
              data-lightbox="example-set"
              data-title={image.alt}
            >
              <img src={image.src.small} alt={image.alt} />
            </a>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
