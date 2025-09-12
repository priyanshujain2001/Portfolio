'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Database, Cloud, Cpu, Zap, Lightbulb } from 'lucide-react'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      title: "ML & AI Frameworks",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Hugging Face", level: 85 },
        { name: "OpenCV", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "Pandas & NumPy", level: 95 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Git", level: 95 }
      ]
    },
    {
      title: "Data & Databases",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Apache Spark", level: 75 },
        { name: "Hadoop", level: 70 },
        { name: "Tableau", level: 80 }
      ]
    }
  ]

  const technologies = [
    { name: "Python", category: "Language" },
    { name: "R", category: "Language" },
    { name: "C/C++", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "SQL", category: "Language" },
    { name: "Bash", category: "Language" },
    { name: "MATLAB", category: "Language" },
    { name: "TensorFlow", category: "ML Framework" },
    { name: "PyTorch", category: "ML Framework" },
    { name: "Hugging Face", category: "ML Framework" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "Scikit-learn", category: "ML Library" },
    { name: "Pandas", category: "Data Science" },
    { name: "NumPy", category: "Data Science" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "Hadoop", category: "Big Data" },
    { name: "Tableau", category: "Visualization" },
    { name: "Flask", category: "Web Framework" },
    { name: "React", category: "Frontend" },
    { name: "Git", category: "Version Control" }
  ]


  return (
    <section id="skills" className="py-20 bg-gray-800/50">
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
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical skills, spanning from machine learning 
            algorithms to production-ready AI systems and cloud infrastructure.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
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
            Technologies & Tools
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2, scale: 1.05 }}
                className="group p-4 bg-gray-800/30 rounded-xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {tech.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
