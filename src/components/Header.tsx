import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mohammed Waseemuddin
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/iamdwaseem" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/iamdwaseem" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:waseembolte@gmail.com"
               className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;