import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaPlay, FaPause, FaMusic, FaExchangeAlt, FaChevronUp, FaChevronDown, FaVolumeUp, FaVolumeMute, FaStepForward, FaStepBackward } from 'react-icons/fa'

const MusicControls = ({ 
  isPlaying, 
  songName, 
  songColor, 
  onToggle, 
  onChange,
  currentSongIndex,
  totalSongs,
  onNext,
  onPrevious,
  volume,
  onVolumeChange,
  isMuted,
  onMuteToggle
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 w-80 md:w-96"
    >
      <div className="glass-strong rounded-3xl shadow-2xl overflow-hidden glow-hover">
        {/* Mini Player */}
        <div
          className="flex items-center gap-4 p-5 cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {/* Animated Disc */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: 3,
              repeat: isPlaying ? Infinity : 0,
              ease: 'linear',
            }}
            className={`relative w-14 h-14 bg-gradient-to-br ${songColor} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
          >
            <FaMusic className="text-white text-lg" />
            
            {/* Pulse Ring */}
            {isPlaying && (
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${songColor}`}
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            )}
          </motion.div>

          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-base truncate">
              {songName}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-pink-300 text-sm">
                {isPlaying ? '♪ Now Playing' : '⏸ Paused'}
              </p>
              {isPlaying && (
                <div className="flex gap-0.5 items-end">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-pink-400 rounded-full"
                      animate={{ height: [3, 10, 3] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            <p className="text-white/40 text-xs mt-1">
              Track {currentSongIndex + 1} of {totalSongs}
            </p>
          </div>

          {/* Expand Icon */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            className="text-white/60"
          >
            <FaChevronUp className="text-xl" />
          </motion.div>
        </div>

        {/* Expanded Controls */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10"
            >
              <div className="p-6 space-y-6">
                {/* Volume Control */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onMuteToggle}
                        className="hover:text-pink-400 transition-colors"
                      >
                        {isMuted ? (
                          <FaVolumeMute className="text-xl" />
                        ) : (
                          <FaVolumeUp className="text-xl" />
                        )}
                      </motion.button>
                      <span className="text-sm font-semibold">Volume</span>
                    </div>
                    <span className="text-white/60 text-sm font-mono">
                      {isMuted ? '0' : volume}%
                    </span>
                  </div>

                  {/* Volume Slider */}
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => onVolumeChange(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, 
                          rgb(236, 72, 153) 0%, 
                          rgb(236, 72, 153) ${isMuted ? 0 : volume}%, 
                          rgba(255,255,255,0.1) ${isMuted ? 0 : volume}%, 
                          rgba(255,255,255,0.1) 100%)`
                      }}
                    />
                  </div>

                  {/* Volume Bar Indicators */}
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-1.5 rounded-full transition-all duration-200 ${
                          !isMuted && i < Math.floor(volume / 10) 
                            ? 'bg-pink-400' 
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Playback Controls */}
                <div className="flex items-center justify-center gap-4">
                  {/* Previous Track */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onPrevious}
                    className="text-white/70 hover:text-pink-400 transition-colors p-2"
                    title="Previous Song"
                  >
                    <FaStepBackward className="text-2xl" />
                  </motion.button>

                  {/* Play/Pause */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onToggle}
                    className={`relative w-16 h-16 bg-gradient-to-r ${songColor} rounded-full flex items-center justify-center shadow-xl`}
                  >
                    {isPlaying ? (
                      <FaPause className="text-white text-2xl" />
                    ) : (
                      <FaPlay className="text-white text-2xl ml-1" />
                    )}
                    
                    {/* Pulse Effect */}
                    {isPlaying && (
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${songColor}`}
                        animate={{
                          scale: [1, 1.4],
                          opacity: [0.7, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </motion.button>

                  {/* Next Track */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onNext}
                    className="text-white/70 hover:text-pink-400 transition-colors p-2"
                    title="Next Song"
                  >
                    <FaStepForward className="text-2xl" />
                  </motion.button>
                </div>

                {/* Additional Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {/* Change Song Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onChange}
                    className="flex items-center gap-2 text-white/70 hover:text-pink-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full"
                  >
                    <FaExchangeAlt className="text-lg" />
                    <span className="text-sm font-semibold">Change Track</span>
                  </motion.button>

                  {/* Visualizer */}
                  <div className="flex gap-1 items-end h-8">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1.5 bg-gradient-to-t ${songColor} rounded-full`}
                        animate={{
                          height: isPlaying ? [10, 30, 10] : 10,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: isPlaying ? Infinity : 0,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress Info */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/40">
                    <span>Playing</span>
                    <span>Loop Mode ∞</span>
                  </div>
                  <div className="glass rounded-full h-1.5 overflow-hidden">
                    {isPlaying && (
                      <motion.div
                        className={`h-full bg-gradient-to-r ${songColor} rounded-full`}
                        animate={{ width: ['0%', '100%'] }}
                        transition={{
                          duration: 60,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default MusicControls