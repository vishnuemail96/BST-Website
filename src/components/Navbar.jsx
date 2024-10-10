import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false); // Close the menu when an option is clicked
  };

  return (
    <>
      {/* Notice Section */}
      <div className="notice flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-violet-900 via-black to-violet-900 text-gray-100 py-2 px-6 shadow-lg space-y-2 md:space-y-0 md:space-x-4">
        {/* Left Side: Active Customer */}
        <div className="flex items-center space-x-3">
          <span className="text-xl md:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M32.59-147.8v-120.61q0-36.23 18.74-66.59 18.74-30.37 49.8-46.35 62.72-31.24 127.66-46.98 64.95-15.74 131.93-15.74 67.43 0 132.39 15.62 64.96 15.62 127.19 46.86 31.06 15.95 49.81 46.25 18.74 30.3 18.74 66.91v120.63H32.59Zm739.85 0v-127.9q0-44.95-24.27-86.65-24.26-41.69-69.97-74.28 48.37 6.48 91.45 20.62 43.09 14.14 81.13 34.42 36.96 20 56.8 47.21 19.83 27.2 19.83 59.4v127.18H772.44ZM360.72-484.07q-67.92 0-115.99-48.07-48.08-48.08-48.08-115.99t48.08-115.99q48.07-48.08 115.99-48.08 67.91 0 115.99 48.08 48.07 48.08 48.07 115.99t-48.07 115.99q-48.08 48.07-115.99 48.07Zm411.72-164.06q0 67.67-48.19 115.87-48.18 48.19-115.84 48.19-11.28 0-28.04-2.61-16.76-2.62-28.72-6.1 27.48-32.48 42.1-72.4 14.62-39.92 14.62-82.92 0-42.99-14.62-82.94-14.62-39.96-42.1-72.44 14.24-5.24 28.24-6.98 14-1.74 28.37-1.74 67.72 0 115.95 48.2 48.23 48.19 48.23 115.87ZM123.59-238.8h474.26v-28.42q0-10.77-5.5-19.58-5.5-8.81-14.5-13.7-52.57-26.04-106.85-39.3-54.28-13.27-110.28-13.27-55.52 0-110.29 13.27-54.76 13.26-106.84 39.3-9 4.89-14.5 13.7-5.5 8.81-5.5 19.58v28.42Zm237.09-332.68q31.6 0 54.15-22.5 22.54-22.51 22.54-54.11 0-31.61-22.51-54.15-22.5-22.54-54.1-22.54-31.61 0-54.15 22.5-22.54 22.51-22.54 54.11 0 31.6 22.5 54.15 22.51 22.54 54.11 22.54Zm.04 332.68Zm0-409.33Z" />
            </svg>
          </span>
          {/* Icon size adjusted for mobile */}
          <p className="text-base md:text-sm font-bold text-white">
            Active Customers:
            <span className="text-yellow-400 font-bold ml-1 md:ml-2">
              5000+🤩
            </span>
          </p>
        </div>

        {/* Center: Slogan */}
        <motion.div
          className="flex flex-col items-center space-x-2 md:flex-row md:justify-start" // Flex column on mobile, row on larger screens
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <motion.p
            className="text-sm md:text-sm text-center text-white" // Center text on mobile devices
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            "இன்றே உங்கள் நிதி நம்பிக்கையை உருவாக்குங்கள், BST உடன் சேர்ந்து!"
          </motion.p>
        </motion.div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center space-x-4">
          <p className="hidden md:block text-sm font-bold text-white">
            Stay Connected:
          </p>
          <a
            href="mailto:balasrithandayuthapanichit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whit hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
            aria-label="Gmail"
          >
            <img src="gmail.png" alt="Gmail" className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/bala-sri-thandayuthapani-b585b7280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <img src="linkedin.png" alt="LinkedIn" className="w-7 h-7" />
          </a>
          <a
            href="https://www.instagram.com/balasrithandayuthapani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
            aria-label="Instagram"
          >
            <img src="instagram.png" alt="Instagram" className="w-7 h-7" />
          </a>
          <a
            href="https://www.facebook.com/people/Bala-Sri-Thandayuthapani/pfbid02ZZZTwGcBAk2KnomzPdC7Eo6Wh1fuuHG8puLSB4XhxJ9nrVqhQsLSS2Ze72LHTUqZl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
            aria-label="Facebook"
          >
            <img src="facebook.png" alt="Facebook" className="w-7 h-7" />
          </a>
          <a
            href="https://www.youtube.com/@balasrithandayuthapani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
            aria-label="YouTube"
          >
            <img src="youtube.png" alt="YouTube" className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar flex flex-col md:flex-row items-center p-4 bg-violet-700 shadow-md">
        {/* Left Section: Logo and Heading */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Logo */}
          <Link to="/home">
            <img
              src="bst_logo.png"
              alt="Company Logo"
              className="h-20 w-20 md:h-40 md:w-40 object-contain"
            />
          </Link>
          {/* Title and Subtitle */}
          <div className="ml-2">
            <h1 className="text-lg md:text-2xl font-extrabold text-white font-serif text-center">
              Bala Sri Thandayuthapani Chit Funds (P)Ltd.
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-serif text-center">
              பால ஸ்ரீ தண்டாயுதபாணி சீட் பண்ட்ஸ் (பி)லிட்.
            </p>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            className="text-white text-3xl md:hidden ml-auto focus:outline-none"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}{" "}
            {/* Toggle between open/close icons */}
          </button>
        </div>

        {/* Separator Line */}
        <div className="hidden md:block w-px h-14 bg-white mx-2"></div>

        {/* Right Section: Contact Info and Navbar Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-4 space-y-2 md:space-y-0 w-full md:w-auto items-center mt-4 md:mt-0`}
        >
          {/* Navbar Links */}
          <div className=" flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-1">
            {["Home", "About", "Chits", "Chit group", "Contact Us"].map(
              (item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="w-20 h-12 text-white font-semibold bg-violet-600 flex items-center justify-center rounded-lg shadow-md transition-transform transform hover:translate-y-[-4px] hover:scale-95 duration-100 ease-in-out text-xs text-center"
                  onClick={handleMenuClick} // Close the menu when a link is clicked
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Contact Card */}
          <div className="relative drop-shadow-xl w-[21em] h-[10em] overflow-hidden rounded-xl bg-[#3d3c3d] border-4 border-[#323132]">
            {/* Card content */}
            <div className="absolute flex flex-col justify-center space-y-3 items-start text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] p-4 text-xs">
              <p>
                <img
                  src="Cardphone.png"
                  alt="Call Us"
                  className="inline-block w-6 h-6 mr-2"
                />
                <span className="font-bold">Call Us:</span>+91 97510 60940
              </p>
              <a href="mailto:balasrithandayuthapanichit@gmail.com">
                <p>
                  <img
                    src="Cardgmail.png"
                    alt="Mail Us"
                    className="inline-block w-6 h-6 mr-2"
                  />
                  <span className="font-bold">Mail Us:</span>{" "}
                  balasrithandayuthapanichit@gmail.com
                </p>
              </a>
              <p>
                <img
                  src="Cardoffice.png"
                  alt="Office Hours"
                  className="inline-block w-6 h-6 mr-2"
                />
                <span className="font-bold">Office Hours:</span> Mon-Fri 9:00
                AM-6:00 PM
              </p>
            </div>

            {/* Background blur effect */}
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
