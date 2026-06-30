import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
      caption: 'Amazing Birthday 2020 🎂',
    },
    {
      url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800',
      caption: 'Fun Times Together 🎉',
    },
    {
      url: 'https://images.unsplash.com/photo-1513151233558-d860c5398e70?w=800',
      caption: 'Celebration Moments 🎊',
    },
    {
      url: 'https://images.unsplash.com/photo-1481162854517-d9e353af153d?w=800',
      caption: 'Sweet Memories 🍰',
    },
    {
      url: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
      caption: 'Happy Times 😊',
    },
    {
      url: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?w=800',
      caption: 'Best Friends Forever 💕',
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
      caption: 'Party Time 🥳',
    },
    {
      url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800',
      caption: 'Joyful Celebrations 🎈',
    },
  ]

  return (
    <section className="py-20 px-4" id="gallery">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-fancy text-center text-white mb-16"
        >
          Memory Lane 📸
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <p className="text-white text-lg font-semibold mb-2 text-center">
                  {image.caption}
                </p>
                <FaExpand className="text-white text-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-top-16 md:-right-16 text-white bg-pink-500 hover:bg-pink-600 p-4 rounded-full shadow-2xl transition-colors z-10"
              >
                <FaTimes className="text-2xl" />
              </motion.button>
              
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-2xl shadow-2xl max-h-[80vh] object-contain"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xl md:text-2xl text-center mt-6 font-semibold bg-gradient-to-r from-pink-500 to-purple-600 py-3 px-6 rounded-full inline-block"
              >
                {selectedImage.caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery