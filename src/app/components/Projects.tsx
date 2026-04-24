import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Code, X, Maximize2 } from "lucide-react";

const projects = [
  {
    title: "SIGUDOB",
    subtitle: "Sistem Informasi Gudang Obat",
    description: "Sistem informasi manajemen gudang obat berbasis web untuk Dinas Kesehatan dan Puskesmas. Dilengkapi fitur dashboard real-time, distribusi FEFO, manajemen stok, permintaan antar unit, dan ekspor laporan PDF.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&w=1080&q=80",
    role: "Full-stack Developer & UI Designer",
    tags: ["React 18", "Vite", "PHP", "MySQL", "REST API", "jsPDF"],
    color: "from-blue-50 to-sky-100",
    hasPreview: true,
    previewFile: "/sigudob-landing.html",
    featured: true,
  },
  {
    title: "Aplikasi Mobile HealthCare",
    subtitle: "",
    description: "Projek akhir mata kuliah Mobile Programming. Aplikasi manajemen kesehatan dengan fitur booking appointment, reminder obat, dan tracking kesehatan harian.",
    image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzc2MzIyMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    role: "UI/UX Designer & Developer",
    tags: ["Flutter", "Figma", "Firebase"],
    color: "from-blue-50 to-blue-100",
    hasPreview: false,
    previewFile: "",
    featured: false,
  },
  {
    title: "E-Commerce Web Platform",
    subtitle: "",
    description: "Projek Software Engineering. Website e-commerce dengan fitur keranjang belanja, payment gateway integration, dan admin dashboard untuk manajemen produk.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc2MzU2MTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    role: "Full-stack Developer",
    tags: ["React", "Node.js", "MySQL"],
    color: "from-purple-50 to-purple-100",
    hasPreview: false,
    previewFile: "",
    featured: false,
  },
  {
    title: "Campus Task Manager",
    subtitle: "",
    description: "Aplikasi manajemen tugas kuliah dengan fitur deadline reminder, collaboration, dan progress tracking. Digunakan oleh 50+ mahasiswa di kampus.",
    image: "https://images.unsplash.com/photo-1759296682393-a5c3695080fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBVSSUyMFVYJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NjM1NjEwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    role: "UI/UX Designer & Developer",
    tags: ["Figma", "React", "Firebase"],
    color: "from-green-50 to-green-100",
    hasPreview: false,
    previewFile: "",
    featured: false,
  },
  {
    title: "Food Ordering App",
    subtitle: "",
    description: "Aplikasi pemesanan makanan kampus dengan real-time order tracking dan digital payment. Projek kolaborasi dengan UKM Kewirausahaan kampus.",
    image: "https://images.unsplash.com/photo-1763568258535-fa1066506571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzYzNTYxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    role: "Lead Designer & Developer",
    tags: ["Flutter", "Firebase", "Midtrans"],
    color: "from-orange-50 to-orange-100",
    hasPreview: false,
    previewFile: "",
    featured: false,
  },
];

type Project = (typeof projects)[0];

function PreviewModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-sm text-stone-500 font-medium">
              {project.title} — Landing Page Preview
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.previewFile}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-stone-200 transition-colors"
              title="Buka di tab baru"
            >
              <Maximize2 className="w-4 h-4 text-stone-500" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-stone-200 transition-colors"
            >
              <X className="w-4 h-4 text-stone-500" />
            </button>
          </div>
        </div>

        {/* iFrame Preview */}
        <iframe
          src={project.previewFile}
          title={`${project.title} Preview`}
          className="w-full border-0"
          style={{ height: "calc(100% - 49px)" }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl text-stone-800 mb-4">Projek Unggulan</h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Pilihan projek yang menampilkan kemampuan desain dan pengembangan saya
          </p>
        </motion.div>

        {/* Featured Project — SIGUDOB */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 mb-8"
          >
            <div className="md:grid md:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 md:h-auto overflow-hidden min-h-64">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${featuredProject.color} opacity-30`}
                />
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    <span className="w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse" />
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Info side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-1">
                  <span className="text-xs uppercase tracking-widest text-blue-500 font-semibold">
                    {featuredProject.subtitle}
                  </span>
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-3xl text-stone-800 font-semibold">{featuredProject.title}</h4>
                  <div className="flex gap-2">
                    {featuredProject.hasPreview && (
                      <button
                        onClick={() => setPreviewProject(featuredProject)}
                        className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        title="Preview Landing Page"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                      </button>
                    )}
                    <button className="p-2 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors">
                      <Code className="w-4 h-4 text-stone-600" />
                    </button>
                  </div>
                </div>

                <p className="text-stone-600 leading-relaxed mb-4">{featuredProject.description}</p>

                <div className="mb-4">
                  <span className="text-sm text-stone-500 uppercase tracking-wide">Peran:</span>
                  <p className="text-stone-700">{featuredProject.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {featuredProject.hasPreview && (
                  <button
                    onClick={() => setPreviewProject(featuredProject)}
                    className="inline-flex items-center gap-2 w-fit px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat Landing Page
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid — Coming Soon */}
        <div className="grid md:grid-cols-2 gap-8">
          {regularProjects.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100"
            >
              {/* Placeholder image area */}
              <div className="relative h-64 bg-stone-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-200" />
                <div className="relative flex flex-col items-center gap-3 select-none">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                    <Code className="w-6 h-6 text-stone-400" />
                  </div>
                  <span className="text-stone-400 text-sm tracking-widest uppercase font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-8">
                <div className="h-6 w-2/3 bg-stone-100 rounded-full mb-4 animate-pulse" />
                <div className="space-y-2 mb-6">
                  <div className="h-3 w-full bg-stone-100 rounded-full animate-pulse" />
                  <div className="h-3 w-5/6 bg-stone-100 rounded-full animate-pulse" />
                  <div className="h-3 w-4/6 bg-stone-100 rounded-full animate-pulse" />
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-7 w-16 bg-stone-100 rounded-full animate-pulse" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewProject && (
        <PreviewModal project={previewProject} onClose={() => setPreviewProject(null)} />
      )}
    </section>
  );
}
