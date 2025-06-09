'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default LenisProvider
