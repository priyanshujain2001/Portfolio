'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Rocket, Globe, Zap, Coins, Cloud, Cpu, Skull, Truck } from 'lucide-react'
import { useState, useEffect } from 'react'
import Contact from './Contact'

const StartupIdeas = () => {
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null)
  const [contactType, setContactType] = useState<'Feedback' | 'Recommendation' | 'Collaboration' | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const ideas = [
  {
    title: "ElderServe — Jobs & Help for the Elderly",
    icon: Users,
    gradient: "from-yellow-500 to-orange-600",
    category: "Social Impact",
    description:
      "A community platform where elderly individuals could earn ‘Community Points’ by helping others, and later use those points to get assistance themselves — creating a cycle of care and purpose.",
    why:
      "I wanted to help older people feel useful again — to give them a sense of contribution and independence instead of isolation. The idea came from seeing retired people wanting to stay active but not knowing how.",
    how:
      "Planned a gamified community platform where tasks like mentoring, small help, or volunteering would earn points redeemable for services later. Tried reaching out to local NGOs and old-age communities to validate demand.",
    fail:
      "Failed at market validation. Most elderly participants preferred receiving help rather than offering it — the reciprocity model didn’t align emotionally or socially for the target audience.",
    stage: "Concept Validation",
    impact: "A vision to redefine ageing — from dependence to dignity. 👴💫",
    features: [
      "Community-based task exchange",
      "Point-based reputation system",
      "Elder-friendly interface",
      "Volunteer and helper matching"
    ]
  },
  {
    title: "HeavyPath — Route Optimizer for Oversized Vehicles",
    icon: Truck, // If you don’t have Truck from lucide-react, you can use Globe or Zap
    gradient: "from-sky-500 to-blue-600",
    category: "Logistics / AI",
    description:
      "An AI-powered path planner for heavy and oversized vehicles (60+ wheels) to safely navigate routes with bridge limits, barriers, and height constraints.",
    why:
      "I was fascinated by the complexity of logistics for industrial transport — massive vehicles that break barriers just to cross small bridges. There was a clear need for smarter routing beyond Google Maps.",
    how:
      "Designed a hierarchical graph model with local topographic and traffic data. Idea was to feed RTO and GIS data into a custom routing algorithm, similar to a restricted Dijkstra pathfinder.",
    fail:
      "Realized this problem is already managed locally by RTOs who understand regional constraints better. Without official data or cooperation, scaling was impossible and potentially unsafe.",
    stage: "Research Phase",
    impact: "A solid idea for industrial AI, but domain ownership beat scalability. 🚚",
    features: [
      "Height & weight-based routing",
      "Bridge load analytics",
      "Local authority integration",
      "3D route visualization"
    ]
  },
  {
    title: "AnonTree — Hierarchical Anonymous Communication Platform",
    icon: Cloud,
    gradient: "from-purple-500 to-pink-600",
    category: "Social / PrivacyTech",
    description:
      "A tree-structured anonymous streaming and communication platform where users could interact in layered rooms — each level offering a different privacy depth.",
    why:
      "I wanted to explore how we could maintain free expression while controlling visibility — giving people the option to go deeper into anonymity without chaos.",
    how:
      "Built a basic real-time structure using WebRTC and Firebase. Designed permission trees where a user could host rooms with layered access.",
    fail:
      "It quickly became clear that full anonymity attracts misuse. Risk of inappropriate or illegal communication was too high to continue safely.",
    stage: "Prototype",
    impact: "Proof that freedom without guardrails becomes fragility. 🕊️",
    features: [
      "Tree-based anonymous chat rooms",
      "Real-time voice/video streaming",
      "Privacy-level segmentation",
      "Temporary data storage"
    ]
  },
  {
    title: "BarterGold — Asset Trading & Rental Economy",
    icon: Coins,
    gradient: "from-amber-500 to-yellow-600",
    category: "FinTech / Circular Economy",
    description:
      "A peer-to-peer marketplace where goods, services, and rentals are traded with value pegged to gold — removing GST and inflationary effects from microtransactions.",
    why:
      "I wanted a system where inflation doesn’t break trust in value — a barter-based digital economy tied to gold’s stable worth. Inspired by rural exchanges and decentralized finance ideas.",
    how:
      "Planned a hybrid platform where every product/service has a value estimated in ‘Gold Units’. Trades happen without cash — ensuring intrinsic, inflation-proof valuation.",
    fail:
      "Complex legal structure around bartering and taxation made it impractical. Integrating live gold rates with physical asset verification required compliance overheads not feasible for a small team.",
    stage: "Ideation Stage",
    impact: "An attempt to rebuild trust in trade — through value that never devalues. 💰",
    features: [
      "Gold-pegged product valuation",
      "Barter-based transactions",
      "Service & goods renting",
      "Inflation-resistant pricing"
    ]
  }
]


  const handleConnectClick = (ideaName: string, type: 'Feedback' | 'Recommendation' | 'Collaboration') => {
    setSelectedIdea(ideaName)
    setContactType(type)
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
  id="entrepreneur"
  className="scroll-mt-24 py-20 bg-gray-900"
>
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
            <span className="gradient-text">Entrepreneur Journey</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A reflection of ideas I chased — why they mattered, what I built, and what I learned when they didn’t work out. 🚀
          </motion.p>
        </motion.div>

        {/* Idea Slides */}
        <div className="grid lg:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className={`relative h-64 bg-gradient-to-br ${idea.gradient}`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <idea.icon className="h-24 w-24 text-white/80" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                    {idea.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{idea.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{idea.description}</p>

                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p><span className="text-primary-400 font-semibold">💡 Why I thought of it:</span> {idea.why}</p>
                  <p><span className="text-accent-400 font-semibold">🔧 How I tried to build it:</span> {idea.how}</p>
                  <p><span className="text-red-400 font-semibold">❌ Why it failed:</span> {idea.fail}</p>
                  <p><span className="text-yellow-400 font-semibold">📊 Stage:</span> {idea.stage}</p>
                </div>

                <div className="mt-6 mb-4 p-4 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-lg border border-accent-500/20">
                  <p className="text-accent-400 font-medium text-sm">{idea.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {idea.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full border border-gray-600/50">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {["Feedback", "Recommendation", "Collaboration"].map((type) => (
                    <motion.button
                      key={type}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleConnectClick(idea.title, type as any)}
                      className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-medium hover:shadow-md hover:shadow-primary-500/25 transition-all duration-300"
                    >
                      {type === "Collaboration" ? "🤝 " : "💬 "}
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="mt-24">
        <Contact
          prefilledSubject={
            selectedIdea && contactType
              ? `[${contactType}] - ${selectedIdea}`
              : "Startup Idea Inquiry"
          }
        />
      </div>
    </section>
  )
}

export default StartupIdeas
