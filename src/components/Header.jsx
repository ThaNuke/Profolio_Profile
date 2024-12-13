import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import mypic1 from "../imgs/7.jpg";
import mypic2 from "../imgs/6.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState(""); // เพิ่มสถานะสำหรับคลาส animation

  // เมื่อคอมโพเนนต์ถูกเรนเดอร์ จะทำให้ animation ถูกเพิ่ม
  useEffect(() => {
    setAnimationClass("slide-in-up");
  }, []); // การใช้ [] หมายถึงให้ทำครั้งเดียวเมื่อคอมโพเนนต์ถูกโหลด

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      {/* Header Section */}
      <header className="py-6 bg-gray-900 shadow-md fixed w-full z-10 top-0 left-0">
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1 className="text-3xl font-bold text-blue-400 transform hover:scale-105 transition-all duration-300 cursor-pointer">Welcome...</h1>
          
          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden text-blue-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? "block bg-gray-800 p-6 rounded-lg absolute top-16 right-6 w-48 shadow-lg" : "hidden"
            } lg:flex lg:space-x-6 lg:bg-transparent lg:static lg:p-0 lg:shadow-none space-y-4 lg:space-y-0 mt-4 lg:mt-0 lg:items-center`}
          >
            {["About", "Education", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="block text-gray-300 hover:text-purple-400 transition duration-300 transform hover:scale-105 cursor-pointer lg:inline-block"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto py-6 px-6 flex flex-col items-center justify-center min-h-[80vh] pt-24">
        {/* Profile Card */}
        <div className={`flex flex-col lg:flex-row items-center justify-between p-12 rounded-lg w-full max-w-6xl gap-8 transform hover:scale-105 transition duration-500 ${animationClass}`}>
          <div className="flex flex-col items-start text-center lg:text-left">
            <h2 className="text-xl font-semibold text-blue-400">HELLO, I'M</h2>
            <h1 className="text-5xl font-extrabold text-white mt-2">MR. Tharathon Progodkla</h1>
            <p className="mt-4 text-lg text-gray-300">Interest in Frontend or Full Stack Development</p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-blue-400 text-black px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-110">
                Download CV
              </button>
              <button className="border border-gray-600 text-black px-8 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-110">
                Contact Info
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={mypic1}
              alt="Profile"
              className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-gray-800"
            />
            <div className="absolute inset-0 w-72 h-72 rounded-full border-4 border-blue-500 blur-md"></div>
          </div>
        </div>

        {/* About Me Section */}
        <div id="about" className="mt-16 w-full max-w-6xl">
          <h3 className="text-4xl font-extrabold text-center text-blue-400 mb-8">ABOUT ME</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col bg-gray-800 shadow-lg p-8 rounded-lg transform hover:scale-105 transition duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-white rounded-full flex items-center justify-center">
                  🎓
                </div>
                <h4 className="ml-4 text-2xl font-bold text-blue-400">Current Education</h4>
              </div>
              <p className="text-lg font-bold text-gray-300">Bachelor of Engineering</p>
              <p className="text-lg font-bold text-gray-300">Computer Engineering, Year 3</p>
              <p className="text-lg font-bold text-gray-300">King Mongkut's University of Technology Thonburi</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={mypic2}
                alt="Education"
                className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-gray-800 transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* New About Me Box */}
          <div className="mt-8 bg-gray-800 shadow-lg p-8 rounded-lg transform hover:scale-105 transition duration-500">
            <h4 className="text-2xl font-bold text-blue-400 mb-4">Hello!</h4>
            <p className="text-lg text-gray-300">
              Hi, I'm Nuke, a tech enthusiast with a knack for crafting immersive and interactive web experiences. My passion lies at the crossroads of innovation and design, where I transform ideas into engaging digital realities. Whether it’s a sleek user interface or a robust backend, I thrive on bringing creative concepts to life in the ever-evolving web landscape.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">Frontend Development</span>
              <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">Backend Development</span>
              <span className="bg-yellow-700 text-white px-4 py-2 rounded-full text-sm font-medium">UI/UX Design</span>
              <span className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium">Software</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Header;
