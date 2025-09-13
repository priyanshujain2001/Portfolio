'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, MessageSquare, CheckCircle, XCircle, Send } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TimeSlot {
  id: string
  date: string
  time: string
  available: boolean
}

interface BookingData {
  name: string
  email: string
  topic: string
  details: string
  selectedSlot: TimeSlot | null
}

const CalendarBooking = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    email: '',
    topic: '',
    details: '',
    selectedSlot: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Generate time slots for the next 30 days
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const today = new Date()
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      const dateString = date.toISOString().split('T')[0]
      const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
      
      let timeSlots: string[] = []
      
      if (isWeekend) {
        // Weekends: Anytime (every hour from 12 AM to 11 PM)
        for (let hour = 0; hour < 24; hour++) {
          timeSlots.push(`${hour.toString().padStart(2, '0')}:00`)
        }
      } else {
        // Weekdays: 10 AM to 12 AM (next day) - 14 hours
        for (let hour = 10; hour < 24; hour++) {
          timeSlots.push(`${hour.toString().padStart(2, '0')}:00`)
        }
      }
      
      timeSlots.forEach(time => {
        slots.push({
          id: `${dateString}-${time}`,
          date: dateString,
          time: time,
          available: true // All slots are available
        })
      })
    }
    
    return slots
  }

  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots())
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])

  // Format time for display
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number)
    const date = new Date()
    date.setHours(hours, minutes)
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  // Filter available slots for selected date
  useEffect(() => {
    if (selectedDate) {
      const slots = timeSlots.filter(slot => 
        slot.date === selectedDate && slot.available
      )
      setAvailableSlots(slots)
    } else {
      setAvailableSlots([])
    }
  }, [selectedDate, timeSlots])

  const handleDateChange = (date: string) => {
    setSelectedDate(date)
    setSelectedSlot(null)
    setError('')
  }

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot)
    setBookingData(prev => ({ ...prev, selectedSlot: slot }))
    setError('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking')
      }
      
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed! 🎉</h2>
            <p className="text-gray-300 mb-6">
              Thank you for booking a session with me. I'll send you a calendar invite and 
              we'll discuss <strong>{bookingData.topic}</strong> on{' '}
              <strong>{selectedSlot?.date}</strong> at <strong>{selectedSlot?.time ? formatTime(selectedSlot.time) : selectedSlot?.time}</strong>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setSelectedDate('')
                setSelectedSlot(null)
                setBookingData({
                  name: '',
                  email: '',
                  topic: '',
                  details: '',
                  selectedSlot: null
                })
              }}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300"
            >
              Book Another Session
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Calendar className="h-8 w-8 text-primary-400" />
            <h2 className="text-4xl font-bold gradient-text">Book a Session</h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Let's discuss your project, ideas, or just have a chat about AI, technology, 
            or anything that interests you! Pick a time that works for you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar Selection */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-900/50 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Clock className="h-6 w-6 text-primary-400 mr-3" />
              Select Date & Time
            </h3>

            {/* Date Picker */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Choose a Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-4 gap-2 max-h-80 overflow-y-auto">
                  {availableSlots.length > 0 ? (
                    availableSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleSlotSelect(slot)}
                        className={`p-2 rounded-lg border transition-all duration-300 text-sm ${
                          selectedSlot?.id === slot.id
                            ? 'border-primary-500 bg-primary-500/10 text-primary-400'
                            : 'border-white/10 bg-gray-800 hover:border-primary-500/50 hover:bg-primary-500/5 text-gray-300'
                        }`}
                      >
                        {formatTime(slot.time)}
                      </button>
                    ))
                  ) : (
                    <div className="col-span-3 text-center text-gray-400 py-8">
                      No available slots for this date
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Booking Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-900/50 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 text-primary-400 mr-3" />
              Session Details
            </h3>

            {/* Simple Booking Info */}
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-gray-300 text-sm">
                  <strong>Simple & Easy:</strong> Just fill out the form below and I'll send you both a confirmation email and calendar invite automatically!
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Discussion Topic *
                </label>
                <input
                  type="text"
                  name="topic"
                  value={bookingData.topic}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
                  placeholder="e.g., AI Project Consultation, Career Advice, Technical Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="details"
                  value={bookingData.details}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me more about what you'd like to discuss, any specific questions, or context that would be helpful..."
                />
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-400">
                  <XCircle className="h-5 w-5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedSlot || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  selectedSlot && !isSubmitting
                    ? 'bg-primary-500 hover:bg-primary-600 text-white transform hover:scale-105'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Booking Session...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Book Session</span>
                  </>
                )}
              </button>
            </form>

            {selectedSlot && (
              <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
                <div className="flex items-center space-x-2 text-primary-400 mb-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Selected Session</span>
                </div>
                <p className="text-gray-300">
                  <strong>Date:</strong> {new Date(selectedSlot.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-gray-300">
                  <strong>Time:</strong> {formatTime(selectedSlot.time)}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CalendarBooking
