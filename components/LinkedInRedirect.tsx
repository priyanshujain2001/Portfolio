'use client'

import { motion } from 'framer-motion'
import { Linkedin, ExternalLink, MessageCircle, Calendar } from 'lucide-react'

const LinkedInRedirect = () => {
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
            <span className="gradient-text">My Thoughts & Insights</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            I regularly share my thoughts, insights, and experiences about AI, Machine Learning, 
            and technology on LinkedIn. Check out my latest posts and articles there! 📚
          </motion.p>
        </motion.div>

        {/* LinkedIn Content Preview */}
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
            className="bg-gray-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <Linkedin className="h-24 w-24 mx-auto mb-4 opacity-90" />
                  <div className="text-sm font-medium opacity-90">Follow me on LinkedIn</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">
                    AI & ML Content
                  </span>
                  <span className="ml-4 text-sm text-gray-400">Regular Posts</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Real Insights from Real Experience
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  I share practical insights about AI development, machine learning challenges, 
                  career advice, and behind-the-scenes stories from my projects. No fluff, just 
                  real experiences and lessons learned.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Regular Posts
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Weekly Updates
                    </div>
                  </div>
                  <motion.a
                    href="https://www.linkedin.com/in/priyanshu-jain-2536b6211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    Visit LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Types */}
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
            What You'll Find on My LinkedIn
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Insights",
                description: "Deep dives into AI/ML concepts, implementation challenges, and solutions",
                icon: "🧠"
              },
              {
                title: "Project Stories",
                description: "Behind-the-scenes stories from real projects and lessons learned",
                icon: "🚀"
              },
              {
                title: "Career Advice",
                description: "Tips for aspiring AI engineers and career development insights",
                icon: "💼"
              },
              {
                title: "Industry Trends",
                description: "Analysis of current AI trends and their practical implications",
                icon: "📈"
              },
              {
                title: "Code Snippets",
                description: "Practical code examples and implementation tips",
                icon: "💻"
              },
              {
                title: "Community Engagement",
                description: "Thoughtful discussions and responses to AI community questions",
                icon: "💬"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Connect? 🤝
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Follow me on LinkedIn for regular insights, or let's connect directly to discuss 
              your AI projects and ideas. I'm always excited to talk about technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.linkedin.com/in/priyanshu-jain-2536b6211/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Follow on LinkedIn
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LinkedInRedirect
