import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import profileImage from "../../imports/image-3.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-stone-50 via-white to-stone-100">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-stone-200/50 rounded-full mb-6"
            >
              <span className="text-sm text-stone-600">Mahasiswa Teknik Informatika</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-stone-500 text-2xl md:text-3xl block mb-2">Hai, Saya</span>
              <span className="text-4xl md:text-6xl lg:text-7xl text-stone-800 block">
                Syallom Adinda
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl text-stone-600 mb-6"
            >
              UI/UX Designer & Software Engineer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-stone-600 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Mahasiswa Teknik Informatika dengan konsentrasi Software Engineering 
              yang passionate dalam menciptakan aplikasi user-friendly dan inovatif. 
              Menggabungkan design thinking dengan software development untuk 
              membangun solusi digital yang bermakna.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all duration-300 hover:shadow-lg"
              >
                Hubungi Saya
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-stone-800 rounded-full border-2 border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg"
              >
                Lihat Karya
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={profileImage}
                  alt="Syallom Adinda Sriyanto - Portfolio"
                  className="w-full max-w-md rounded-3xl"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-stone-200 rounded-full opacity-50 blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-stone-300 rounded-full opacity-30 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-stone-400"
          >
            <span className="text-sm mb-2">Scroll ke bawah</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}