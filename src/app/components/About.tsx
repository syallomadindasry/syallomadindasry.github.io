import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import profileImage from "../../imports/image.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="About Syallom"
                className="w-full rounded-3xl shadow-xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-stone-200 rounded-full opacity-50 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-300 rounded-full opacity-30 -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Tentang Saya</h2>
            <h3 className="text-4xl md:text-5xl text-stone-800 mb-6">
              Mahasiswa & Aspiring Software Engineer
            </h3>
            
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Saya Syallom Adinda Sriyanto, mahasiswa Teknik Informatika dengan 
                konsentrasi Software Engineering yang memiliki passion kuat dalam UI/UX 
                Design dan App Development. Sebagai mahasiswa, saya aktif mengembangkan 
                keterampilan melalui berbagai projek akademis dan magang industri.
              </p>
              
              <p>
                Melalui perkuliahan dan pengalaman magang, saya telah mempelajari 
                full-cycle software development mulai dari user research, prototyping, 
                hingga implementasi aplikasi. Saya percaya bahwa kombinasi antara 
                pemahaman teknis yang solid dan kepekaan terhadap user experience adalah 
                kunci untuk menciptakan software yang tidak hanya berfungsi dengan baik, 
                tetapi juga dicintai oleh penggunanya.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl text-stone-800 mb-1">1</div>
                <div className="text-sm text-stone-500">Projek</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-stone-800 mb-1">0.0</div>
                <div className="text-sm text-stone-500">IPK</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-stone-800 mb-1">3.5+</div>
                <div className="text-sm text-stone-500">Tahun Belajar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}