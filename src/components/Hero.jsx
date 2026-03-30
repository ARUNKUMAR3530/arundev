import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';

/* ─── Framer Motion variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const orbVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 2, ease: 'easeOut' },
  },
};

/* ─── Animated typed status badge ─── */
function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-emerald-400 mb-6"
      style={{
        background: 'rgba(52, 211, 153, 0.08)',
        border: '1px solid rgba(52, 211, 153, 0.25)',
      }}
    >
      <span className="relative flex h-2 w-2">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#34d399' }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ background: '#34d399' }}
        />
      </span>
      Available for Freelance &amp; Full-time Roles
    </motion.div>
  );
}

/* ─── Background Orbs ─── */
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main emerald orb */}
      <motion.div
        variants={orbVariants}
        initial="initial"
        animate="animate"
        className="animate-pulse-glow absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          top: '-200px',
          right: '-100px',
          background:
            'radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, rgba(52, 211, 153, 0.04) 50%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />
      {/* Blue accent orb */}
      <motion.div
        variants={orbVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        className="animate-pulse-glow absolute rounded-full"
        style={{
          width: '400px',
          height: '400px',
          bottom: '50px',
          left: '-80px',
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 70%)',
          filter: 'blur(1px)',
          animationDelay: '2s',
        }}
      />
      {/* Purple accent */}
      <motion.div
        variants={orbVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          top: '40%',
          left: '35%',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52, 211, 153, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52, 211, 153, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

/* ─── Floating stat cards ─── */
function FloatingStats() {
  const stats = [
    { value: '2+', label: 'Projects Deployed', icon: '🚀' },
    { value: '100+', label: 'Concurrent Users', icon: '👥' },
    { value: 'B.Tech', label: 'IT Graduate 2026', icon: '🎓' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="flex flex-wrap justify-center gap-4 mt-12"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          whileHover={{ y: -4, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3 cursor-default"
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          <span className="text-2xl">{stat.icon}</span>
          <div>
            <p
              className="text-lg font-bold"
              style={{
                background: 'linear-gradient(135deg, #34d399, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {stat.value}
            </p>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─── Main Hero Component ─── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      <BackgroundOrbs />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <StatusBadge />
          </motion.div>

          {/* Name */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Arunkumar M
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
          >
            <span className="text-white">Engineering</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #34d399 0%, #3b82f6 60%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Scalable Digital
            </span>
            <br />
            <span className="text-white">Infrastructure</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Full Stack / Backend Developer focused on building{' '}
            <span className="text-emerald-400 font-medium">robust, production-ready</span>{' '}
            applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(52, 211, 153, 0.4), 0 0 60px rgba(52, 211, 153, 0.15)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-950 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #34d399 0%, #3b82f6 100%)' }}
            >
              View Case Studies
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="glass-card group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-200 hover:text-emerald-400 transition-all duration-300"
              style={{ border: '1px solid rgba(148, 163, 184, 0.15)' }}
            >
              <Mail size={18} />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <FloatingStats />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <p className="text-xs tracking-widest uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
