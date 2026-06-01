import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function SemesterCard({ card, accent, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-[0_18px_70px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)), radial-gradient(circle at top left, ${accent}20, transparent 40%)`,
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{card.semesterLabel}</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">{card.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.summary}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-sky-300/30 hover:bg-white/10"
        >
          {open ? 'Hide subjects' : 'Explore subjects'}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4 transition-all duration-300" style={{ maxHeight: open ? '1000px' : '0' }}>
        <ul className="space-y-3 text-sm text-foreground/90">
          {card.subjects.map((subject) => (
            <li key={subject} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm leading-6 transition group-hover:border-cyan-400/20">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span>{subject}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
