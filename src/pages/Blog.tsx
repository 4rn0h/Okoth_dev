import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const upcomingPosts = [
    {
      title: 'Optimizing Financial Data Pipelines with Python',
      description: 'Best practices for building efficient ETL processes in fintech applications using Apache Spark and modern Python libraries.',
      category: 'Data Engineering',
      readTime: '8 min read',
      date: 'Coming Soon'
    },
    {
      title: 'Deploying Dockerized Apps on AWS',
      description: 'Complete guide to containerizing Python applications and deploying them on AWS using ECS and Fargate.',
      category: 'Cloud Architecture',
      readTime: '12 min read',
      date: 'Coming Soon'
    },
    {
      title: 'Building Secure Payment APIs with Django',
      description: 'Security considerations and implementation patterns for payment processing systems in Django applications.',
      category: 'Fintech',
      readTime: '10 min read',
      date: 'Coming Soon'
    },
    {
      title: 'Scaling Python Microservices with Kubernetes',
      description: 'Strategies for designing and scaling Python microservices architecture using Kubernetes and service mesh.',
      category: 'DevOps',
      readTime: '15 min read',
      date: 'Coming Soon'
    }
  ];

  const categories = ['All', 'Data Engineering', 'Cloud Architecture', 'Fintech', 'DevOps'];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Writings
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and best practices from real-world Python development and cloud architecture projects.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg">
            <BookOpen className="h-5 w-5 mr-2" />
            <span className="font-medium">Coming Soon - Blog launching with Next.js + MDX</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Upcoming Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be the first to know when I publish new articles about Python development, 
              cloud architecture, and fintech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled
              />
              <button
                disabled
                className="w-full sm:w-auto px-6 py-3 bg-white/20 text-white rounded-lg font-medium cursor-not-allowed"
              >
                Notify Me
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-2">
              Newsletter signup coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}