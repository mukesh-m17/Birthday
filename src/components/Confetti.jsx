import { motion } from 'framer-motion'

const Confetti = () => {
  const colors = ['#FF6B9D', '#FFD700', '#FF69B4', '#9B59B6', '#3498DB', '#2ECC71', '#FF4500', '#FFC3A0']

  const pieces = [...Array(100)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 6 + Math.random() * 10,
    isCircle: Math.random() > 0.5,
  }))

  const emojis = ['🎉', '🎊', '🎂', '🎈', '🎁', '⭐', '💖', '🥳', '🍰', '✨']

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute ${piece.isCircle ? 'rounded-full' : 'rounded-sm'}`}
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            top: '-5%',
          }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: '110vh',
            opacity: [1, 1, 0],
            rotate: 360 * (2 + Math.random() * 3),
            x: [0, 80 * (Math.random() - 0.5), -80 * (Math.random() - 0.5), 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        />
      ))}

      {emojis.map((emoji, i) => (
        <motion.div
          key={`e-${i}`}
          className="absolute text-3xl md:text-5xl"
          style={{
            left: `${(i * 10) + 2}%`,
            top: '-10%',
          }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: '120vh',
            opacity: [1, 1, 0],
            rotate: 360 * 3,
            x: [0, 60 * (Math.random() - 0.5), -60 * (Math.random() - 0.5)],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.3,
            ease: 'easeIn',
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default Confetti