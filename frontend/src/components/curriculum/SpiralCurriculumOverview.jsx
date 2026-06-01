import { motion } from 'framer-motion'
import CurriculumTimeline from './CurriculumTimeline.jsx'
import { spiralOverviewStages, spiralFramework } from '../../data/curriculumConfig.js'

export default function SpiralCurriculumOverview() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-20 text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(252,211,77,0.15),transparent_18%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl rounded-[2rem] border border-white/10 bg-card/90 p-10 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.55)] backdrop-blur-3xl"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300">Spiral Curriculum</span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">{spiralFramework.hero.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{spiralFramework.hero.subtitle}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-400/40 via-transparent to-transparent opacity-60" style={{ transform: 'translateX(-50%)' }} />
          <CurriculumTimeline stages={spiralOverviewStages} />
        </div>
      </div>
    </section>
  )
}
