// components/Skills.tsx

import React from 'react';
import { FaPython, FaJs, FaReact, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiLlvm, SiSqlite } from 'react-icons/si';
import { VscDebug } from 'react-icons/vsc';

interface Skill {
  name: string;
  icon: JSX.Element;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', icon: <FaPython />, category: 'Languages' },
  { name: 'C++', icon: <SiCplusplus />, category: 'Languages' },
  { name: 'JavaScript', icon: <FaJs />, category: 'Languages' },
  { name: 'SQL', icon: <SiSqlite />, category: 'Languages' },
  { name: 'React.js', icon: <FaReact />, category: 'Frameworks' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frameworks' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frameworks' },
  { name: 'LLVM', icon: <SiLlvm />, category: 'Systems & Tools' },
  { name: 'Redis', icon: <SiRedis />, category: 'Systems & Tools' },
  { name: 'Git', icon: <FaGitAlt />, category: 'Systems & Tools' },
  { name: 'Docker', icon: <FaDocker />, category: 'Systems & Tools' },
  { name: 'Valgrind', icon: <VscDebug />, category: 'Systems & Tools' },
];

const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  // Order categories
  const orderedCategories = ['Languages', 'Frameworks', 'Systems & Tools'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {orderedCategories.map((category) => {
        // Only render categories that have skills
        const categorySkills = skillsByCategory[category] || [];
        if (categorySkills.length === 0) return null;
        
        return (
          <div key={category} className="mb-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-1.5">
                  <span className="text-lg text-black dark:text-white">{skill.icon}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
