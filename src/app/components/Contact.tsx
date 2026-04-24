import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Globe, Github, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "syallom.adindasry06@email.com",
    link: "mailto:syallom.adindasry06@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "syallom-adinda",
    link: "https://linkedin.com/in/syallom-adinda",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "syallom.design",
    link: "https://syallom.design",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@syallomadindasry",
    link: "https://github.com/syallomadindasry",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Kontak</h2>
          <h3 className="text-4xl md:text-5xl text-stone-800 mb-4">Mari Bekerja Sama</h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Punya ide projek atau ingin berkolaborasi? Jangan ragu untuk menghubungi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-stone-50 p-8 rounded-2xl">
              <h4 className="text-2xl text-stone-800 mb-6">Hubungi Saya</h4>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-stone-800 transition-colors">
                        <Icon className="w-5 h-5 text-stone-700 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-stone-500">{item.label}</p>
                        <p className="text-stone-700">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-800 to-stone-700 p-8 rounded-2xl text-white">
              <h4 className="text-xl mb-3">Terbuka untuk Peluang</h4>
              <p className="text-stone-200 mb-4">
                Saya terbuka untuk kesempatan magang, projek kolaborasi, atau freelance. 
                Mari belajar dan berkembang bersama!
              </p>
              <div className="flex items-center gap-2 text-stone-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">Siap Berkolaborasi</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-stone-700 mb-2">
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-stone-700 mb-2">
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-stone-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-400 transition-colors"
                  placeholder="Pertanyaan Projek"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-stone-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-stone-400 transition-colors resize-none"
                  placeholder="Ceritakan tentang projek Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-stone-800 text-white rounded-xl hover:bg-stone-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Kirim Pesan</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}