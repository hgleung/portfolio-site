interface ExperienceTab {
  label: string;
  content: JSX.Element;
  url: string;
}

export const experienceTabs: ExperienceTab[] = [
  { 
    label: 'Litepoint', 
    content: (
      <div>
        <p className="font-bold">LitePoint</p>
        <p className="italic text-sm">Software QA Intern</p>
        <p className="italic text-sm">Jun-Sep 2023</p>
        <p>• Developed a user-friendly GUI tool to display regression tester values, enhancing data visualization and decision-making.</p>
        <p>• Implemented Apache Cassandra to optimize storage and retrieval of regression tester data, maximizing data
        reliability and reducing query response time by over 96%.</p>
        <p>• Designed and created an intuitive and responsive GUI using Tkinter, improving user interaction and reducing the
        learning curve for the team.</p>
        <p>• Integrated Matplotlib for data visualization, enabling the creation of insightful charts and graphs to enhance data
        analysis.</p>
        <p>• Significantly improved team efficiency by deploying the tool, facilitating quicker decision-making and higher-quality
        regression testing outcomes.</p>
      </div>
    ), 
    url: "www.litepoint.com"
  },
  { 
    label: 'Education', 
    content: (
      <div>
        <p className="font-bold">University of California, Irvine</p>
        <p className="text-sm">Bachelor of Science in Computer Science</p>
        <p className="italic text-sm">Specialization: Artificial Intelligence and Machine Learning</p>
        <p className="italic text-sm">Sep 2021 - June 2025</p>
        <p className="pt-1">Major GPA: 3.76</p>
        <p className="font-medium pt-3">Relevant Coursework:</p>
        <div className="pl-4">
          {/* AI and Machine Learning */}
          <p className="font-medium text-sm pt-2">Artificial Intelligence & Machine Learning</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Artificial Intelligence</li>
            <li>Machine Learning & Data Mining</li>
            <li>Neural Networks and Deep Learning</li>
          </ul>
          
          {/* Systems and Architecture */}
          <p className="font-medium text-sm pt-2">Systems & Architecture</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Computer Organization and Principles of System Design</li>
            <li>Operating Systems</li>
            <li>Computer & Communication Networks</li>
          </ul>

          {/* Core Computer Science */}
          <p className="font-medium text-sm pt-2">Core Computer Science</p>
          <ul className="list-disc pl-5 text-sm">
            <li>Data Structures and Algorithms</li>
            <li>Database Management Systems</li>
            <li>Information Retrieval</li>
            <li>Applications of Probability in Computer Science</li>
          </ul>
        </div>
      </div>
    ), 
    url: "uci.edu"
  },
];
