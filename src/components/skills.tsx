// components/Skills.tsx

import React from 'react';
import { FaPython, FaHtml5, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import styles from './skills.module.css';

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
];

const Skills: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.icon} style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
