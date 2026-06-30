import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebook, url: '#', color: 'hover:text-blue-500', label: 'Facebook' },
    { Icon: FaInstagram, url: '#', color: 'hover:text-pink-500', label: 'Instagram' },
    { Icon: FaTwitter, url: '#', color: 'hover:text-sky-400', label: 'Twitter' },
    { Icon: FaLinkedin, url: '#', color: 'hover:text-blue-600', label: 'LinkedIn' },
    { Icon: FaGithub, url: '#', color: 'hover:text-gray-400', label: 'GitHub' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-fancy text-white mb-6">
            Stay Connected! 💫
          </h3>
          
          <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap">
            {socialLinks.map(({ Icon, url, color, label }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`text-white text-2xl md:text-3xl ${color} transition-all duration-300 bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-sm hover:bg-white/20`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/20 my-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white text-base md:text-lg flex items-center justify-center gap-2 flex-wrap mb-4">
            Made with 
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            for an amazing friend
          </p>
          
          <p className="text-gray-300 text-sm md:text-base">
            © {currentYear} All Rights Reserved | Happy Birthday! 🎉
          </p>
        </motion.div>

        <div className="mt-8 flex justify-center gap-3 md:gap-4 flex-wrap">
          {['🎂', '🎈', '🎁', '🎉', '🎊', '✨', '🌟', '💝'].map((emoji, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2 + (index * 0.2),
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="text-3xl md:text-4xl cursor-pointer"
              whileHover={{ scale: 1.5 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-white/80 text-sm md:text-base italic max-w-2xl mx-auto">
            "Count your life by smiles, not tears. Count your age by friends, not years." 
            <br />
            Happy Birthday! 🎊
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer