// components/Skills.tsx

import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import styles from './skills.module.css';

const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },

];

const Skills: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.icon}>{skill.icon}</div>
            {/* <span>{skill.name}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
