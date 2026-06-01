import { motion } from 'framer-motion'

export default function CurriculumTimeline({ stages }) {
  return (
    <div className="relative pt-10 pb-8">
      <div className="absolute inset-x-0 top-24 h-px bg-border/70" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative rounded-3xl border border-white/10 bg-card/90 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="absolute -top-3 left-6 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.55)]" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{stage.id.replace(/\b\w/g, (c) => c.toUpperCase())}</p>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{stage.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{stage.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/80">
              {stage.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
