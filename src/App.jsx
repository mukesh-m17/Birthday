import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import WelcomeScreen from './components/WelcomeScreen'
import BgmSelector from './components/BgmSelector'
import Hero from './components/Hero'
import PhotoGallery from './components/PhotoGallery'
import Wishes from './components/Wishes'
import Confetti from './components/Confetti'
import MusicControls from './components/MusicControls'

function App() {
  const [loading, setLoading] = useState(true)
  const [started, setStarted] = useState(false)
  const [showBgmSelector, setShowBgmSelector] = useState(false)
  const [selectedBgm, setSelectedBgm] = useState(null)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  // 4 Songs Configuration
  const bgmList = [
    { 
      id: 1, 
      name: 'Nee Otha Sollu Sollu', 
      emoji: '🎂', 
      src: '/music/song1.mp3', 
      color: 'from-pink-500 to-rose-600',
      description: 'Favourite song 1'
    },
    { 
      id: 2, 
      name: 'Naan Un Alagunile', 
      emoji: '🎉', 
      src: '/music/song2.mp3', 
      color: 'from-purple-500 to-indigo-600',
      description: 'Favourite music 2'
    },
    { 
      id: 3, 
      name: 'Ragasiya Kanavugal', 
      emoji: '🥳', 
      src: '/music/song3.mp3', 
      color: 'from-blue-500 to-cyan-600',
      description: 'Favourite song 3'
    },
    { 
      id: 4, 
      name: 'Birthday Beats', 
      emoji: '🎵', 
      src: '/music/song4.mp3', 
      color: 'from-orange-500 to-yellow-600',
      description: 'Fun birthday melody'
    },
  ]

  // Update volume when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const handleStartClick = () => {
    setStarted(true)
    setShowBgmSelector(true)
  }

  const handleBgmSelect = (bgm) => {
    const index = bgmList.findIndex(song => song.id === bgm.id)
    setCurrentSongIndex(index)
    setSelectedBgm(bgm)
    setShowBgmSelector(false)
    setShowConfetti(true)
    setIsPlaying(true)

    if (audioRef.current) {
      audioRef.current.src = bgm.src
      audioRef.current.volume = isMuted ? 0 : volume / 100
      audioRef.current.play().catch(err => console.log('Play error:', err))
    }

    setTimeout(() => setShowConfetti(false), 6000)
  }

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const changeBgm = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setIsPlaying(false)
    setShowBgmSelector(true)
  }

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % bgmList.length
    const nextSong = bgmList[nextIndex]
    setCurrentSongIndex(nextIndex)
    setSelectedBgm(nextSong)
    
    if (audioRef.current) {
      audioRef.current.src = nextSong.src
      audioRef.current.volume = isMuted ? 0 : volume / 100
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log('Play error:', err))
      }
    }
  }

  const handlePrevious = () => {
    const prevIndex = currentSongIndex === 0 ? bgmList.length - 1 : currentSongIndex - 1
    const prevSong = bgmList[prevIndex]
    setCurrentSongIndex(prevIndex)
    setSelectedBgm(prevSong)
    
    if (audioRef.current) {
      audioRef.current.src = prevSong.src
      audioRef.current.volume = isMuted ? 0 : volume / 100
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log('Play error:', err))
      }
    }
  }

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  // Auto-play next song when current ends
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      handleNext()
    }

    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [currentSongIndex, isPlaying])

  return (
    <div className="relative min-h-screen animated-gradient">
      <audio ref={audioRef} preload="auto" />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>

      {!loading && (
        <>
          {selectedBgm && (
            <MusicControls
              isPlaying={isPlaying}
              songName={selectedBgm.name}
              songColor={selectedBgm.color}
              onToggle={togglePlay}
              onChange={changeBgm}
              currentSongIndex={currentSongIndex}
              totalSongs={bgmList.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
              volume={volume}
              onVolumeChange={handleVolumeChange}
              isMuted={isMuted}
              onMuteToggle={handleMuteToggle}
            />
          )}

          {!started && (
            <WelcomeScreen onStart={handleStartClick} />
          )}

          <AnimatePresence>
            {showBgmSelector && (
              <BgmSelector bgmList={bgmList} onSelect={handleBgmSelect} />
            )}
          </AnimatePresence>

          {selectedBgm && !showBgmSelector && (
            <div>
              <Hero />
              <PhotoGallery />
              <Wishes />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App