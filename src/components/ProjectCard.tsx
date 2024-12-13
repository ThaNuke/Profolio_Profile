import React from "react";
import mypic1 from "../imgs/8.png";
import mypic2 from "../imgs/5.jpg";
import mypic3 from "../imgs/3.png";
import mypic4 from "../imgs/9.png";

const projects = [
  {
    title: "Website Hotel Management (Rc-Hotel)",
    description:
      "Developed Rc-Hotel, a web-based hotel management system, designed to simplify hotel operations, enhance booking management, and improve customer service efficiency.",
    image: mypic1,
  },
  {
    title: "Robot Arm Axis Control",
    description:
      "Designed a robotic arm axis control system with web-based functionality, enabling real-time monitoring and management.",
    image: mypic2,
  },
  {
    title: "Web-App Animalover (pet)",
    description:
      "Developed a web application dedicated to pet care, offering tools and resources to help pet owners manage their pets’ needs effectively.",
    image: mypic3,
  },

  {
    title: "Web-TravelWeekend",
    description:
    "Developed Travel-Web (TravelWeekend), a web application designed to provide travel-related content and streaming features, offering users a seamless and responsive experience.",
    image: mypic4,
  },
];


const ProjectCard = () => {
  return (
    <div className="py-16 px-8 sm:px-16 lg:px-28 bg-gray-900 slide-in-up">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-blue-400">
        Browse My Recent Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-700 group transform hover:scale-105 transition duration-500"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
