import { motion } from 'framer-motion'

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#FF6B9D', '#764ba2', '#667eea', '#f093fb', '#C44569'][i],
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['🎈', '🎁', '🎂', '⭐', '🎉', '💖', '✨', '🥳'][i % 8]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Glass Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="glass-strong rounded-3xl p-8 md:p-12 glow"
        >
          {/* Animated Cake */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.6 }}
            className="mb-6"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl md:text-9xl"
            >
              🎂
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-fancy font-bold text-white mb-4 drop-shadow-lg"
          >
            It's a Special Day!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-pink-100 mb-8 font-light"
          >
            Someone Amazing is Celebrating 🎉
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8"
          />

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring', bounce: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(255,107,157,0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-xl md:text-2xl font-bold shadow-2xl overflow-hidden"
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              <span>🎵</span>
              <span>Click to Celebrate!</span>
              <span>🎵</span>
            </span>
          </motion.button>

          {/* Hint Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-white/50 mt-6 text-sm md:text-base"
          >
            Choose your favorite music to begin the celebration
          </motion.p>
        </motion.div>

        {/* Floating Mini Cards */}
        {[
          { emoji: '🎊', delay: 2, x: -150, y: -100 },
          { emoji: '🎈', delay: 2.3, x: 150, y: -80 },
          { emoji: '🎁', delay: 2.6, x: -130, y: 120 },
          { emoji: '⭐', delay: 2.9, x: 140, y: 100 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, type: 'spring' }}
            className="absolute glass rounded-2xl p-4 hidden md:block"
            style={{
              left: `calc(50% + ${item.x}px)`,
              top: `calc(50% + ${item.y}px)`,
            }}
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              {item.emoji}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WelcomeScreen