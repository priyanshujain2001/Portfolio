import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Priyanshu Jain - AI Engineer & Architect',
  description: 'Passionate AI Engineer and Architect from Bengaluru, India. Building intelligent systems that solve real-world problems with a quirky twist and reliable solutions.',
  keywords: 'AI Engineer, Machine Learning, Artificial Intelligence, Software Architecture, Deep Learning, Neural Networks, AI Solutions, Bengaluru, India',
  authors: [{ name: 'Priyanshu Jain' }],
  openGraph: {
    title: 'Priyanshu Jain - AI Engineer & Architect',
    description: 'Passionate AI Engineer and Architect from Bengaluru, India. Building intelligent systems that solve real-world problems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Jain - AI Engineer & Architect',
    description: 'Passionate AI Engineer and Architect from Bengaluru, India. Building intelligent systems that solve real-world problems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
