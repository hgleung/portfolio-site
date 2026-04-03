import React from 'react';

interface SkillCategory {
  name: string;
  items: string[];
}

const categories: SkillCategory[] = [
  { name: 'Languages', items: ['Python', 'C++', 'JavaScript', 'SQL'] },
  { name: 'Frameworks', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { name: 'Systems & Tools', items: ['LLVM', 'Redis', 'Git', 'Docker', 'Valgrind'] },
];

const Skills: React.FC = () => {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-sm text-muted-foreground mb-2">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span
                key={item}
                className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
