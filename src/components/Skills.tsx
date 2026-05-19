import React from 'react';

interface SkillCategory {
  name: string;
  items: string[];
}

const categories: SkillCategory[] = [
  { name: 'Languages', items: ['Python', 'TypeScript', 'Go', 'C++', 'Java', 'SQL', 'Rust'] },
  { name: 'AWS / Cloud', items: ['CDK', 'Lambda', 'Step Functions', 'SageMaker', 'Glue', 'Athena', 'SQS', 'S3', 'CloudWatch', 'IAM'] },
  { name: 'ML / Data', items: ['PyTorch', 'Hugging Face Transformers', 'NumPy', 'pandas', 'scikit-learn', 'Keras'] },
  { name: 'Web & Frameworks', items: ['React', 'Next.js', 'Node.js', 'GraphQL', 'REST'] },
  { name: 'Systems & Tools', items: ['Docker', 'Kubernetes', 'Linux', 'Git', 'Redis', 'MySQL', 'Bazel', 'CMake', 'GDB', 'Valgrind'] },
  { name: 'Spoken', items: ['English', 'Cantonese', 'Mandarin'] },
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
