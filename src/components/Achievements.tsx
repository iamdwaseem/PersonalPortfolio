import React from 'react';
import { Trophy, Calendar, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Hackman V7",
      year: "2024",
      description: "Participated in one of the premier hackathons, showcasing innovative solutions and collaborative problem-solving skills.",
      icon: Trophy
    },
    {
      title: "Ambition Hackathon",
      year: "2024", 
      description: "Demonstrated technical expertise and creativity in a competitive hackathon environment.",
      icon: Calendar
    },
    {
      title: "Tech Community Events",
      year: "Ongoing",
      description: "Active participant in multiple tech events and hackathons, continuously learning and networking.",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-xl text-gray-600">Recognition and participation in tech events</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} 
                 className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-blue-600 font-medium mb-4">{achievement.year}</p>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;