"use client";
import { cn } from '@/lib/utils'
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react'
import { motion, PanInfo } from 'motion/react' // Imported PanInfo for type safety
import { JSX, useEffect, useRef, useState } from 'react'

export const AppleCarousel = ({ items }: { items: JSX.Element[] }) => {
  // Card size (must match your card classes: md:w-96 + gap-4)
  const CARD_W = 384 // md:w-96
  const GAP = 16 // gap-4
  const STEP = CARD_W + GAP

  const viewportRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // translate value in PX (this is the real truth for disable)
  const [translateX, setTranslateX] = useState(0)
  const [maxTranslate, setMaxTranslate] = useState(0)

  // Measure widths and compute maxTranslate = innerWidth - viewportWidth
  useEffect(() => {
    const calc = () => {
      const viewportW = viewportRef.current?.clientWidth ?? 0
      const innerW = innerRef.current?.scrollWidth ?? 0
      const max = Math.max(0, innerW - viewportW)

      setMaxTranslate(max)
      // clamp current translate if screen resized
      setTranslateX((prev) => Math.min(Math.max(prev, 0), max))
    }

    calc()

    // watch resize
    const onResize = () => calc()
    window.addEventListener('resize', onResize)

    // if ResizeObserver exists, it's even better (container resize)
    let ro: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(calc)
      if (viewportRef.current) ro.observe(viewportRef.current)
      if (innerRef.current) ro.observe(innerRef.current)
    }

    return () => {
      window.removeEventListener('resize', onResize)
      if (ro) ro.disconnect()
    }
  }, [items.length])

  const clamp = (v: number) => Math.min(Math.max(v, 0), maxTranslate)

  const handlePrev = () => {
    setWhileDrag(false) // stop whileDrag state when using buttons
    setTranslateX((prev) => clamp(prev - STEP))
  }

  const handleNext = () => {
    setWhileDrag(false) // stop whileDrag state when using buttons
    setTranslateX((prev) => clamp(prev + STEP))
  }

  // Logic to sync Drag with State
  const handleDragEnd = (_: any, info: PanInfo) => {
    setWhileDrag(true) // stop whileDrag state when drag ends
    // Determine where the user dragged the carousel to
    const currentX = -translateX + info.offset.x

    // Invert it back to positive (because your logic uses positive numbers for translation)
    const newTranslate = -currentX

    // Update state so buttons know where we are
    setTranslateX(clamp(newTranslate))
  }

  const atStart = translateX <= 0
  const atEnd = translateX >= maxTranslate - 2 // small buffer for rounding
  // Note: We no longer need to apply the translateX to the style, because Framer Motion handles it via the drag and constraints props.
  const [whileDrag, setWhileDrag] = useState(false)
  return (
    <div className="relative w-full">
      {/* Viewport */}
      <div ref={viewportRef} className="w-full overflow-hidden">
        {/* Track - CHANGED to motion.div */}
        <motion.div
          ref={innerRef}
          className={cn(
            'flex flex-row justify-start gap-4 ',
            'mx-auto container',
            'cursor-grab active:cursor-grabbing', // visual cue
          )}
          // 1. We replace the CSS 'style' with Motion 'animate'
          {...(whileDrag ? {} : { animate: { x: -translateX } })} // Only apply animate when not dragging
          // animate={{ x: -translateX }}
          transition={{
            duration: 0.8, // Matches your original 800ms
            ease: 'easeInOut',
          }}
          // 2. Add Drag Props

          drag="x"
          dragConstraints={{
            left: -maxTranslate,
            right: 0,
          }}
          // This keeps your state in sync when the user stops dragging
          onDragEnd={handleDragEnd}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: 'easeOut',
                },
              }}
              key={'card' + index}
              className="rounded-3xl last:pr-[5%] md:last:pr-[20%]"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mr-10 mt-4 flex justify-end gap-2">
        <button
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-gray-100 disabled:opacity-50"
          onClick={handlePrev}
          disabled={atStart}
          aria-label="Previous"
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>

        <button
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-gray-100 disabled:opacity-50"
          onClick={handleNext}
          disabled={atEnd}
          aria-label="Next"
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  )
}
