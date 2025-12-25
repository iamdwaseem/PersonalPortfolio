import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "VNR Vignana Jyothi Institute of Engineering and Technology",
      degree: "Bachelor of Engineering, Computer Science and Engineering",
      period: "2024–2027",
      cgpa: "8.56",
      status: "current"
    },
    {
      school: "VMR Pradeep Kumar Institute of Engineering and Technology",
      degree: "Diploma in Computer Science",
      period: "2021–2024",
      cgpa: "8.56",
      status: "completed"
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-center mb-12">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  edu.status === 'current' ? 'bg-blue-600' : 'bg-gray-400'
                } text-white z-10`}>
                  <GraduationCap className="w-8 h-8" />
                </div>
                
                <div className="ml-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{edu.degree}</p>
                  <div className="flex items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'current' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.cgpa}
                    </span>
                    {edu.status === 'current' && (
                      <span className="ml-3 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;