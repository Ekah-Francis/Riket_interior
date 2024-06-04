import About from "./about";
import Navbar from "./navbar";
// import Projects from "./projects";
import "../index.css";
import HeroSection from "./herosection";
import Recentproject from "./recentproject";
import VideoComponent from "./comingsoon";
import ContactSection from "./contact";
import Footer from "./footer";
// import Gallery from "./gallery";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#6f2dbd"
                fillOpacity="1"
                d="M0,192L60,160C120,128,240,64,360,32C480,0,600,0,720,16C840,32,960,64,1080,85.3C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </svg>
        </svg>
      </svg>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Recentproject />
      </section>
      <section>
        <VideoComponent
          videoSrc="comingsoon.mp4"
          hoverText="Riket interior marketplace coming soon! Shop stylish and unique decor."
        />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section>
        <Footer />
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
