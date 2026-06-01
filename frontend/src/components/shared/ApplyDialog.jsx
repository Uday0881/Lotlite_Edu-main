import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import LeadForm from './LeadForm.jsx'

/**
 * ApplyDialog — modal wrapper around LeadForm.
 * Usage: <ApplyDialog><button>Trigger</button></ApplyDialog>
 * The child is cloned and receives an onClick to open the dialog.
 */
export default function ApplyDialog({ children }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure portal only runs on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  const modalContent = open ? (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(6px)',
        zIndex: 99999, // Super high z-index to break out of Header stacking context
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fade-in 0.2s ease-out',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'fade-up 0.3s cubic-bezier(0.16,1,0.3,1)',
          // Hide scrollbar but keep functionality
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <style>{`
          .apply-dialog-content::-webkit-scrollbar { display: none; }
        `}</style>
        
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid var(--hairline)',
            borderRadius: '50%',
            width: '2rem',
            height: '2rem',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            color: 'var(--foreground)',
          }}
        >
          <X size={14} />
        </button>

        <LeadForm />
      </div>
    </div>
  ) : null

  return (
    <>
      {/* Trigger */}
      <span onClick={() => setOpen(true)} style={{ display: 'contents' }}>
        {children}
      </span>

      {/* Overlay - Portaled to Body */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  )
}

