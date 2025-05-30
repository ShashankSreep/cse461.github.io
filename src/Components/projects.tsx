import Navbar from './navbar';
import { ProjectCard } from './Cards/projectCard';
import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiAmazondynamodb,
  SiAmazon,
  SiNodedotjs,
  SiPython,
  SiAmazoncognito,
  SiHtml5,
  SiLatex,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa6';
import { TbSql, TbBrandCpp } from 'react-icons/tb';
import { AiOutlineOpenAI } from 'react-icons/ai';

export default function Projects() {
  const techStack = [
    { name: 'TypeScript', icon: <SiTypescript size={28} className="text-blue-500" /> },
    { name: 'React', icon: <SiReact size={28} className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} className="text-teal-400" /> },
    { name: 'Firebase', icon: <SiFirebase size={28} className="text-yellow-400" /> },
    { name: 'AWS Lambda', icon: <SiAmazon size={28} className="text-orange-400" /> },
    { name: 'DynamoDB', icon: <SiAmazondynamodb size={28} className="text-blue-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={28} className="text-green-500" /> },
    { name: 'Python', icon: <SiPython size={28} className="text-yellow-500" /> },
    { name: 'Amazon Cognito', icon: <SiAmazoncognito size={28} className="text-purple-500" /> },
    { name: 'HTML5', icon: <SiHtml5 size={28} className="text-orange-500" /> },
    { name: 'Java', icon: <FaJava size={28} className="text-red-500" /> },
    { name: 'SQL', icon: <TbSql size={28} className="text-blue-600" /> },
    { name: 'LaTeX', icon: <SiLatex size={28} className="text-blue-700" /> },
    { name: 'C++', icon: <TbBrandCpp size={28} className="text-blue-800" /> },
    { name: 'OpenAI', icon: <AiOutlineOpenAI size={28} className="text-blue-900" /> },
  ];

  const projects = [
    {
      Name: '1Pass',
      Description: 'A password manager that uses AES encryption to store passwords securely',
      Link: 'https://github.com/ShashankSreep/PasswordManager',
    },
    {
      Name: 'Statsify',
      Description: 'Application that analyzes Spotify listening data and provides a "rewind" like feature',
      Link: 'https://github.com/ShashankSreep/statsify',
    },
    {
      Name: 'Verbatim',
      Description: 'Application that allows users to learn and practice the English Language through speech and writing practice',
      Link: 'https://github.com/ShashankSreep/EnglishPractice',
    },
    {
      Name: 'My Favorite Albums',
      Description: 'Technical documentation portfolio providing comprehensive details about the application',
      Link: 'https://github.com/ShashankSreep',
    },
    {
      Name: 'Racial Bias in Named Entity Recognition',
      Description: 'Research project analyzing racial bias in Named Entity Recognition',
      Link: 'https://github.com/LucilleN/Racial-Bias-in-Legal-NER',
    },
  ];

  const currentProjects = [
    {
      Name: 'F1-Live',
      Description: 'Application that provides real-time race updates and race conditions for Formula 1',
      Link: 'https://github.com/ShashankSreep',
    },
    {
      Name: 'Anki But Better',
      Description: 'Flash card application with built-in spaced repitition and modern UI',
      Link: 'https://github.com/ShashankSreep',
    },
    {
      Name: 'Daily Journal',
      Description: 'Application that allows users to track daily thoughts all in one place',
      Link: 'https://github.com/ShashankSreep',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Navbar />

      <div className="flex flex-grow px-6 py-10 gap-8 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/4 text-white flex flex-col items-center"
        >
          <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-1">
                {tech.icon}
                <span className="text-xs text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="w-full md:w-3/4 flex flex-col gap-10">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl text-white mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  Name={project.Name}
                  Description={project.Description}
                  Link={project.Link}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl text-white mb-6">Current Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  Name={project.Name}
                  Description={project.Description}
                  Link={project.Link}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
