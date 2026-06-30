import { motion } from 'framer-motion'
import { FaStar, FaHeart, FaSmile, FaCamera, FaGift, FaTrophy } from 'react-icons/fa'

const Timeline = () => {
  const memories = [
    {
      year: '2020',
      title: 'First Meeting',
      description: 'The day we became friends - what an amazing journey began!',
      icon: FaHeart,
      color: 'from-pink-500 to-rose-500',
    },
    {
      year: '2021',
      title: 'Epic Adventure',
      description: 'Remember that crazy trip? Best memories ever!',
      icon: FaCamera,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      year: '2022',
      title: 'Big Achievement',
      description: 'You achieved your dreams and we celebrated together!',
      icon: FaTrophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      year: '2023',
      title: 'Special Moments',
      description: 'Another year of creating beautiful memories!',
      icon: FaStar,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2024',
      title: 'Amazing Times',
      description: 'Laughter, joy, and unforgettable moments together!',
      icon: FaSmile,
      color: 'from-green-500 to-teal-500',
    },
    {
      year: '2025',
      title: 'New Beginnings',
      description: 'Here\'s to another incredible year ahead!',
      icon: FaGift,
      color: 'from-red-500 to-pink-500',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white/10" id="timeline">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-fancy text-center text-white mb-20"
        >
          Our Journey Together 🌟
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-300 via-pink-500 to-purple-500 hidden md:block"></div>

          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-20 flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-effect rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-pink-500/50"
                >
                  <div className={`inline-block bg-gradient-to-r ${memory.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg`}>
                    {memory.year}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                    <memory.icon className="inline" />
                    {memory.title}
                  </h3>
                  
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    {memory.description}
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ duration: 0.5 }}
                className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${memory.color} rounded-full flex items-center justify-center shadow-xl z-10 hidden md:flex border-4 border-white`}
              >
                <memory.icon className="text-white text-2xl" />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className={`md:hidden w-12 h-12 bg-gradient-to-r ${memory.color} rounded-full flex items-center justify-center shadow-xl mb-4`}
              >
                <memory.icon className="text-white text-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline