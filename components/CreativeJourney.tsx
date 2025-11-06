'use client'

import { motion } from 'framer-motion'
import { BookOpen, Feather, Instagram } from 'lucide-react'

const CreativeJourney = () => {
  const instagramUsername = "p3nls_kumar"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const hobbies = [
    {
      title: "Storytelling & Short Scripts",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-600",
      description:
        "I love creating short scripts that explore the fine line between reality and imagination — from quiet moments to powerful character-driven drama.",
      examples: [
        "A Couple and a Robber Cross Paths in a Forest",
        "Bermuda Triangle",
        "Butterfly Effect",
        "True Love Never Dies",
        "Sex Education"
      ],
      fullList: [
        "A Couple and a Robber Cross Paths in a Forest",
        "Aige Kabhi Kisi Din Aiga Apka Dwar Pe X2",
        "Bermuda Triangle",
        "Butterfly Effect",
        "Is Fate Destined",
        "Sex Education",
        "Shartage",
        "Space Crew",
        "The Journey of Getting in IIT",
        "Twin Identity",
        "Psychology",
        "True Love Never Dies",
        "Vishal AIDE"
      ]
    },
    {
      title: "Poetry & Shayari",
      icon: Feather,
      gradient: "from-pink-500 to-rose-600",
      description:
        "Sometimes I let the rhythm speak. I write poems and shayari in both Hindi and English — reflections of thoughts that never made it to conversations.",
      examples: [
        "Romantic minimalism — exploring emotion through metaphors.",
        "Fusion of classical Hindi poetics with modern themes."
      ]
    }
  ]

  return (
    <section id="creative" className="scroll-mt-24 py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Creative Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Beyond AI and code, I write — stories, screenplays, and poems.  
            This is where logic meets emotion, and words become experiences. ✨
          </motion.p>
        </motion.div>

        {/* Hobby Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className={`relative h-56 bg-gradient-to-br ${hobby.gradient}`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <hobby.icon className="h-20 w-20 text-white/80" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{hobby.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{hobby.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                  {hobby.examples.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-6">
            <span className="gradient-text">Poems & Thoughts</span>
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            I regularly share my poems, shayari, and short reflective thoughts on my Instagram.  
            If you love poetry that blends emotions with perspective — come check it out 🌿
          </motion.p>

          <motion.a
            variants={itemVariants}
            href={`https://www.instagram.com/${instagramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Visit My Instagram — @{instagramUsername}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CreativeJourney
