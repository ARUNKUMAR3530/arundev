import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, GraduationCap, Code2, Link2, ExternalLink } from 'lucide-react';

/* ─── Data ─── */
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'm.arunkumar4700@gmail.com',
    href: 'mailto:m.arunkumar4700@gmail.com',
    isLink: true,
    color: '#34d399',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pudukkottai, Tamil Nadu',
    href: null,
    isLink: false,
    color: '#3b82f6',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech IT — Salem College of Engineering & Technology',
    subValue: 'Expected Graduation: June 2026',
    href: null,
    isLink: false,
    color: '#a78bfa',
  },
];

const socialLinks = [
  {
    icon: Code2,
    label: 'GitHub',
    href: 'https://github.com',
    color: '#e2e8f0',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arunkumar-m3035',
    color: '#3b82f6',
  },
];

/* ─── Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ─── Contact Info Card ─── */
function InfoCard({ item }) {
  const content = (
    <motion.div
      variants={itemVariants}
      whileHover={item.isLink ? { x: 4 } : {}}
      className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 ${item.isLink ? 'cursor-pointer group' : ''
        }`}
      style={{
        background: 'rgba(15, 23, 42, 0.5)',
        border: `1px solid ${item.color}20`,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
      >
        <item.icon size={18} style={{ color: item.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-600 mb-1 uppercase tracking-wider">{item.label}</p>
        <p
          className={`text-sm font-medium break-all transition-colors duration-300 ${item.isLink ? 'group-hover:text-emerald-400' : 'text-slate-200'
            }`}
          style={item.isLink ? { color: '#34d399' } : {}}
        >
          {item.isLink && (
            <span
              className="inline-block mr-1.5"
              style={{
                textShadow: '0 0 12px rgba(52,211,153,0.5)',
              }}
            >
              ✦
            </span>
          )}
          {item.value}
        </p>
        {item.subValue && (
          <p className="text-xs text-slate-600 mt-1">{item.subValue}</p>
        )}
      </div>
      {item.isLink && (
        <ExternalLink size={14} className="text-slate-700 group-hover:text-emerald-400 transition-colors mt-1 flex-shrink-0" />
      )}
    </motion.div>
  );

  return item.isLink ? (
    <a href={item.href}>{content}</a>
  ) : (
    content
  );
}

/* ─── Main Component ─── */
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer id="contact" ref={ref} className="relative pt-28 pb-16 px-6 overflow-hidden">
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(52,211,153,0.3), rgba(59,130,246,0.3), transparent)',
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(52, 211, 153, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.3em] text-emerald-500 uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Let's Collaborate —
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Ready to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #34d399, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Build Together?
            </span>
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            I'm open to freelance projects, internships, and full-time roles. Let's turn
            your idea into a production-ready product.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-3 mb-12"
        >
          {contactInfo.map((item) => (
            <InfoCard key={item.label} item={item} />
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-4 mb-16"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: `1px solid ${social.color}25`,
                color: social.color,
                backdropFilter: 'blur(12px)',
              }}
            >
              <social.icon size={16} />
              {social.label}
            </motion.a>
          ))}

          {/* Primary CTA */}
          <motion.a
            href="mailto:m.arunkumar4700@gmail.com"
            whileHover={{
              scale: 1.06,
              boxShadow: '0 0 30px rgba(52, 211, 153, 0.4)',
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #34d399, #3b82f6)' }}
          >
            <Mail size={16} />
            Send an Email
          </motion.a>
        </motion.div>

        {/* Footer bottom bar */}
        <div
          className="pt-8 text-center"
          style={{ borderTop: '1px solid rgba(148, 163, 184, 0.06)' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-slate-700 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © 2026{' '}
            <span className="text-emerald-600">ARUNKUMAR M</span>
            {' '}· Built with React + Tailwind + Framer Motion
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-slate-800 text-xs mt-2"
          >
            Designed & Developed with ♥ in Tamil Nadu, India
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
