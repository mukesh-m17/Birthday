import { motion } from 'framer-motion'

const BgmSelector = ({ bgmList, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl px-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center glow"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl md:text-7xl mb-4"
          >
            🎵
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-fancy font-bold text-white mb-3">
            Choose Your BGM
          </h2>
          
          <p className="text-pink-200 text-base md:text-lg">
            Select the perfect soundtrack for this celebration
          </p>
        </motion.div>

        {/* BGM Options */}
        <div className="space-y-4">
          {bgmList.map((bgm, index) => (
            <motion.button
              key={bgm.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
              whileHover={{
                scale: 1.03,
                x: 10,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(bgm)}
              className="w-full glass-card rounded-2xl p-5 md:p-6 flex items-center gap-5 text-left group hover:glass-strong transition-all duration-300 glow-hover"
            >
              {/* Emoji */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${bgm.color} rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg`}
              >
                {bgm.emoji}
              </motion.div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg md:text-xl font-bold mb-1 truncate">
                  {bgm.name}
                </h3>
                <p className="text-pink-300 text-sm md:text-base">
                  Tap to play this song
                </p>
              </div>

              {/* Arrow */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`text-white text-2xl md:text-3xl opacity-60 group-hover:opacity-100`}
              >
                ▶
              </motion.div>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${bgm.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
            </motion.button>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/40 text-sm mt-6"
        >
          💡 Music will play in the background throughout the experience
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default BgmSelector