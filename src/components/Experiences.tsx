import React from "react";

const experiences = [
  {
    date: "2021 - 21 MARCH 2022",
    title: "CODERCAMP - 6 MONTH PROGRAM",
    organization: "STEM CAREER ACADEMIES",
    details: [
      "CS50 Introduction to Computer Science",
      "Phase 1: Algorithms and Data Structures, Java Programming",
      "Phase 2: Database, Event-Driven Programming, System Analysis and Design",
    ],
  },
  {
    date: "4 JUNE 2022 - 1 JULY 2022",
    title: "JUNIOR PROGRAMMER INTERN",
    organization: "TIPAWAN CORPORATION CO., LTD.",
    details: ["Used Golang for Website Development"],
  },
  {
    date: "2024",
    title: "MAKATHON NEXT GEN",
    organization: "CP AXTRA MAKRO",
    details: ["Reached Top 15 Teams in the Ideation Round"],
  },
];

function Timeline() {
  return (
    <div className="bg-gray-900 min-h-screen py-23 flex justify-center items-center">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">EXPERIENCES</h2>
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
              <div className="absolute left-4 top-2 flex items-center justify-center w-8 h-8 bg-white border-4 border-blue-500 rounded-full transition-transform duration-300 group-hover:scale-110"></div>

              {/* Timeline Content */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-4xl text-white transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-2xl">
                <h3 className="text-lg font-bold text-blue-600">{item.date}</h3>
                <h4 className="text-white text-xl font-bold mt-2">{item.title}</h4>
                <p className="text-red-700 mt-1">{item.organization}</p>
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
