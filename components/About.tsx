'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Zap, Target, Lightbulb, Users, Award, TrendingUp } from 'lucide-react'

const About = () => {
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

  const expertise = [
    {
      icon: Brain,
      title: "AI Architecture",
      description: "Designing scalable AI systems and intelligent infrastructure for enterprise applications."
    },
    {
      icon: Code,
      title: "Machine Learning",
      description: "Building and deploying ML models that solve real-world problems with cutting-edge algorithms."
    },
    {
      icon: Zap,
      title: "Deep Learning",
      description: "Creating neural networks and deep learning solutions for complex pattern recognition tasks."
    },
    {
      icon: Target,
      title: "AI Strategy",
      description: "Developing comprehensive AI strategies that align with business objectives and drive innovation."
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: "JEE Advanced Top 1%",
      description: "Out of 1.1 million candidates - because I love a good challenge! 🎯"
    },
    {
      icon: TrendingUp,
      title: "33% Conversion Boost",
      description: "Built prediction models that actually moved the needle at Verifast.ai"
    },
    {
      icon: Users,
      title: "UG Researcher Award",
      description: "Honored by IIT Jodhpur for pioneering innovation in student research"
    },
    {
      icon: Lightbulb,
      title: "Cloud Cost Burglar",
      description: "Cut cloud infrastructure costs by 50% - I do burglary in clouds to save money! 💰"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/50">
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
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hey! I'm Priyanshu, an AI Engineer and Architect from the tech hub of India - Bengaluru! 🇮🇳 
            I'm that person who gets excited about neural networks at 2 AM and thinks about optimization algorithms 
            while sipping chai. I believe AI should be both powerful and approachable (and maybe a little fun too!).
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold mb-6 text-white"
            >
              My AI Journey (So Far!) 🚀
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-300 leading-relaxed"
            >
              <p>
                Started as a curious kid who got excited about JEE Advanced (top 1% of 1.1M candidates! 🎯), 
                and now I'm building AI systems that actually work in the real world. My journey took me from 
                IIT Jodhpur to the bustling tech scene of Bengaluru.
              </p>
              <p>
                Currently rocking it as an AI Developer at Black Box, where I'm designing unified backend 
                orchestration engines and making chatbots actually useful (not just annoying). Previously, 
                I was at Verifast.ai where I built prediction models that increased conversion rates by 33% 
                and cut cloud costs by 50% (because who doesn't love saving money? 💰).
              </p>
              <p>
                I've also dabbled in some cool stuff like physics-infused neural networks for tidal energy 
                prediction and fine-tuning LLMs to roast people (BurnBot project - because why not? 😄). 
                I believe AI should solve real problems while being fun to work with!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-24 w-24 text-primary-400 mx-auto mb-4 animate-pulse-glow" />
                  <div className="text-2xl font-bold text-white mb-2">AI Engineer</div>
                  <div className="text-gray-300">Building Tomorrow's Intelligence</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary-500/20 rounded-full animate-float" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
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
            Core Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-gray-800/50 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary-400" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Key Achievements
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-white/5 hover:border-accent-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent-500/10 rounded-full">
                    <achievement.icon className="h-8 w-8 text-accent-400" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
