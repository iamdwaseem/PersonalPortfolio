import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mohammed
            </span>
            <br />
            <span className="text-gray-700">Waseemuddin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Computer Science Engineering Student | Full Stack Developer | AI Enthusiast
          </p>
          
          <div className="flex items-center justify-center text-gray-500 mb-8">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Hyderabad, India</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact" 
               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
              Get In Touch
            </a>
            <a href="#projects" 
               className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors">
              View My Work
            </a>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;