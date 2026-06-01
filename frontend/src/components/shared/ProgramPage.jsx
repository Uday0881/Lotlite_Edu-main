import { useEffect, useMemo, useState } from 'react'
import ApplyDialog from './ApplyDialog.jsx'
import { ArrowRight, Sparkles } from 'lucide-react'
import SemesterCard from '../curriculum/SemesterCard.jsx'

export default function ProgramPage({ program }) {
  const [activeSection, setActiveSection] = useState('foundational')
  const stageEntries = useMemo(() => Object.entries(program?.spiralSemesters || {}), [program])

  useEffect(() => {
    if (!program) return
    const root = document.documentElement
    root.setAttribute('data-theme', program.theme.page || 'home')
    return () => {
      root.removeAttribute('data-theme')
    }
  }, [program])

  useEffect(() => {
    if (!program) return
    const sections = Array.from(document.querySelectorAll('[data-stage-section]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) {
          const mostVisible = visible.reduce((prev, next) => (prev.intersectionRatio > next.intersectionRatio ? prev : next))
          setActiveSection(mostVisible.target.getAttribute('data-stage-section'))
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.2, 0.5, 0.8] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [program])

  if (!program) {
    return (
      <div className="p-8 text-foreground">
        <h2 className="text-3xl font-semibold">Program not found</h2>
        <p className="mt-4 text-muted-foreground">The selected program is unavailable. Please review the available cohorts.</p>
      </div>
    )
  }

  return (
    <div
      className="bg-background text-foreground"
      style={{
        paddingTop: '8rem',
        '--primary': program.theme.primary,
        '--secondary': program.theme.secondary,
        '--accent': program.theme.accent,
        '--glow': program.theme.glow,
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.18),transparent_24%)] blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-card/90 p-10 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">{program.tagline}</span>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div>
              <h1 className="text-5xl font-black leading-tight text-foreground sm:text-6xl">{program.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{program.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground">{program.duration}</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground">{program.mode}</span>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.65)]">
              <div className="text-sm uppercase tracking-[0.34em] text-slate-400">Cohort details</div>
              <p className="mt-4 text-lg font-semibold text-foreground">{program.ctaLabel}</p>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Eligibility:</strong> {program.eligibility}</p>
                <p><strong className="text-foreground">Specializations:</strong> {program.specializations.join(', ')}</p>
              </div>
              <div className="mt-8">
                <ApplyDialog>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
                    Apply Now <ArrowRight size={16} />
                  </button>
                </ApplyDialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
        <aside className="hidden lg:block sticky top-28 self-start">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              <Sparkles size={18} /> Curriculum path
            </div>
            {stageEntries.map(([tierKey, stage]) => (
              <a
                key={tierKey}
                href={`#tier-${tierKey}`}
                className={`block rounded-2xl px-4 py-3 text-sm transition ${activeSection === tierKey ? 'bg-slate-950 text-cyan-300 shadow-[0_0_0_1px_rgba(56,189,248,0.4)]' : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'}`}
              >
                <div className="font-semibold">{stage.title}</div>
                <div className="mt-1 text-xs text-slate-500">{stage.description}</div>
              </a>
            ))}
          </div>
        </aside>

        <div className="space-y-10">
          {stageEntries.map(([tierKey, stage], sectionIndex) => (
            <section key={tierKey} id={`tier-${tierKey}`} data-stage-section={tierKey} className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-card/90 p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-300">{stage.title}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-foreground">{stage.description}</h2>
                </div>
                <span className="inline-flex rounded-full bg-slate-950/60 px-4 py-2 text-sm font-semibold text-slate-300">Tier {sectionIndex + 1}</span>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                {stage.cards.map((card, cardIndex) => (
                  <SemesterCard key={card.title} card={card} accent={program.theme.accent} index={cardIndex} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
