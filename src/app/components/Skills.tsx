import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Figma, Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "React 18 + Vite", level: 85 },
      { name: "JavaScript (ES6+)", level: 83 },
      { name: "React Router", level: 82 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: [
      { name: "PHP (REST API)", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "JWT Auth", level: 78 },
      { name: "Axios / Fetch", level: 83 },
    ],
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    skills: [
      { name: "Figma", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "Riset Pengguna", level: 80 },
      { name: "Responsive Design", level: 84 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Ekosistem",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "jsPDF / Laporan PDF", level: 80 },
      { name: "Vite / Build Tools", level: 82 },
      { name: "Lucide React", level: 85 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Keahlian</h2>
          <h3 className="text-4xl md:text-5xl text-stone-800 mb-4">Yang Saya Kuasai</h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Kumpulan keahlian yang beragam menggabungkan desain kreatif dengan pengembangan teknis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Icon className="w-6 h-6 text-stone-700" />
                  </div>
                  <h4 className="text-xl text-stone-800">{category.title}</h4>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-stone-700">{skill.name}</span>
                        <span className="text-stone-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-stone-700 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}