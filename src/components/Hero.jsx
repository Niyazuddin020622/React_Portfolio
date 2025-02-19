import React from "react";
import hero from "../assets/Hero.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm <span className="text-red-500">Niyazuddin Ansari</span>
            </h1>
            <p className="md:text-2xl text-xl mb-2">
              Web Developer, App & AI/ML Enthusiast
            </p>
            <p className="text-gray-800 mb-4">
              I specialize in building robust web applications using React,
              Android Application Development, and other modern technologies.
              With a keen interest in AI/ML, I integrate intelligent solutions
              to create cutting-edge applications that solve complex problems
              effectively.
            </p>
            {/* Resume Download Button */}
            <a
              href="https://drive.google.com/file/d/18mKuCZfuqPVgOIO7cLif9QvdtSFABun4/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-3 rounded-md font-semibold hover:bg-red-600 transition-all duration-300 inline-block w-max"
            >
              Download Resume
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img
              src={hero}
              alt="Hero"
              className="lg:h-[80vh] h-80 object-contain"
            />
            {/* Tech Logos */}
            <img
              src={reactLogo}
              alt="React Logo"
              className="absolute w-12 top-32 left-0 rounded-full md:hidden animate-pulse"
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              className="absolute w-12 top-10 right-5 md:hidden animate-pulse"
            />
            <img
              src={tailwind}
              alt="Tailwind CSS Logo"
              className="absolute w-12 rounded-full right-0 bottom-36 md:hidden animate-pulse"
            />
          </div>
        </div>
      </div>

      {/* Social Media Icons - Fixed Sidebar */}
      <div className="absolute top-40 right-10 hidden bg-gray-800 p-3 md:flex flex-col gap-4 rounded-lg shadow-lg">
        <a
          href="https://www.facebook.com/niyazuddin.ansari.9843"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <img src={facebook} alt="Facebook Logo" className="w-12" />
        </a>
        <a
          href="https://www.instagram.com/niyazu_06/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <img src={instagram} alt="Instagram Logo" className="w-12" />
        </a>
        <a
          href="https://x.com/Niyazuddin69691"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <img src={twitter} alt="Twitter Logo" className="w-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/niyazuddin-ansari-38459027a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <img src={linkedin} alt="LinkedIn Logo" className="w-12" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
