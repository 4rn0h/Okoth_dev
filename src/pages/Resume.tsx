import React from 'react';
import { Download, FileText, Star } from 'lucide-react';

export default function Resume() {
  const atsKeywords = [
    'Python Developer', 'Django', 'Flask', 'FastAPI', 'AWS', 'Azure', 'Docker', 'Kubernetes',
    'CI/CD', 'Microservices', 'REST API', 'GraphQL', 'PostgreSQL', 'Redis', 'Apache Spark',
    'Machine Learning', 'Data Engineering', 'Fintech', 'Payment Systems', 'DevOps',
    'Terraform', 'Linux', 'Git', 'Agile', 'Scrum', 'Remote Work', 'Financial Technology',
    'Trading Systems', 'Data Pipelines', 'Cloud Architecture', 'Scalable Systems'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Python + Cloud Developer • 5+ Years Experience • Remote-Ready
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/Okoth_Arnold_Python_Developer.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </a>
            
            <a
              href="/Okoth_Arnold_Python_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Full Screen
            </a>
          </div>
        </div>

        {/* Key Qualifications */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Key Qualifications
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-400">5+ years Python (Django, Flask, FastAPI)</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Cloud Platforms</h3>
                <p className="text-gray-600 dark:text-gray-400">AWS, Azure deployment & architecture</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Fintech Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">Payment systems, trading platforms</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Data Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400">ETL pipelines, Apache Spark, analytics</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">DevOps & CI/CD</h3>
                <p className="text-gray-600 dark:text-gray-400">Docker, Kubernetes, automation</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Remote Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">UTC+3 • Global team collaboration</p>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Resume Preview
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Scroll to view full resume or download PDF
            </p>
          </div>
          
          <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700">
            <iframe
              src="/Okoth_Arnold_Python_Developer.pdf"
              className="w-full h-full"
              title="Okoth Arnold Resume"
            />
          </div>
        </div>

        {/* ATS Keywords (Hidden) */}
        <div className="sr-only" aria-hidden="true">
          <h2>ATS Keywords</h2>
          <p>{atsKeywords.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}