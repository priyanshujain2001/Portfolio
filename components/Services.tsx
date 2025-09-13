'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Brain, Code, Database, MessageCircle, Clock, ArrowRight } from 'lucide-react'

const Services = () => {
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

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Comprehensive AI strategy development, technology assessment, and roadmap planning for your business.",
      features: [
        "AI readiness assessment",
        "Technology stack recommendations",
        "ROI analysis and projections",
        "Implementation roadmap",
        "Team training and mentoring"
      ],
      pricing: "Custom pricing based on use case",
      duration: "2-8 weeks",
      popular: false
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "End-to-end AI solution development from concept to deployment, tailored to your specific needs.",
      features: [
        "Custom ML model development",
        "Data pipeline architecture",
        "Model training and optimization",
        "API development and integration",
        "Performance monitoring setup"
      ],
      pricing: "Custom pricing based on complexity",
      duration: "4-16 weeks",
      popular: true
    },
    {
      icon: Database,
      title: "AI System Optimization",
      description: "Optimize existing AI systems for better performance, cost efficiency, and scalability.",
      features: [
        "Performance analysis and profiling",
        "Model optimization and fine-tuning",
        "Cost reduction strategies",
        "Scalability improvements",
        "Monitoring and alerting setup"
      ],
      pricing: "Custom pricing based on scope",
      duration: "2-6 weeks",
      popular: false
    },
    {
      icon: MessageCircle,
      title: "AI Consultation & Support",
      description: "Direct consultation for AI projects, technical guidance, and ongoing support for your AI initiatives.",
      features: [
        "Direct project consultation",
        "Technical guidance and advice",
        "Code review and optimization",
        "Architecture recommendations",
        "Ongoing support and mentoring"
      ],
      pricing: "Custom pricing based on scope",
      duration: "1-4 weeks",
      popular: false
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start with understanding your business goals, current challenges, and technical requirements.",
      icon: MessageCircle
    },
    {
      step: "02", 
      title: "Strategy & Design",
      description: "I develop a comprehensive AI strategy and technical architecture tailored to your needs.",
      icon: Brain
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building and rigorously testing the AI solution with regular check-ins and iterations.",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment with comprehensive documentation and ongoing support to ensure success.",
      icon: Zap
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
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
            <span className="gradient-text">Services & Pricing</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From AI strategy to full-stack development, I offer comprehensive solutions 
            to help your business leverage artificial intelligence effectively. 
            Let's build something amazing together! 🚀
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative bg-gray-800/50 rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${
                service.popular
                  ? 'border-primary-500/50 shadow-primary-500/10'
                  : 'border-white/10 hover:border-primary-500/50'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="text-2xl font-bold text-primary-400 mb-2">
                  {service.pricing}
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center w-full justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25'
                      : 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            How We Work Together
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-white/5 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-500/10 rounded-full">
                    <step.icon className="h-6 w-6 text-primary-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
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
            className="inline-block p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Discuss Your AI Project? 🤖
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
              Let's talk directly about your project needs. I offer custom solutions 
              with flexible pricing based on your specific use case and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Let's Talk Directly
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white hover:border-primary-400 hover:text-primary-400 transition-all duration-300"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
