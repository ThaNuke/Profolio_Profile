import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPython, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

const SkillCard = ({ title, level, icon }) => {
  const renderLevelDots = (level) => {
    // สร้างจุดสีตามระดับ
    const maxLevel = 5;
    let dots = [];
    for (let i = 0; i < maxLevel; i++) {
      if (i < level) {
        dots.push(
          <span key={i} className="text-blue-500">●</span> // สีฟ้าสำหรับจุดที่เต็ม
        );
      } else {
        dots.push(
          <span key={i} className="text-gray-400">●</span> // สีเทาสำหรับจุดที่ยังว่าง
        );
      }
    }
    return dots;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-800 hover:shadow-xl hover:border-blue-500 transform hover:scale-105 transition-all duration-500">
      <div className="text-4xl text-blue-400 mb-2">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">Level {level}</p>
      <div className="text-xl text-gray-300 mb-2">
        {renderLevelDots(level)}  {/* แสดงจุดตามระดับ */}
      </div>
    </div>
  );
};

const SkillsAndExpertise = () => {
  const frontendSkills = [
    { title: 'HTML', level: 3, icon: <FaHtml5 /> },
    { title: 'CSS', level: 3, icon: <FaCss3Alt /> },
    { title: 'JavaScript', level: 3, icon: <FaJsSquare /> },
    { title: 'Bootstrap', level: 3, icon: <FaBootstrap /> },
    { title: 'Tailwind', level: 4, icon: <RiTailwindCssFill /> },
    { title: 'ReactJS', level: 4, icon: <FaReact /> },
  ];

  const backendSkills = [
    { title: 'Python', level: 3, icon: <FaPython /> },
    { title: 'Node.js', level: 2, icon: <FaNodeJs /> },
    { title: 'PHP', level: 2, icon: <FaPhp /> },
    { title: 'SQL', level: 2, icon: <FaDatabase /> },
  ];

  const ToolsTechnology = [
    { title: 'Git', level: 3, icon: <FaGitAlt /> },
    { title: 'Postman', level: 2, icon: <SiPostman /> },
    { title: 'Github', level: 2, icon: <FaGithub /> },
    { title: 'Vscode', level: 2, icon: <VscVscode /> },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
  <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">Skills & Expertise</h1>

  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-white mb-4 px-4 sm:px-10 lg:px-20">Frontend Development</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 sm:px-10 lg:px-20">
      {frontendSkills.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-white mb-4 px-4 sm:px-10 lg:px-20">Backend Development</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 sm:px-10 lg:px-20">
      {backendSkills.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-white mb-4 px-4 sm:px-10 lg:px-20 mt-6">Tools & Technologies</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4 sm:px-10 lg:px-20">
      {ToolsTechnology.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  </section>
</div>

  );
};

export default SkillsAndExpertise;
