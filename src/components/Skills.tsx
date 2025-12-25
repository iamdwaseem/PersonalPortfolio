import React from 'react';
import { Code, Database, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Development & Frameworks",
      icon: Wrench,
      skills: ["HTML", "CSS", "Node.js", "Express.js", "Next.js", "React", "Bootstrap", "Tailwind"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Prisma", "Git/GitHub", "TurboRepo", "Docker", "Kubernetes"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Machine Learning & DevOps",
      icon: Cpu,
      skills: ["ML5", "YOLO", "Pandas", "NumPy", "Matplotlib", "CI/CD", "New Relic"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} 
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;