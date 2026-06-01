# Lotlite Premium UI/UX — Quick Reference Card
## For Developers Maintaining & Extending the Design System

---

## 🎨 Design Tokens

### Colors
```javascript
--gold: oklch(0.82 0.16 78)          // Primary accent
--gold-bright: oklch(0.88 0.18 85)   // Hover/active state
--navy-deep: oklch(0.10 0.025 250)   // Deep background
--card: oklch(0.22 0.028 250)        // Card surface
--foreground: oklch(0.98 0.005 250)  // Text (white)
--muted-foreground: oklch(0.72 0.02 250) // Secondary text
```

### Spacing Scale
```javascript
0.5rem → 0.75rem → 1rem → 1.25rem → 1.5rem → 2rem → 2.5rem → 3rem → 4rem
```

### Border Radius
```javascript
0.375rem (sm) → 0.5rem (md) → 0.75rem (lg) → 1rem (xl) → 1.5rem (2xl)
```

---

## ⚡ Animation Quick Start

### Preferred Easing Curve
```javascript
[0.16, 1, 0.3, 1]  // cubic-bezier
// Fast entrance, smooth settling, professional feel
```

### Transition Duration
```javascript
240ms   // Button hover, quick micro-interactions
280ms   // Form inputs, link hover
300ms   // Accordion open/close, modal fade
500ms   // Page transitions
```

### Common Patterns

**Button Hover (Elevation)**
```css
transform: translateY(-2px);
box-shadow: 0 8px 24px -8px rgba(255, 215, 0, 0.3);
transition: all 240ms cubic-bezier(0.16, 1, 0.3, 1);
```

**Input Focus (Glow)**
```css
border-color: rgba(255, 215, 0, 0.5);
box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.3), 
            0 0 16px rgba(255, 215, 0, 0.1);
```

**Link Hover (Underline)**
```css
::after {
  width: 0;
  transition: width 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
:hover::after {
  width: 100%;
}
```

---

## 📝 Typography Rules

### Heading Sizes (Use Clamp)
```css
h1 { font-size: clamp(2rem, 6vw, 4rem); font-weight: 800; }
h2 { font-size: clamp(1.5rem, 5vw, 2.5rem); font-weight: 800; }
h3 { font-size: clamp(1.25rem, 4vw, 1.875rem); font-weight: 700; }
h4 { font-size: clamp(1rem, 3vw, 1.25rem); font-weight: 700; }
```

### Letter-Spacing Rules
```css
h1-h3: -0.03em  /* Tight, professional headings */
h4-h6: -0.015em /* Subtle tightness */
body:  -0.005em /* Barely noticeable tightness */
```

### Line-Height
```css
Headings: 1.2
Body: 1.6-1.7
Labels: 1.4
```

### Contrast Requirement
```
Minimum: WCAG AA (4.5:1)
Target: WCAG AAA (7:1)
Gold (#FFD700) on dark background = 9.2:1 ✓ Excellent
```

---

## 🎯 Micro-Interaction Patterns

### Button States
```javascript
// Default
background: 'rgba(255,215,0,0.12)'
border: '1px solid rgba(255,215,0,0.3)'
cursor: 'pointer'

// Hover
background: 'rgba(255,215,0,0.2)'
transform: 'translateY(-2px)'
boxShadow: '0 8px 24px -8px rgba(255,215,0,0.3)'

// Active
transform: 'translateY(0)'

// Disabled
opacity: 0.5
cursor: 'not-allowed'
```

### Form Input States
```javascript
// Default
background: 'rgba(255,255,255,0.04)'
border: '1px solid rgba(255,255,255,0.12)'

// Hover (optional, not required)
background: 'rgba(255,255,255,0.06)'

// Focus
background: 'rgba(255,255,255,0.08)'
borderColor: 'rgba(255,215,0,0.5)'
boxShadow: 'inset 0 0 0 1px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.1)'

// Disabled
opacity: 0.6
cursor: 'not-allowed'
```

### Link States
```javascript
// Default
color: 'var(--foreground)'
textDecoration: 'none'

// Hover
color: 'var(--gold)'
transition: 'color 280ms cubic-bezier(0.16, 1, 0.3, 1)'

// Focus-visible
outline: '2px solid var(--gold)'
outlineOffset: '2px'
```

---

## 🚀 Performance Checklist

### DO ✓
```javascript
✓ Use transform: translateX/Y, rotate, scale
✓ Use opacity changes
✓ Memoize components with memo()
✓ Use useCallback for handlers
✓ Use useMemo for expensive computations
✓ GPU acceleration: transform: translateZ(0)
✓ Respect prefers-reduced-motion
✓ Debounce scroll/resize handlers
```

### DON'T ✗
```javascript
✗ Animate width, height, padding, margin
✗ Animate left, top, right, bottom
✗ Create functions in render/return
✗ Pass inline objects as dependencies
✗ Use will-change on non-animation elements
✗ Use box-shadow in animations (very expensive)
✗ Create DOM elements in animation loops
✗ Ignore reduced motion preference
```

---

## ♿ Accessibility Essentials

### Keyboard Navigation
```javascript
// Button
onClick handler works
onKeyDown handler for Enter/Space

// Accordion
aria-expanded={isOpen}
aria-controls="content-id"
Enter/Space to toggle

// Form
<label htmlFor="input-id">Label</label>
<input id="input-id" />
```

### Focus Indicators
```css
:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 2px;
}
```

### ARIA Attributes
```jsx
// Accordion
<button aria-expanded={isOpen} aria-controls={`content-${id}`} />
<div id={`content-${id}`} role="region" />

// Form Errors
<div role="alert">Error message</div>

// Loading State
<div aria-busy="true">Loading…</div>

// Descriptions
<input aria-describedby="hint-id" />
<p id="hint-id">This is the hint</p>
```

### Color Contrast
```
White text on dark: 9.2:1 ✓ AAA Pass
Muted text (72% white): 5.1:1 ✓ AA Pass
Ensure all text meets minimum 4.5:1 ratio
```

---

## 📱 Responsive Design

### Mobile-First Approach
```css
/* Mobile default */
padding: 1.5rem;
grid-template-columns: 1fr;
font-size: 1rem;

/* Tablet and up */
@media (min-width: 768px) {
  padding: 2rem;
  grid-template-columns: repeat(2, 1fr);
}

/* Desktop and up */
@media (min-width: 1024px) {
  padding: 3rem;
  grid-template-columns: repeat(4, 1fr);
}
```

### Safe Area Support (Mobile Notches)
```css
padding-bottom: max(1.5rem, calc(env(safe-area-inset-bottom) + 1.5rem));
```

### Touch-Friendly Tap Targets
```
Minimum: 44px × 44px
Spacing between targets: 8px minimum
```

---

## 🔧 Component Template

### Premium Button Component
```jsx
<button
  type="button"
  disabled={isLoading}
  onClick={handleClick}
  style={{
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    background: 'var(--gold)',
    color: 'var(--navy-deep)',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
  }}
  onMouseEnter={(e) => {
    if (!isLoading) {
      e.currentTarget.style.transform = 'translateY(-2px)'
      e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(255,215,0,0.3)'
    }
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = 'none'
  }}
>
  {isLoading ? 'Loading…' : 'Submit'}
</button>
```

### Premium Input Component
```jsx
<input
  type="email"
  placeholder="you@email.com"
  style={{
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '0.5rem',
    padding: '0.875rem 1rem',
    color: 'var(--foreground)',
    transition: 'all 280ms cubic-bezier(0.16, 1, 0.3, 1)',
  }}
  onFocus={(e) => {
    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
    e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(255,215,0,0.3), 0 0 16px rgba(255,215,0,0.1)'
  }}
  onBlur={(e) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
    e.currentTarget.style.boxShadow = 'none'
  }}
/>
```

---

## 🎬 Framer Motion Animations

### Fade In Up (Page Entrance)
```jsx
<motion.div
  initial={{ opacity: 0, y: 28 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
/>
```

### Smooth Height Expansion (Accordion)
```jsx
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
/>
```

### Icon Rotation (Toggle)
```jsx
<motion.div
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
>
  <Icon />
</motion.div>
```

### Staggered List Animation
```jsx
<motion.div variants={staggerContainer}>
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeInUp}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 🧪 Quick Testing Checklist

Before pushing to production:
- [ ] All buttons hover smoothly (no lag)
- [ ] All focus states visible (3px gold outline)
- [ ] Accordion opens/closes without stutter
- [ ] Form inputs glow on focus
- [ ] WhatsApp widget doesn't overlap footer
- [ ] Newsletter form works on desktop/mobile
- [ ] No console errors or warnings
- [ ] Lighthouse score > 90
- [ ] Page loads in < 3 seconds (3G throttle)
- [ ] Works on Safari, Chrome, Firefox

---

## 📞 Quick Help

### Hover Effect Not Working?
Check that component has `onMouseEnter` and `onMouseLeave` handlers.

### Animation Feels Janky?
Verify using only `transform` and `opacity` in CSS transitions.

### Contrast Too Low?
Use WebAIM Contrast Checker. Target > 7:1 ratio for AAA compliance.

### Focus Indicator Missing?
Add `:focus-visible { outline: 2px solid var(--gold); }`.

### Button Not Responding?
Ensure it has `type="button"` or `type="submit"` and proper `onClick` handler.

---

*Last Updated: May 2026*
*For Lotlite: Premium PropTech Education*
