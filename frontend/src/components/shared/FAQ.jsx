import { memo, useState, useCallback } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import { faqData } from '../../data/faqData.js'

/**
 * AccordionItem Component — Premium accordion with smooth animations
 * Features:
 * - Full-row hover state with shadow/glow
 * - Icon rotation animation
 * - Smooth expand/collapse with GPU acceleration
 * - Perfect accessibility with aria-expanded
 * - Memoized for performance
 */
const AccordionItem = memo(({ question, answer, isOpen, onToggle, index }) => {
  const handleKeyDown = useCallback(
    (e) => {
      // Handle Enter and Space for keyboard accessibility
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onToggle()
      }
    },
    [onToggle]
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: '0.875rem',
        border: '1px solid var(--hairline)',
        overflow: 'hidden',
      }}
      className="accordion-item"
    >
      <style>{`
        .accordion-item {
          transition: all 240ms cubic-bezier(0.16, 1, 0.3, 1);
          background: var(--card);
        }
        .accordion-item:hover {
          border-color: rgba(255, 215, 0, 0.2);
          box-shadow: 
            inset 0 0 0 1px rgba(255, 215, 0, 0.08),
            0 8px 32px -8px rgba(255, 215, 0, 0.12);
          background: color-mix(in oklab, var(--card) 95%, var(--gold) 5%);
        }
      `}</style>
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        type="button"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.5rem',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--foreground)',
          fontFamily: 'inherit',
        }}
        className="accordion-button"
      >
        <span style={{ fontWeight: 600, fontSize: '1.0625rem', lineHeight: 1.4, flex: 1 }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '2.25rem',
            width: '2.25rem',
            minWidth: '2.25rem',
            borderRadius: '50%',
            background: 'rgba(255,215,0,0.12)',
            color: 'var(--gold)',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
          }}
        >
          {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </motion.div>
      </button>

      {/* Content with AnimatePresence for smooth exit animations */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`accordion-content-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '0 1.5rem 1.5rem',
                fontSize: '0.9375rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.7,
                borderTop: '1px solid rgba(255,215,0,0.1)',
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})

AccordionItem.displayName = 'AccordionItem'

/**
 * FAQ Component — Premium accordion section
 * Edit faqData.js to change questions and answers
 * Supports custom FAQ data via props
 */
export default function FAQ({ faqs = faqData }) {
  const [open, setOpen] = useState(0)

  const handleToggle = useCallback((index) => {
    setOpen((prev) => (prev === index ? null : index))
  }, [])

  return (
    <motion.section
      style={{ padding: '6rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.125em',
              color: 'var(--gold)',
              marginBottom: '1rem',
              fontWeight: 700,
            }}
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.875rem,5vw,3rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--foreground)',
            }}
          >
            Questions, answered.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              marginTop: '1.25rem',
              color: 'var(--muted-foreground)',
              fontSize: '1rem',
              lineHeight: 1.6,
            }}
          >
            Everything you need to decide if Lotlite is your next 24 months.
          </motion.p>
        </div>

        {/* Accordion Items */}
        <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }} variants={staggerContainer}>
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.q || index}
              question={item.q}
              answer={item.a}
              isOpen={open === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
