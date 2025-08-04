import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Database, Cloud, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Code,
      title: 'Python Expertise',
      description: 'Django, Flask, FastAPI for robust backend solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'AWS, Azure deployment and scalable infrastructure'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'ETL pipelines, analytics, and business intelligence'
    },
    {
      icon: Zap,
      title: 'Fintech Focus',
      description: 'Payment systems, financial APIs, and compliance'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Okoth Arnold</span>
              <span className="block text-blue-600 dark:text-blue-400">
                Python + Backend Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building fintech backends, data pipelines, and scalable cloud solutions for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <a
                href="/Okoth_Arnold_Python_Developer.pdf"
                download
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced in building secure, high-performance applications with Python frameworks, 
              cloud infrastructure, and modern DevOps practices. Ready to contribute to your remote team 
              with proven expertise in fintech and data-driven solutions.
            </p>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized skills in high-demand technologies for modern development teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how I can contribute to your team's success with proven Python and cloud expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}