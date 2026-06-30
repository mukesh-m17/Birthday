import { motion } from 'framer-motion'
import { FaQuoteLeft, FaHeart } from 'react-icons/fa'

const Wishes = () => {
  // UPDATE THESE MESSAGES FOR YOUR FRIEND
  const wishes = [
    {
      message: "Happy Birthday! You are such an amazing person and I'm so grateful to have you in my life. May all your dreams come true! 🌟",
      author: "From Me",
      color: "from-pink-500 via-rose-500 to-pink-600",
      emoji: "💖"
    },
    {
      message: "Wishing you a day as beautiful as your smile and a year filled with endless happiness and amazing adventures! 🎉",
      author: "With Love",
      color: "from-purple-500 via-indigo-500 to-purple-600",
      emoji: "🎊"
    },
    {
      message: "You deserve all the wonderful things life has to offer! Have the most fantastic birthday celebration ever! 🎂",
      author: "Best Wishes",
      color: "from-yellow-500 via-orange-500 to-yellow-600",
      emoji: "✨"
    },
    {
      message: "Here's to another incredible year of success, joy, and unforgettable moments. You're truly special! 🥳",
      author: "Cheers",
      color: "from-green-500 via-teal-500 to-green-600",
      emoji: "🎈"
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 inline-block glow">
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl md:text-7xl mb-4"
            >
              💝
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-fancy text-white mb-3">
              Birthday Wishes
            </h2>
            <p className="text-pink-200 text-lg">
              Special messages just for you
            </p>
          </div>
        </motion.div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group glow-hover"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${wish.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Floating Emoji */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity"
              >
                {wish.emoji}
              </motion.div>

              {/* Quote Icon */}
              <FaQuoteLeft className="text-yellow-300 text-3xl md:text-4xl mb-4 opacity-60 relative z-10" />

              {/* Message */}
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 relative z-10">
                {wish.message}
              </p>

              {/* Author & Heart */}
              <div className="flex items-center justify-between relative z-10">
                <span className={`bg-gradient-to-r ${wish.color} text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg`}>
                  {wish.author}
                </span>
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaHeart className="text-pink-400 text-2xl" />
                </motion.div>
              </div>

              {/* Hover Border Glow */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden glow">
            {/* Animated Background Blobs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-6xl md:text-7xl mb-6"
              >
                💌
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-fancy bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-6">
                A Special Message
              </h3>

              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-6">
                You bring so much joy and happiness to everyone around you. Your kindness, your laughter, and your beautiful spirit make the world a better place.
              </p>

              <p className="text-white/90 text-xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto">
                Wishing you a birthday as wonderful as you are, and a year filled with amazing moments!
              </p>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl md:text-6xl mt-8"
              >
                🎊🎈🎉
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Wishes