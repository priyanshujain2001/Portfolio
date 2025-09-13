'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Book Session', href: '#booking' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/priyanshujain2001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/priyanshu-jain-2536b6211/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jainpriyanshu2982001@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Brain className="h-8 w-8 text-primary-400" />
                <Code className="h-6 w-6 text-accent-400" />
              </div>
              <span className="text-2xl font-bold gradient-text">Priyanshu Jain</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              AI Engineer & Architect from Bengaluru, India 🇮🇳. Building intelligent systems 
              that actually work (and sometimes make people laugh). Let's create something extraordinary together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800/50 rounded-lg border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-primary-400" />
                <span className="text-sm">jainpriyanshu2982001@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="text-sm">Bengaluru, India 🇮🇳</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Priyanshu. All rights reserved.</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>for the AI community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
