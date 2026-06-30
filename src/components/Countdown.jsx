import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const birthdayDate = new Date('2026-07-01T00:00:00')

    const timer = setInterval(() => {
      const now = new Date()
      const difference = birthdayDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days, color: 'from-pink-500 to-rose-500' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-purple-500 to-indigo-500' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-blue-500 to-cyan-500' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-green-500 to-teal-500' },
  ]

  return (
    <section className="py-20 px-4" id="countdown">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-fancy text-center text-white mb-16"
        >
          Time Until Next Birthday 🎂
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="glass-effect rounded-3xl p-6 md:p-8 text-center shadow-2xl relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-10`}></div>
              
              <motion.div
                key={block.value}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-yellow-300 mb-4">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
                  {block.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countdown