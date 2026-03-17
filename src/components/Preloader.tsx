'use client'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)

  useGSAP(async () => {
    const { gsap } = await import('gsap')

    const labels = ['initializing', 'loading assets', 'preparing scene', 'almost ready']
    const progress = { value: 0 }

    gsap.to(progress, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate() {
        const val = Math.round(progress.value)
        if (counterRef.current) counterRef.current.textContent = String(val)
        if (fillRef.current) fillRef.current.style.width = val + '%'
        if (labelRef.current) {
          const idx = Math.floor((val / 100) * labels.length)
          labelRef.current.textContent = labels[Math.min(idx, labels.length - 1)]
        }
      },
      onComplete() {
        // Animate out
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power3.inOut',
          delay: 0.3,
          onComplete,
        })
      },
    })
  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] 
                 flex flex-col items-center justify-center"
    >
      {/* Counter */}
      <div
        ref={counterRef}
        className="font-mono text-[80px] font-bold text-white 
                   leading-none tracking-tighter tabular-nums"
      >
        0
      </div>

      {/* Progress bar */}
      <div className="w-60 h-px bg-white/15 mt-8 relative overflow-hidden">
        <div
          ref={fillRef}
          className="absolute inset-y-0 left-0 bg-white transition-none"
          style={{ width: '0%' }}
        />
      </div>

      {/* Label */}
      <p
        ref={labelRef}
        className="mt-4 font-mono text-[11px] text-white/40 
                   tracking-[3px] uppercase"
      >
        initializing
      </p>
    </div>
  )
}