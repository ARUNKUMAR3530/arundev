import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Server,
  Monitor,
  Database,
  GitBranch,
  Cpu,
  Globe,
  HardDrive,
  Wrench,
} from 'lucide-react';

/* ─── Skills Data ─── */
const skillCards = [
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: Server,
    iconColor: '#34d399',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    borderGlow: 'rgba(52, 211, 153, 0.2)',
    gridArea: 'col-span-12 md:col-span-7',
    skills: [
      'Core Java',
      'OOP Concepts',
      'Collections Framework',
      'Exception Handling',
      'Multithreading Basics',
    ],
    description:
      'Building solid server-side logic and scalable architecture using Java\'s robust ecosystem.',
    accent: '#34d399',
  },
  {
    id: 'frontend',
    title: 'Frontend Interfaces',
    icon: Monitor,
    iconColor: '#3b82f6',
    gradient: 'from-blue-500/10 to-indigo-500/5',
    borderGlow: 'rgba(59, 130, 246, 0.2)',
    gridArea: 'col-span-12 md:col-span-5',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Async/Await', 'ES6+'],
    description: 'Crafting responsive, interactive UIs with modern JavaScript standards.',
    accent: '#3b82f6',
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: Database,
    iconColor: '#a78bfa',
    gradient: 'from-violet-500/10 to-purple-500/5',
    borderGlow: 'rgba(167, 139, 250, 0.2)',
    gridArea: 'col-span-12 md:col-span-5',
    skills: ['SQL', 'Complex Joins', 'Subqueries', 'Normalization', '1NF / 2NF / 3NF'],
    description: 'Designing normalized schemas and optimizing queries for performance.',
    accent: '#a78bfa',
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: GitBranch,
    iconColor: '#f59e0b',
    gradient: 'from-amber-500/10 to-orange-500/5',
    borderGlow: 'rgba(245, 158, 11, 0.2)',
    gridArea: 'col-span-12 md:col-span-7',
    skills: ['Git & GitHub', 'Vercel', 'Docker Basics', 'CI/CD Pipeline Concepts'],
    description: 'Deploying and managing applications with modern DevOps practices.',
    accent: '#f59e0b',
  },
];

/* ─── Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Skill Tag ─── */
function SkillTag({ label, accent }) {
  return (
    <span
      className="px-3 py-1 rounded-md text-xs font-medium"
      style={{
        background: `${accent}12`,
        border: `1px solid ${accent}30`,
        color: accent,
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Bento Card ─── */
function BentoCard({ card, index }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.025,
        boxShadow: `0 0 30px ${card.borderGlow}, 0 20px 40px rgba(0,0,0,0.3)`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl p-6 cursor-default ${card.gridArea}`}
      style={{
        background: `linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%)`,
        border: `1px solid ${card.borderGlow}`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Background gradient decoration */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${card.accent}18 0%, transparent 70%)`,
          transform: 'translate(30%, -30%)',
        }}
      />

      {/* Card number */}
      <div
        className="absolute top-4 right-4 text-xs font-mono opacity-20"
        style={{ color: card.accent, fontFamily: "'JetBrains Mono', monospace" }}
      >
        0{index + 1}
      </div>

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}30` }}
        >
          <card.icon size={20} style={{ color: card.accent }} />
        </div>
        <h3 className="font-bold text-white text-base">{card.title}</h3>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm mb-5 leading-relaxed">{card.description}</p>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {card.skills.map((skill) => (
          <SkillTag key={skill} label={skill} accent={card.accent} />
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${card.accent}50, transparent)`,
        }}
      />
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function SkillsBentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Capabilities —
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-slate-500 mt-4 text-sm max-w-md mx-auto">
            A full-spectrum skill set from backend architecture to deployment pipelines.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-12 gap-4"
        >
          {skillCards.map((card, i) => (
            <BentoCard key={card.id} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
