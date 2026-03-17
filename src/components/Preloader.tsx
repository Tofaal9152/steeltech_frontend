'use client'
import { useEffect } from 'react'
import { imagePath } from '@/constants/imagePath'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 1800)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center h-screen  bg-white">
      <div className="flex items-center justify-center h-screen w-full ">
      {/* loading gif */}
      <img src={imagePath.loading} alt="Loading..." />
    </div>
    </div>
  )
}