import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  // UPDATE THESE CAPTIONS TO MATCH YOUR PHOTOS
  const photos = [
    { src: '/photos/photo1.jpg', caption: 'Beautiful Smile! 🌟' },
    { src: '/photos/photo2.jpg', caption: 'Special Moment 💖' },
    { src: '/photos/photo3.jpg', caption: 'Happy Times 😊' },
    { src: '/photos/photo4.jpg', caption: 'Stunning! ✨' },
    { src: '/photos/photo5.jpg', caption: 'Pure Joy 🎉' },
    { src: '/photos/photo6.jpg', caption: 'Unforgettable 🎂' },
  ]

  const openPhoto = (index) => setSelectedIndex(index)
  const closePhoto = () => setSelectedIndex(null)
  const prevPhoto = () => setSelectedIndex((prev) => prev === 0 ? photos.length - 1 : prev - 1)
  const nextPhoto = () => setSelectedIndex((prev) => prev === photos.length - 1 ? 0 : prev + 1)

  return (
    <section className="py-20 px-4" id="photos">
      <div className="max-w-7xl mx-auto">
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
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl md:text-7xl mb-4"
            >
              📸
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-fancy text-white mb-3">
              Beautiful Memories
            </h2>
            <p className="text-pink-200 text-lg">
              Celebrating you through photos
            </p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group aspect-square glass-card"
              onClick={() => openPhoto(index)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
                <p className="text-white text-xl font-bold mb-3 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </p>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-white/20 p-3 rounded-full"
                >
                  <FaExpand className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[60] flex items-center justify-center p-4"
            onClick={closePhoto}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closePhoto}
              className="absolute top-6 right-6 glass-strong hover:bg-pink-500 text-white p-4 rounded-full shadow-2xl z-10 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevPhoto() }}
              className="absolute left-4 md:left-8 glass-strong hover:bg-white/20 text-white p-4 rounded-full z-10"
            >
              <FaChevronLeft className="text-2xl" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextPhoto() }}
              className="absolute right-4 md:right-8 glass-strong hover:bg-white/20 text-white p-4 rounded-full z-10"
            >
              <FaChevronRight className="text-2xl" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 10 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="glass-strong rounded-3xl overflow-hidden p-4">
                <img
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].caption}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
                />
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <div className="glass-strong rounded-2xl px-8 py-4 inline-block">
                  <p className="text-white text-2xl md:text-3xl font-bold mb-2">
                    {photos[selectedIndex].caption}
                  </p>
                  <p className="text-white/50">
                    Photo {selectedIndex + 1} of {photos.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoGallery