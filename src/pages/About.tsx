import React from 'react';
import { MapPin, Calendar, Award, Users } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: 'Cloud Platforms',
      items: ['AWS (EC2, Lambda, S3, RDS)', 'Azure (App Service, Functions)', 'Google Cloud Platform'],
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
    },
    {
      category: 'Python Frameworks',
      items: ['Django', 'Flask', 'FastAPI', 'Celery', 'SQLAlchemy'],
      color: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
    },
    {
      category: 'Data Tools',
      items: ['Apache Spark', 'Pandas', 'Power BI', 'PostgreSQL', 'Redis'],
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions'],
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300'
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: '5+ Years Experience',
      description: 'Python development and cloud architecture'
    },
    {
      icon: Users,
      title: 'Remote Expertise',
      description: 'Successfully delivered projects across global teams'
    },
    {
      icon: Calendar,
      title: 'Fintech Focus',
      description: 'Specialized in financial technology solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate Python developer with expertise in cloud solutions and fintech applications
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Bio
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I'm a results-driven Python developer with over 5 years of experience building scalable, 
                secure applications for the financial technology sector. My expertise spans from backend 
                development with Django and Flask to cloud infrastructure design on AWS and Azure.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Throughout my career, I've successfully delivered mission-critical systems including 
                payment processing platforms, real-time trading systems, and comprehensive data analytics 
                pipelines. I'm particularly passionate about writing clean, maintainable code and 
                implementing DevOps best practices.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As a remote-first developer based in UTC+3, I've collaborated effectively with international 
                teams, maintaining high code quality standards and meeting ambitious project deadlines. 
                I'm actively seeking opportunities to contribute to innovative fintech solutions with 
                forward-thinking organizations.
              </p>
            </div>
            
            <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="font-medium">Remote-ready • UTC+3 timezone</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <highlight.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${skillGroup.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}