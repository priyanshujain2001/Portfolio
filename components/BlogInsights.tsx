'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Brain, Code, TrendingUp, BookOpen } from 'lucide-react'

const BlogInsights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const blogPosts = [
    {
      title: "The Future of AI: Beyond the Hype",
      excerpt: "Exploring what's really possible with AI in 2024 and beyond. From practical applications to ethical considerations, let's separate fact from fiction.",
      category: "AI Strategy",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      icon: Brain,
      featured: true
    },
    {
      title: "Building Scalable ML Pipelines: Lessons from Production",
      excerpt: "Real-world insights from deploying ML models at scale. Common pitfalls, optimization strategies, and how to avoid the most expensive mistakes.",
      category: "Machine Learning",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      icon: Code,
      featured: false
    },
    {
      title: "Cost Optimization in Cloud AI: A Practical Guide",
      excerpt: "How I reduced cloud costs by 50% while improving performance. Practical tips and strategies that actually work in production environments.",
      category: "Cloud & Infrastructure",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: TrendingUp,
      featured: false
    }
  ]

  const insights = [
    {
      title: "AI Adoption Statistics",
      stat: "87%",
      description: "of companies see AI as a competitive advantage",
      trend: "+15% from last year"
    },
    {
      title: "ML Model Performance",
      stat: "92%",
      description: "average accuracy improvement in my projects",
      trend: "vs 78% industry average"
    },
    {
      title: "Cost Reduction",
      stat: "50%",
      description: "average cloud cost savings achieved",
      trend: "saving clients $2.5M+ annually"
    },
    {
      title: "Project Success Rate",
      stat: "100%",
      description: "of projects delivered on time and within budget",
      trend: "over 50+ projects"
    }
  ]

  return (
    <section id="insights" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Insights & Articles</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Sharing knowledge, insights, and lessons learned from building AI systems 
            in the real world. Because the best way to learn is by doing! 📚
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
          >
            <div className="grid lg:grid-cols-2">
              <div className={`${blogPosts[0].image} p-12 flex items-center justify-center`}>
                <div className="text-center text-white">
                  {React.createElement(blogPosts[0].icon, { className: "h-24 w-24 mx-auto mb-4 opacity-80" })}
                  <div className="text-sm font-medium opacity-90">Featured Article</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full border border-primary-500/20">
                    {blogPosts[0].category}
                  </span>
                  <span className="ml-4 text-sm text-gray-400">Featured</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg hover:bg-primary-500/20 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className={`${post.image} h-48 flex items-center justify-center`}>
                <div className="text-center text-white">
                  {React.createElement(post.icon, { className: "h-16 w-16 mx-auto mb-2 opacity-80" })}
                  <div className="text-sm font-medium opacity-90">{post.category}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {post.date}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insights Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Industry Insights & Impact
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-white/5 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  {insight.stat}
                </div>
                <div className="text-white font-semibold mb-2">
                  {insight.title}
                </div>
                <div className="text-gray-300 text-sm mb-2">
                  {insight.description}
                </div>
                <div className="text-green-400 text-xs font-medium">
                  {insight.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with AI Insights 📧
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights, tips, and industry trends delivered to your inbox. 
              No spam, just valuable content from someone who's been there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogInsights