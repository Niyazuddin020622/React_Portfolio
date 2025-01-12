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
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Niyazuddin <span className="text-red-500">Ansari</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">
              Full Stack Developer, App & AI/ML Enthusiast
            </p>
            <p className="mb-4">
              I specialize in building robust web applications using React,
              Android Application Development, and other modern technologies.
              With a keen interest in AI/ML, I integrate intelligent solutions
              to create cutting-edge applications that solve complex problems
              effectively.
            </p>
            {/* Resume Download Button */}
            <button className="bg-black text-white px-5 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200">
              <a
                href="https://drive.google.com/file/d/18mKuCZfuqPVgOIO7cLif9QvdtSFABun4/view"
              >
                Download Resume
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="Hero" className="lg:h-[90vh] h-96" />
            <img
              src={reactLogo}
              alt="React Logo"
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt="Redux Logo"
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt="Tailwind CSS Logo"
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
  <a href="https://www.facebook.com/niyazuddin.ansari.9843" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="Facebook Logo" className="w-20" />
  </a>
  <a href="https://www.instagram.com/niyazu_06/" target="_blank" rel="noopener noreferrer">
    <img src={instagram} alt="Instagram Logo" className="w-20" />
  </a>
  <a href="https://x.com/Niyazuddin69691" target="_blank" rel="noopener noreferrer">
    <img src={twitter} alt="Twitter Logo" className="w-20" />
  </a>
  <a href="https://www.linkedin.com/in/niyazuddin-ansari-38459027a/" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn Logo" className="w-20" />
  </a>
</div>

    </section>
  );
};

export default Hero;
