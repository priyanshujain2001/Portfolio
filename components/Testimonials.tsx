'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Users, Award, TrendingUp } from 'lucide-react'

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Director, IIT Jodhpur",
      content: "Priyanshu's work on physics-infused neural networks was groundbreaking. His 92% accuracy in water quality prediction and innovative SHAP analysis approach set new standards in environmental AI research.",
      rating: 5,
      project: "Environmental AI Research"
    },
    {
      name: "Rajesh Kumar",
      role: "CTO, Verifast.ai",
      content: "Priyanshu transformed our conversion rates with his ML models. The 33% boost in conversions and 50% reduction in cloud costs were game-changers for our business. His technical expertise is unmatched.",
      rating: 5,
      project: "ML Optimization & Cost Reduction"
    },
    {
      name: "Amit Sharma",
      role: "Senior Developer, Black Box",
      content: "Working with Priyanshu on the unified backend orchestration engine was incredible. His AI architecture skills and problem-solving approach made complex systems seem simple. Highly recommend!",
      rating: 5,
      project: "Backend Architecture"
    },
    {
      name: "Dr. Priya Singh",
      role: "Professor, Computer Science",
      content: "Priyanshu's JEE Advanced achievement (top 1% of 1.1M candidates) speaks volumes about his analytical abilities. His research contributions and innovative thinking make him a standout talent.",
      rating: 5,
      project: "Academic Excellence"
    }
  ]

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Projects Completed",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      value: "33%",
      label: "Average Performance Boost",
      color: "text-green-400"
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction",
      color: "text-yellow-400"
    },
    {
      icon: Star,
      value: "5.0",
      label: "Average Rating",
      color: "text-purple-400"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
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
            <span className="gradient-text">What People Say</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take my word for it! Here's what colleagues, clients, and mentors 
            have to say about working with me. Spoiler: they're pretty awesome! 😄
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-500/10 rounded-full">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              {/* Quote Icon */}
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-primary-400 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* Project Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full border border-primary-500/20">
                  {testimonial.project}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join These Happy Clients? 🚀
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing. Whether it's AI solutions, 
              performance optimization, or innovative projects, I'm here to help you succeed.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Start Your Project Today
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
