'use client'

import { motion } from 'framer-motion'
import { Brain, Eye, Zap, Code, ArrowRight, Flame, Database, MessageCircle, BarChart3, BookOpen } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: "Oval Generator",
      description: "A TypeScript-based tool for generating oval shapes and patterns. Perfect for creating smooth, mathematically precise oval designs for various applications.",
      technologies: ["TypeScript", "Mathematics", "Geometry", "Canvas API"],
      category: "Web Development",
      icon: BarChart3,
      gradient: "from-blue-500 to-purple-600",
      features: [
        "Mathematical precision",
        "TypeScript implementation",
        "Canvas-based rendering",
        "Customizable parameters"
      ],
      impact: "Because sometimes you need the perfect oval, not just any old circle! ⭕"
    },
    {
      title: "Ephemeral Streaming Platform",
      description: "An anonymous streaming platform with tree-based room structures. Complete privacy with no data storage - chat anonymously in various channels with different privacy levels.",
      technologies: ["TypeScript", "WebRTC", "Tree Structures", "Privacy", "Real-time"],
      category: "Full Stack",
      icon: MessageCircle,
      gradient: "from-green-500 to-teal-600",
      features: [
        "Anonymous communication",
        "Tree-based room structure",
        "Complete privacy",
        "Real-time streaming"
      ],
      impact: "Privacy-first streaming that actually respects your data! 🔒"
    },
    {
      title: "Agent for Website",
      description: "An intelligent AI agent designed to interact with websites and perform automated tasks. Built with Python and advanced web automation techniques.",
      technologies: ["Python", "Web Automation", "AI Agent", "Selenium", "BeautifulSoup"],
      category: "AI Automation",
      icon: Brain,
      gradient: "from-orange-500 to-red-600",
      features: [
        "Web automation",
        "AI-powered interactions",
        "Python implementation",
        "Smart task execution"
      ],
      impact: "Making websites work for you, not the other way around! 🤖"
    },
    {
      title: "Financial Query Solver using RAG",
      description: "A sophisticated RAG-based system for answering financial queries using PDF documents. Achieved 68% accuracy in natural language to MongoDB query generation.",
      technologies: ["Python", "RAG", "MongoDB", "NLP", "Financial Data"],
      category: "NLP & Finance",
      icon: Database,
      gradient: "from-purple-500 to-pink-600",
      features: [
        "RAG implementation",
        "68% query accuracy",
        "Financial data processing",
        "MongoDB integration"
      ],
      impact: "Making financial data actually understandable! 💰"
    },
    {
      title: "Deep Learning in Environmental Science",
      description: "Advanced statistical analysis of Indian groundwater quality using deep learning. Achieved 92% accuracy in Water Quality Index classification with SHAP analysis.",
      technologies: ["Python", "Deep Learning", "Environmental Science", "SHAP", "Jupyter"],
      category: "Environmental AI",
      icon: Eye,
      gradient: "from-emerald-500 to-cyan-600",
      features: [
        "92% classification accuracy",
        "SHAP analysis implementation",
        "Environmental data processing",
        "Sequential feature learning"
      ],
      impact: "Using AI to protect our environment, one prediction at a time! 🌱"
    },
    {
      title: "Chat with PDF",
      description: "A simple yet powerful chatbot that can be trained on personal PDFs or sets of PDFs to provide intelligent responses to queries. Perfect for document-based Q&A systems.",
      technologies: ["Python", "PDF Processing", "NLP", "Chatbot", "Document AI"],
      category: "Document AI",
      icon: BookOpen,
      gradient: "from-indigo-500 to-purple-600",
      features: [
        "PDF document processing",
        "Personal document training",
        "Intelligent Q&A",
        "Multiple PDF support"
      ],
      impact: "Finally, a chatbot that actually reads your documents! 📚"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
            <span className="gradient-text">My Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Here are some of the projects I've built - from anonymous streaming platforms 
            to AI agents that actually work. Because why not make technology both useful and fun? 😄
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* Project Image */}
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="h-24 w-24 text-white/80" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Statement */}
                <div className="mb-6 p-4 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-lg border border-accent-500/20">
                  <p className="text-accent-400 font-medium text-sm">
                    {project.impact}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Want to see more? Let's chat! ☕
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects