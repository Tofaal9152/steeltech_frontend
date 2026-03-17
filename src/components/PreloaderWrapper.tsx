'use client'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import dynamic from 'next/dynamic'

const Preloader = dynamic(() => import('./Preloader'), { ssr: false })

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function     ({
  children,
}: {
  children: React.ReactNode
}) {
  const [done, setDone] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(async () => {
    if (!done) return
    const { gsap } = await import('gsap')

    // Main content animate in — stagger করে reveal
    gsap.fromTo(
      contentRef.current?.querySelectorAll('[data-reveal]') ?? [],
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1,
      }
    )
  }, { dependencies: [done] })

  return (
    <>
      {!done && <Preloader onComplete={() => setDone(true)} />}

      <div ref={contentRef} style={{ opacity: done ? 1 : 0 }}>
        {children}
      </div>
    </>
  )
}