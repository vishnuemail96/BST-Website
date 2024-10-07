import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Notice Section */}
      <div className="notice flex flex-col md:flex-row justify-between items-center bg-violet-500 text-gray-100 py-1 px-4 shadow-lg space-y-2 md:space-y-0 md:space-x-4">
        {/* Left Side: Active Customer */}
        <div className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl">👥</span>{" "}
          {/* Icon size adjusted for mobile */}
          <p className="text-base md:text-lg font-bold text-white">
            Active Customers:
            <span className="text-yellow-400 font-extrabold ml-1 md:ml-2">
              5000+ 🤩
            </span>
          </p>
        </div>

        {/* Center Notice Panel */}
        <div className="w-auto overflow-hidden">
          <p className="whitespace-nowrap animate-marquee font-medium text-sm text-white w-[40%]">
            " உங்கள் இலக்கை அடைய, வாழ்க்கையில் வெற்றி பெற இன்றே உங்கள் BST உடன் இணைந்திடுங்கள் "
          </p>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center space-x-4">
          <p className="hidden md:block text-sm font-bold text-white">
            Stay Connected:
          </p>

          <a
            href="https://www.linkedin.com/in/bala-sri-thandayuthapani-b585b7280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
          >
            <FaLinkedin className="text-2xl" />
          </a>

          <a
            href="https://www.instagram.com/balasrithandayuthapani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
          >
            <FaInstagram className="text-2xl" />
          </a>

          <a
            href="https://www.facebook.com/people/Bala-Sri-Thandayuthapani/pfbid02ZZZTwGcBAk2KnomzPdC7Eo6Wh1fuuHG8puLSB4XhxJ9nrVqhQsLSS2Ze72LHTUqZl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
          >
            <FaFacebook className="text-2xl" />
          </a>

          <a
            href="https://www.youtube.com/@balasrithandayuthapani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
          >
            <FaYoutube className="text-2xl" />
          </a>

          <a
            href="mailto:balasrithandayuthapanichit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-800 hover:scale-110 transition transform duration-300 ease-in-out"
          >
            <SiGmail className="text-2xl" />
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
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
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
          <div className="text-base flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
            {["Home", "About", "Chits", "Chit Group", "Contact Us"].map(
              (item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="w-24 h-12 font-bold text-white bg-violet-600 flex items-center justify-center rounded-lg shadow-md transition-transform transform hover:translate-y-[-10px] hover:scale-90 duration-300 text-sm text-center"
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
