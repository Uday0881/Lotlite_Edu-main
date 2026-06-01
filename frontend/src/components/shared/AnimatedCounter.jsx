import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

/**
 * AnimatedCounter — animates a number from 0 to target when scrolled into view.
 * Props:
 *   target   {number} — final number to animate to
 *   suffix   {string} — text appended after number (e.g. "L+", "%", "X")
 *   prefix   {string} — text prepended before number
 *   decimals {number} — decimal places (default 0)
 *   duration {number} — animation duration in seconds (default 2)
 *   className {string} — CSS class for the container
 */
export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2,
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || !ref.current) return

    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent =
            prefix + value.toFixed(decimals) + suffix
        }
      },
    })

    return () => controls.stop()
  }, [isInView, target, suffix, prefix, decimals, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
