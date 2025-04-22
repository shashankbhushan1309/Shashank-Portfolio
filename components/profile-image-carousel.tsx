"use client"

import { useEffect, useState } from "react"

export function ProfileImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["/images/profile.png", "/images/profile2.png", "/images/profile3.png"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 25000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-purple-500 glow-border-purple relative">
      {images.map((src, index) => (
        <img
          key={src}
          src={src || "/placeholder.svg"}
          alt={`Shashank Bhushan ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 mix-blend-overlay"></div>
    </div>
  )
}
