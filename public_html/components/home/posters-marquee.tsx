"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const posters = [
  { src: "/poster1-image.png", alt: "Eye Care Poster 1" },
  { src: "/poster2-image.png", alt: "Eye Care Poster 2" },
  { src: "/poster3-image.png", alt: "Eye Care Poster 3" },
]

export function PostersMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const positionRef = useRef(0)
  const setWidthRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Calculate width of one set of posters
    const items = track.querySelectorAll<HTMLElement>(".poster-item")
    let totalWidth = 0
    items.forEach((item, index) => {
      if (index < posters.length) {
        totalWidth += item.offsetWidth + 24 // 24px gap
      }
    })
    setWidthRef.current = totalWidth

    let animationId: number
    const speed = 0.6

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= speed
        if (Math.abs(positionRef.current) >= setWidthRef.current) {
          positionRef.current = 0
        }
        if (track) {
          track.style.transform = `translateX(${positionRef.current}px)`
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section 
      className="py-10 md:py-14 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(352.28% 126.05% at 23.26% 0, #a5f2f0 23.48%, #ddf9b6 100%)"
      }}
    >
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 w-max will-change-transform"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Original posters */}
          {posters.map((poster, index) => (
            <div key={`original-${index}`} className="poster-item flex-shrink-0">
              <Image
                src={poster.src}
                alt={poster.alt}
                width={500}
                height={300}
                className="w-[300px] md:w-[500px] max-w-[90vw] rounded-3xl"
              />
            </div>
          ))}
          {/* Duplicated posters for seamless loop */}
          {posters.map((poster, index) => (
            <div key={`duplicate-${index}`} className="poster-item flex-shrink-0">
              <Image
                src={poster.src}
                alt={poster.alt}
                width={500}
                height={300}
                className="w-[300px] md:w-[500px] max-w-[90vw] rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
