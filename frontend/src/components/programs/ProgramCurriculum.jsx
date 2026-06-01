import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { programmesData } from '../../data/programmesData.js';
import { useTheme } from '../../context/themeContext.js';
import SemesterCard from '../curriculum/SemesterCard.jsx';
import { Sparkles } from 'lucide-react';
import ApplyDialog from '../shared/ApplyDialog.jsx';

export default function ProgramCurriculum() {
  const { slug } = useParams();
  const program = useMemo(
    () => Object.values(programmesData.programs).find((p) => p.slug === slug),
    [slug]
  );
  const { setProgramTheme, clearTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('foundational');
  const stageEntries = useMemo(() => Object.entries(program?.spiralSemesters || {}), [program]);

  useEffect(() => {
    if (!program) return;
    setProgramTheme(program.theme, program.slug);
    return () => clearTheme();
  }, [program, setProgramTheme, clearTheme]);

  useEffect(() => {
    if (!program) return;
    const sections = Array.from(document.querySelectorAll('[data-stage-section]'));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          const best = visible.reduce((prev, next) => (prev.intersectionRatio > next.intersectionRatio ? prev : next));
          setActiveSection(best.target.getAttribute('data-stage-section'));
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.2, 0.5, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [program]);

  if (!program) {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-semibold text-foreground">Program not found</h2>
        <p className="mt-4 text-muted-foreground">
          The requested program <strong>{slug}</strong> could not be loaded.{' '}
          <Link to="/" className="text-cyan-300 underline">Return home</Link>
        </p>
      </div>
    );
  }

  return (
    <main
      className="min-h-screen bg-background text-foreground"
      style={{
        '--primary': program.theme.primary,
        '--secondary': program.theme.secondary,
        '--accent': program.theme.accent,
        '--glow': program.theme.glow,
      }}
    >
      <section className="relative overflow-hidden bg-background px-6 pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.14),transparent_18%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">{program.tagline}</p>
            <h1 className="mt-6 text-5xl font-black leading-tight text-foreground sm:text-6xl">{program.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{program.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground">{program.duration}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground">{program.mode}</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-card/90 p-8 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-400">
                  <Sparkles size={18} /> Program highlights
                </div>
                <p className="text-sm leading-7 text-muted-foreground">This curriculum page is driven by central configuration so subject lists, tier labels, and season structure can evolve without code changes.</p>
              </div>
              <div className="grid gap-4 rounded-[1.75rem] bg-white/5 p-5 text-sm text-foreground shadow-[0_20px_60px_-40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">Eligibility</span>
                  <span className="text-slate-400">{program.eligibility}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">Specializations</span>
                  <span className="text-slate-400">{program.specializations.join(', ')}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">Course format</span>
                  <span className="text-slate-400">{program.mode}</span>
                </div>
              </div>
              <ApplyDialog>
                <button className="w-full inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
                  Apply to {program.shortTitle}
                </button>
              </ApplyDialog>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
        <aside className="hidden lg:block sticky top-28 self-start">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-card/90 p-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              <Sparkles size={18} /> Spiral tiers
            </div>
            {stageEntries.map(([stageKey, stage]) => (
              <a
                key={stageKey}
                href={`#tier-${stageKey}`}
                className={`block rounded-2xl px-4 py-3 text-sm transition ${activeSection === stageKey ? 'bg-sky-500/15 text-sky-200 shadow-[0_0_0_1px_rgba(56,189,248,0.2)]' : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'}`}
              >
                <div className="font-semibold">{stage.title}</div>
                <div className="mt-1 text-xs leading-5 text-slate-500">{stage.description}</div>
              </a>
            ))}
          </div>
        </aside>

        <div className="space-y-10">
          {stageEntries.map(([stageKey, stage], stageIndex) => (
            <section key={stageKey} id={`tier-${stageKey}`} data-stage-section={stageKey} className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-card/90 p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-300">{stage.title}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-foreground">{stage.description}</h2>
                </div>
                <span className="inline-flex rounded-full bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-200">Tier {stageIndex + 1}</span>
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
    </main>
  )
}
