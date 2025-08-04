import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'FinPay Payment Gateway',
      description: 'Secure payment processing system handling $2M+ monthly transactions with Django and PostgreSQL.',
      tech: ['Python', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
      category: 'fintech',
      result: '99.9% uptime, 40% faster transaction processing',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/okoth-arnold/finpay-gateway',
      demo: 'https://finpay-demo.vercel.app'
    },
    {
      id: 2,
      title: 'Sales Forecasting ML Pipeline',
      description: 'Real-time sales prediction system using Python ML libraries and Apache Spark for data processing.',
      tech: ['Python', 'Scikit-learn', 'Apache Spark', 'Docker', 'Azure'],
      category: 'data',
      result: '55% accuracy improvement in sales forecasting',
      image: 'https://images.pexels.com/photos/7947662/pexels-photo-7947662.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/okoth-arnold/sales-ml-pipeline',
      demo: 'https://sales-forecast-demo.vercel.app'
    },
    {
      id: 3,
      title: 'Multi-Cloud Infrastructure',
      description: 'Automated deployment pipeline supporting both AWS and Azure with Terraform and Kubernetes.',
      tech: ['Terraform', 'Kubernetes', 'Docker', 'AWS', 'Azure'],
      category: 'cloud',
      result: '70% reduction in deployment time',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/okoth-arnold/multi-cloud-infra',
      demo: 'https://cloud-dashboard-demo.vercel.app'
    },
    {
      id: 4,
      title: 'Trading Analytics Dashboard',
      description: 'Real-time trading data visualization with Power BI integration and Python backend APIs.',
      tech: ['Python', 'FastAPI', 'Power BI', 'WebSockets', 'PostgreSQL'],
      category: 'fintech',
      result: 'Real-time insights for 500+ active traders',
      image: 'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/okoth-arnold/trading-dashboard',
      demo: 'https://trading-analytics-demo.vercel.app'
    },
    {
      id: 5,
      title: 'ETL Data Pipeline',
      description: 'Automated data processing pipeline handling 1TB+ daily with error monitoring and recovery.',
      tech: ['Python', 'Apache Airflow', 'Pandas', 'AWS S3', 'Lambda'],
      category: 'data',
      result: '90% reduction in manual data processing',
      image: 'https://images.pexels.com/photos/7947647/pexels-photo-7947647.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/okoth-arnold/etl-pipeline',
      demo: 'https://etl-monitor-demo.vercel.app'
    },
    {
      id: 6,
      title: 'Serverless API Gateway',
      description: 'Scalable microservices architecture using AWS Lambda and API Gateway with automatic scaling.',
      tech: ['Python', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'CloudFormation'],
      category: 'cloud',
      result: '95% cost reduction in infrastructure',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/okoth-arnold/serverless-api',
      demo: 'https://serverless-api-demo.vercel.app'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'data', label: 'Data Engineering' },
    { id: 'cloud', label: 'Cloud Architecture' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of production-ready applications demonstrating expertise in Python development, 
            cloud architecture, and fintech solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    {project.result}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}