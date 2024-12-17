import React from "react";

const experiences = [
  {
    date: "2020 - Present",
    title: "Bachelor's Degree in Computer Engineering",
    organization: "King Mongkut's University of Technology Thonburi",
    details: [
        "Specialized in web development and software engineering.",
        "Completed projects on building dynamic web applications and API.",
        "Gained hands-on experience with front-end frameworks such as React and Angular.",
        "Developed skills in database design and integration with SQL and NoSQL systems."
    ],
  },
  
  {
    date: "2016 - 2020",
    title: "High School Science-Math",
    organization: "Debsirin Samut Prakan School",
    details: [
      "Graduated with honors in the science and mathematics program.",
      "Member of the robotics club and participated in national competitions.",
      "Actively involved in volunteering and community service projects."
    ],
  },
];


function Timeline() {
  return (
    <div className="bg-gray-900 min-h-screen py-16 flex justify-center items-center ">
      <div className="container px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 shimmer-effect">
  <span>E</span><span>D</span><span>U</span><span>C</span><span>A</span><span>T</span><span>I</span><span>O</span><span>N</span>
</h2>

        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-7 top-0 h-full w-2 bg-blue-500"></div>

          {/* Timeline Items */}
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start mb-16 pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-2 flex items-center justify-center w-8 h-8 bg-white border-4 border-blue-500 rounded-full transition-transform duration-300 group-hover:scale-110 "></div>

              {/* Timeline Content */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-4xl text-white transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-2xl ">
                <h3 className="text-lg font-bold text-blue-600">{item.date}</h3>
                <h4 className="text-white text-xl font-bold mt-2">{item.title}</h4>
                <p className="text-red-400 mt-1">{item.organization}</p>
                <ul className="mt-4 space-y-2 list-disc pl-6">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-white">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
