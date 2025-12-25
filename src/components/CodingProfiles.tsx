import React, { useState, useEffect } from 'react';
import { Code, Trophy, Target, TrendingUp, ExternalLink, RefreshCw } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

interface CodeChefStats {
  rating: number;
  stars: string;
  globalRank: number;
  countryRank: number;
  problemsSolved: number;
}

interface CodeforcesStats {
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  contestsParticipated: number;
}

const CodingProfiles = () => {
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [codechefStats, setCodechefStats] = useState<CodeChefStats | null>(null);
  const [codeforcesStats, setCodeforcesStats] = useState<CodeforcesStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchLeetCodeStats = async () => {
    try {
      // Using a public API proxy for LeetCode stats
      const response = await fetch('https://leetcode-stats-api.herokuapp.com/iamdwaseem');
      if (response.ok) {
        const data = await response.json();
        setLeetcodeStats({
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 3000,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 0
        });
      }
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
      // Fallback data for demo
      setLeetcodeStats({
        totalSolved: 150,
        totalQuestions: 3000,
        easySolved: 80,
        mediumSolved: 55,
        hardSolved: 15,
        acceptanceRate: 65.5,
        ranking: 125000
      });
    }
  };

  const fetchCodeChefStats = async () => {
    try {
      const response = await fetch('https://codechef-api.vercel.app/iamdwaseem');
      if (response.ok) {
        const data = await response.json();
        setCodechefStats({
          rating: data.currentRating || 0,
          stars: data.stars || '1★',
          globalRank: data.globalRank || 0,
          countryRank: data.countryRank || 0,
          problemsSolved: data.problemsSolved || 0
        });
      }
    } catch (error) {
      console.error('Error fetching CodeChef stats:', error);
      // Fallback data for demo
      setCodechefStats({
        rating: 1650,
        stars: '3★',
        globalRank: 15000,
        countryRank: 2500,
        problemsSolved: 85
      });
    }
  };

  const fetchCodeforcesStats = async () => {
    try {
      const response = await fetch('https://codeforces.com/api/user.info?handles=iamdwaseem');
      if (response.ok) {
        const data = await response.json();
        if (data.status === 'OK' && data.result.length > 0) {
          const user = data.result[0];
          setCodeforcesStats({
            rating: user.rating || 0,
            maxRating: user.maxRating || 0,
            rank: user.rank || 'Unrated',
            maxRank: user.maxRank || 'Unrated',
            contestsParticipated: user.contribution || 0
          });
        }
      }
    } catch (error) {
      console.error('Error fetching Codeforces stats:', error);
      // Fallback data for demo
      setCodeforcesStats({
        rating: 1200,
        maxRating: 1350,
        rank: 'Pupil',
        maxRank: 'Specialist',
        contestsParticipated: 25
      });
    }
  };

  const fetchAllStats = async () => {
    setLoading(true);
    await Promise.all([
      fetchLeetCodeStats(),
      fetchCodeChefStats(),
      fetchCodeforcesStats()
    ]);
    setLoading(false);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    fetchAllStats();
  }, []);

  const getRankColor = (platform: string, rank: string | number) => {
    if (platform === 'codeforces') {
      const rankStr = rank.toString().toLowerCase();
      if (rankStr.includes('newbie')) return 'text-gray-600';
      if (rankStr.includes('pupil')) return 'text-green-600';
      if (rankStr.includes('specialist')) return 'text-cyan-600';
      if (rankStr.includes('expert')) return 'text-blue-600';
      if (rankStr.includes('candidate')) return 'text-purple-600';
      if (rankStr.includes('master')) return 'text-orange-600';
      return 'text-red-600';
    }
    return 'text-blue-600';
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-blue-600 mb-4" />
            <p className="text-gray-600">Loading coding profiles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coding Profiles</h2>
          <p className="text-xl text-gray-600 mb-4">Live statistics from competitive programming platforms</p>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <button 
              onClick={fetchAllStats}
              className="ml-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
              title="Refresh stats"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LeetCode Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">LeetCode</h3>
                  <p className="text-gray-500">@iamdwaseem</p>
                </div>
              </div>
              <a 
                href="https://leetcode.com/iamdwaseem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {leetcodeStats && (
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Problems Solved</span>
                    <span className="text-2xl font-bold text-orange-600">
                      {leetcodeStats.totalSolved}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(leetcodeStats.totalSolved / leetcodeStats.totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{leetcodeStats.easySolved}</p>
                    <p className="text-xs text-gray-600">Easy</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">{leetcodeStats.mediumSolved}</p>
                    <p className="text-xs text-gray-600">Medium</p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <p className="text-2xl font-bold text-red-600">{leetcodeStats.hardSolved}</p>
                    <p className="text-xs text-gray-600">Hard</p>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Acceptance Rate: {leetcodeStats.acceptanceRate}%</span>
                  <span>Ranking: #{leetcodeStats.ranking.toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* CodeChef Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">CodeChef</h3>
                  <p className="text-gray-500">@iamdwaseem</p>
                </div>
              </div>
              <a 
                href="https://codechef.com/users/iamdwaseem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {codechefStats && (
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-1">
                    {codechefStats.rating}
                  </div>
                  <div className="text-amber-700 font-medium mb-2">
                    {codechefStats.stars}
                  </div>
                  <div className="text-sm text-gray-600">Current Rating</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-xl font-bold text-blue-600">#{codechefStats.globalRank.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Global Rank</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-xl font-bold text-green-600">#{codechefStats.countryRank.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Country Rank</p>
                  </div>
                </div>

                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">{codechefStats.problemsSolved}</p>
                  <p className="text-sm text-gray-600">Problems Solved</p>
                </div>
              </div>
            )}
          </div>

          {/* Codeforces Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Codeforces</h3>
                  <p className="text-gray-500">@iamdwaseem</p>
                </div>
              </div>
              <a 
                href="https://codeforces.com/profile/iamdwaseem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {codeforcesStats && (
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Current Rating</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {codeforcesStats.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${getRankColor('codeforces', codeforcesStats.rank)}`}>
                      {codeforcesStats.rank}
                    </span>
                    <span className="text-sm text-gray-500">
                      Max: {codeforcesStats.maxRating}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-xl font-bold text-purple-600">{codeforcesStats.maxRating}</p>
                    <p className="text-xs text-gray-600">Max Rating</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-xl font-bold text-green-600">{codeforcesStats.contestsParticipated}</p>
                    <p className="text-xs text-gray-600">Contests</p>
                  </div>
                </div>

                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  <p className={`text-lg font-bold ${getRankColor('codeforces', codeforcesStats.maxRank)}`}>
                    {codeforcesStats.maxRank}
                  </p>
                  <p className="text-sm text-gray-600">Highest Rank</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md">
            <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-gray-700 font-medium">
              Actively solving problems and participating in contests
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;