import React from 'react';
import mypic from '../imgs/2.jpg';
import { FaDog } from "react-icons/fa";

function App() {
  return (
    <div className="bg-[#EBE4F2] min-h-screen flex flex-col">
      <header className="bg-[#6373B7] py-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
          <img src={mypic} alt="avatar" className="w-12 h-12 rounded-full" />
            <h1 className="ml-4 text-2xl font-bold">Animalover</h1>
            <FaDog className="mx-2 size-6"/>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:underline text-white">Home</a>
            <a href="#" className="hover:underline text-white">Pet</a>
            <a href="#" className="hover:underline text-white">Contact Us</a>
            <a href="#" className="hover:underline text-white">Login</a>
          </nav>
        </div>
      </header>
      <div className="container mx-auto p-4 flex">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
          <img src={mypic} alt="cat" className="w-full h-48 rounded-lg object-cover" />
          <p className="text-center mt-2 text-gray-600">ชื่อเล่นของฉัน</p>
        </div>
        <div className="w-3/4 p-4 bg-white rounded-lg shadow-md flex flex-wrap justify-around gap-4">
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
            <img src={mypic} alt="cat" className="w-full h-full object-cover" />
          </div>
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
            <img src={mypic} alt="cat" className="w- full h-full object-cover" />
          </div>
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
            <img src={mypic} alt="cat" className="w-full h-full object-cover" />
          </div>
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md">
            <img src={mypic} alt="cat" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;