import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website with Admin Dashboard",
      description: "Full-stack portfolio with a secure admin dashboard for complete CRUD management of projects, skills, and tools. Features image uploads via Cloudinary, JWT authentication, and HTTP-only cookies for session security.",
      tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js"],
      github: "https://github.com/iamdwaseem/portfolio_Updated",
      image: "/projects/portfolio.png",
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "Eventify – Event Discovery & Ticketing Platform",
      description: "Full-stack event discovery and ticket booking platform with Supabase SSR authentication and role-based access control. PayPal Checkout integration for secure ticket payments and an admin dashboard for event management.",
      tech: ["Next.js 16", "TypeScript", "Supabase", "PayPal"],
      github: "https://github.com/iamdwaseem/EventApp",
      image: "/projects/eventify.png",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "NextStep – AI-Powered Career Guidance Platform",
      description: "Aptitude-based career guidance web application offering dynamic career, course, and college recommendations using Supabase. Features a multilingual AI assistant and interactive explorers with filters.",
      tech: ["React", "TypeScript", "Vite", "Supabase"],
      github: "https://github.com/iamdwaseem/CareerStep",
      image: "/projects/nextstep.png",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Fake News Detection System",
      description: "Machine learning system to classify news as real or fake using NLP preprocessing with TF-IDF, tokenization, and stop-word removal. Supervised models trained with Scikit-learn for real-time inference.",
      tech: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
      github: "https://github.com/iamdwaseem/FakeNewsDetection",
      image: "/projects/fakenews.png",
      color: "from-red-500 to-red-700"
    },
     {
      title: "Payment Wallet System (Paytm Clone)",
      description: "Peer-to-peer digital wallet system enabling secure money transfers. Features JWT-based authentication, protected APIs, and MongoDB schemas for users, balances, and transactions.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      github: "https://github.com/iamdwaseem/paytm-clone",
      image: "/projects/paytm.png",
      color: "from-blue-500 to-blue-700"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work and contributions</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} 
                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    <span>Code</span>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;