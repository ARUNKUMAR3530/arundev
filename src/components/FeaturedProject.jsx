import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Globe, Users, CheckCircle2 } from 'lucide-react';

/* ─── Data ─── */
const project = {
  title: 'GPS-Based Complaint Redressal System',
  subtitle: 'Live & Deployed',
  link: 'https://gps-based-complaint-redressal-syste.vercel.app',
  description:
    'Developed a full-stack web application enabling citizens to report and track civic complaints with real-time GPS location mapping. Implemented complete complaint lifecycle: registration → admin review → status tracking → resolution with secure MySQL database.',
  badges: [
    { icon: Globe, label: 'Live on Vercel', color: '#34d399' },
    { icon: Users, label: 'Handles 100+ Concurrent Users', color: '#3b82f6' },
  ],
  tech: ['Java', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'JDBC', 'Vercel'],
  features: [
    'Real-time GPS location mapping',
    'Complete complaint lifecycle management',
    'Admin review & status tracking dashboard',
    'Secure MySQL database with JDBC',
  ],
};

/* ─── Variants ─── */
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const mockupVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
  },
};

/* ─── Browser Mockup Frame ─── */
function BrowserMockup() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl animate-float"
      style={{
        border: '1px solid rgba(52, 211, 153, 0.2)',
        boxShadow:
          '0 0 40px rgba(52, 211, 153, 0.1), 0 25px 50px rgba(0,0,0,0.5)',
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: 'rgba(15, 23, 42, 0.95)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>
        <div
          className="flex-1 mx-3 py-1 px-3 rounded text-xs text-slate-500 truncate"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          gps-based-complaint-redressal-syste.vercel.app
        </div>
        <Globe size={14} className="text-emerald-500" />
      </div>

      {/* App Preview */}
      <div
        className="p-6 min-h-72"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0d1f35 100%)' }}
      >
        {/* Fake app UI */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="text-xs font-bold px-3 py-1 rounded-full text-emerald-400"
            style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)' }}
          >
            GPS Complaint System
          </div>
          <div className="text-xs text-slate-500">Admin View</div>
        </div>

        {/* Map placeholder */}
        <div
          className="relative rounded-xl mb-4 overflow-hidden"
          style={{
            height: '120px',
            background: 'linear-gradient(135deg, #0a2a1a, #0a1a2a)',
            border: '1px solid rgba(52,211,153,0.15)',
          }}
        >
          {/* Fake map dots */}
          {[
            { x: 30, y: 40, color: '#34d399' },
            { x: 55, y: 60, color: '#3b82f6' },
            { x: 70, y: 30, color: '#f59e0b' },
            { x: 45, y: 75, color: '#34d399' },
          ].map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                background: dot.color,
                boxShadow: `0 0 8px ${dot.color}`,
              }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(52,211,153,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <p className="absolute bottom-2 left-2 text-xs text-slate-600">
            📍 Pudukkottai Region
          </p>
        </div>

        {/* Complaint cards */}
        {[
          { id: '#001', status: 'Resolved', type: 'Road Damage', color: '#34d399' },
          { id: '#002', status: 'In Review', type: 'Water Leak', color: '#f59e0b' },
          { id: '#003', status: 'Pending', type: 'Street Light', color: '#94a3b8' },
        ].map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="flex items-center justify-between py-2 px-3 rounded-lg mb-2 text-xs"
            style={{
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(148,163,184,0.05)',
            }}
          >
            <span
              className="font-mono text-slate-500"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {c.id}
            </span>
            <span className="text-slate-300">{c.type}</span>
            <span className="font-semibold" style={{ color: c.color }}>
              {c.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function FeaturedProject() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(52, 211, 153, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] text-emerald-500 uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Featured Case Study —
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            From Idea to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #34d399, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Production
            </span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text side */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ y: parallaxY }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: `${badge.color}15`,
                    border: `1px solid ${badge.color}40`,
                    color: badge.color,
                  }}
                >
                  <badge.icon size={12} />
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
              {project.title}
            </h3>
            <p className="text-emerald-400 text-sm font-medium mb-5">
              ✦ {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              {project.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#34d399' }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                boxShadow: '0 0 25px rgba(52, 211, 153, 0.35)',
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 text-sm transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #34d399 0%, #3b82f6 100%)' }}
            >
              <Globe size={16} />
              View Live Project
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>

          {/* Right: Mockup */}
          <motion.div
            variants={mockupVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <BrowserMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
