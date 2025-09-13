import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Priyanshu Jain - AI Engineer & Architect | Machine Learning Expert',
  description: 'AI Engineer and Architect from Bengaluru, India. Specializing in Machine Learning, Deep Learning, and AI Architecture. 33% conversion boost, 50% cost reduction, 92% accuracy in ML models. Available for AI consulting and development projects.',
  keywords: [
    'AI Engineer',
    'Machine Learning Expert',
    'Deep Learning',
    'AI Architecture',
    'Bengaluru',
    'India',
    'AI Consulting',
    'ML Development',
    'Data Science',
    'Artificial Intelligence',
    'Priyanshu Jain',
    'IIT Jodhpur',
    'Verifast.ai',
    'Black Box'
  ],
  authors: [{ name: 'Priyanshu Jain' }],
  creator: 'Priyanshu Jain',
  publisher: 'Priyanshu Jain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://priyanshujain.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Priyanshu Jain - AI Engineer & Architect | Machine Learning Expert',
    description: 'AI Engineer and Architect from Bengaluru, India. Specializing in Machine Learning, Deep Learning, and AI Architecture. Available for AI consulting and development projects.',
    url: 'https://priyanshujain.dev',
    siteName: 'Priyanshu Jain Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Priyanshu Jain - AI Engineer & Architect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Jain - AI Engineer & Architect | Machine Learning Expert',
    description: 'AI Engineer and Architect from Bengaluru, India. Specializing in Machine Learning, Deep Learning, and AI Architecture.',
    images: ['/og-image.jpg'],
    creator: '@priyanshujain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}