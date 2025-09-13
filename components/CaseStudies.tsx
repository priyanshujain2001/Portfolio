'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, BarChart3, Clock, Users, Target, Zap } from 'lucide-react'
import { useState } from 'react'

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0)

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

  const caseStudies = [
    {
      id: 0,
      title: "Verifast.ai ML Optimization",
      subtitle: "33% Conversion Boost & 50% Cost Reduction",
      category: "Machine Learning & Optimization",
      duration: "6 months",
      team: "Solo + Team Collaboration",
      challenge: "Verifast.ai was struggling with low conversion rates and high cloud infrastructure costs. The existing prediction models were not performing optimally, leading to poor user experience and unsustainable operational expenses.",
      solution: "Developed advanced ML models using ensemble methods and feature engineering. Implemented automated model retraining pipelines and optimized cloud resource allocation using predictive scaling algorithms.",
      results: [
        { metric: "Conversion Rate", before: "12%", after: "16%", improvement: "+33%" },
        { metric: "Cloud Costs", before: "$5,000/month", after: "$2,500/month", improvement: "-50%" },
        { metric: "Model Accuracy", before: "78%", after: "94%", improvement: "+16%" },
        { metric: "Response Time", before: "2.3s", after: "0.8s", improvement: "-65%" }
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "AWS", "Docker", "Kubernetes"],
      impact: "Transformed the company's bottom line while significantly improving user experience. The cost savings alone paid for the entire project within 3 months.",
      image: "bg-gradient-to-br from-green-500 to-blue-600"
    },
    {
      id: 1,
      title: "Environmental AI Research",
      subtitle: "92% Accuracy in Water Quality Prediction",
      category: "Deep Learning & Environmental Science",
      duration: "8 months",
      team: "Research Team",
      challenge: "Traditional water quality assessment methods were time-consuming and often inaccurate. There was a need for an automated system that could predict water quality indices using environmental data with high accuracy.",
      solution: "Developed physics-infused neural networks that incorporated domain knowledge into deep learning models. Used SHAP analysis for model interpretability and implemented sequential feature learning for optimal data utilization.",
      results: [
        { metric: "Classification Accuracy", before: "65%", after: "92%", improvement: "+27%" },
        { metric: "Processing Time", before: "2 hours", after: "5 minutes", improvement: "-96%" },
        { metric: "Data Points Analyzed", before: "1,000", after: "50,000+", improvement: "+4900%" },
        { metric: "Model Interpretability", before: "Low", after: "High", improvement: "SHAP Analysis" }
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "SHAP", "Jupyter", "Pandas", "NumPy"],
      impact: "Revolutionized water quality assessment in India, enabling real-time monitoring of groundwater resources. The research was published and recognized by IIT Jodhpur.",
      image: "bg-gradient-to-br from-emerald-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Financial Query Solver",
      subtitle: "68% Accuracy in Natural Language to MongoDB",
      category: "NLP & Financial Technology",
      duration: "4 months",
      team: "Solo Project",
      challenge: "Financial institutions needed a way to convert natural language queries into structured database queries. Traditional approaches had low accuracy and required extensive manual intervention.",
      solution: "Built a sophisticated RAG-based system that processed PDF documents and generated MongoDB queries from natural language. Implemented advanced NLP techniques and fine-tuned language models for financial domain expertise.",
      results: [
        { metric: "Query Accuracy", before: "35%", after: "68%", improvement: "+33%" },
        { metric: "Response Time", before: "15s", after: "2s", improvement: "-87%" },
        { metric: "Documents Processed", before: "50", after: "500+", improvement: "+900%" },
        { metric: "User Satisfaction", before: "60%", after: "95%", improvement: "+35%" }
      ],
      technologies: ["Python", "RAG", "MongoDB", "NLP", "Transformers", "LangChain", "FastAPI"],
      impact: "Enabled non-technical users to query complex financial databases using natural language, democratizing data access in financial institutions.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ]

  const currentCase = caseStudies[selectedCase]

  return (
    <section id="case-studies" className="py-20 bg-gray-800/50">
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
            <span className="gradient-text">Case Studies</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Deep dive into some of my most impactful projects. These aren't just code - 
            they're real solutions that moved the needle for businesses and research. 📊
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Case Study Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {caseStudies.map((caseStudy, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  onClick={() => setSelectedCase(index)}
                  whileHover={{ x: 5 }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedCase === index
                      ? 'border-primary-500 bg-primary-500/10 text-primary-400'
                      : 'border-white/10 bg-gray-800/50 text-gray-300 hover:border-primary-500/50 hover:bg-primary-500/5'
                  }`}
                >
                  <div className="font-semibold text-sm mb-1">{caseStudy.title}</div>
                  <div className="text-xs text-gray-400">{caseStudy.subtitle}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Case Study Content */}
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-white/10">
              {/* Header */}
              <div className={`${currentCase.image} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {currentCase.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {currentCase.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {currentCase.team}
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{currentCase.title}</h3>
                <p className="text-xl opacity-90">{currentCase.subtitle}</p>
              </div>

              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="h-5 w-5 text-red-400 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{currentCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                      My Solution
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{currentCase.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 text-green-400 mr-2" />
                    Results & Impact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentCase.results.map((result, index) => (
                      <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm">{result.metric}</span>
                          <span className="text-green-400 font-semibold">{result.improvement}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Before: {result.before}</span>
                          <span className="text-white">After: {result.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Statement */}
                <div className="p-6 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-xl border border-accent-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Overall Impact</h4>
                  <p className="text-gray-300 leading-relaxed">{currentCase.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Want Similar Results for Your Project? 🎯
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These case studies show what's possible when we combine technical expertise 
              with business understanding. Let's discuss how we can achieve similar results for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white hover:border-primary-400 hover:text-primary-400 transition-all duration-300"
              >
                Book a Consultation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
