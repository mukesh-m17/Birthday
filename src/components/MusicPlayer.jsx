import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaPause, FaMusic, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef(null)

  const songUrl = "/your-song.mp3" // Add your song to public folder
  const songName = "Your Favorite Song 🎵"

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
      >
        <div className="relative">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-full mb-4 right-0 glass-effect px-4 py-2 rounded-lg whitespace-nowrap shadow-xl"
              >
                <p className="text-white font-semibold text-sm">Click to play music! 🎵</p>
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white/20"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 md:p-5 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ 
                duration: 2, 
                repeat: isPlaying ? Infinity : 0, 
                ease: "linear" 
              }}
            >
              <FaMusic className="text-xl md:text-2xl" />
            </motion.div>
            
            {isPlaying ? (
              <FaPause className="text-xl md:text-2xl" />
            ) : (
              <FaPlay className="text-xl md:text-2xl ml-1" />
            )}
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isPlaying ? 1 : 0 }}
            whileHover={{ scale: isPlaying ? 1.1 : 0 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="absolute -top-14 right-0 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-full shadow-xl"
          >
            {isMuted ? (
              <FaVolumeMute className="text-lg" />
            ) : (
              <FaVolumeUp className="text-lg" />
            )}
          </motion.button>

          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full mb-4 right-0 glass-effect px-4 py-3 rounded-xl whitespace-nowrap shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <FaMusic className="text-pink-400" />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold text-sm">Now Playing</p>
                    <p className="text-gray-300 text-xs">{songName}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mt-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full"
                      animate={{
                        height: [10, 20, 10],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full bg-pink-500"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </div>
      </motion.div>

      <audio ref={audioRef} loop preload="auto">
        <source src={songUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}

export default MusicPlayer