import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Emojis */}
      {['🎂', '🎈', '🎁', '🎉', '💖', '⭐', '✨', '🥳'].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-6xl opacity-30"
          style={{
            left: `${(i * 12) + 5}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -70, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Glass Card Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 glow"
        >
          {/* Cake Emoji */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1.5, bounce: 0.6 }}
            className="mb-8"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-7xl md:text-9xl"
            >
              🎂
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-fancy font-bold text-white mb-6 drop-shadow-2xl"
          >
            Happy Birthday
          </motion.h1>

          {/* Name - CHANGE THIS TO YOUR FRIEND'S NAME */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-8"
          >
            Amrutha Bala! 🎉
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8"
          />

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed mb-10"
          >
            May your special day be filled with love, joy, and all the wonderful things you deserve! 🥳
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring', bounce: 0.5 }}
          >
            <motion.a
              href="#photos"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 50px rgba(255,107,157,0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl relative overflow-hidden group"
            >
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">View Photo Memories 📸</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
          <p className="text-white/40 text-sm mt-3">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero