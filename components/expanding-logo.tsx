"use client"

import { useState } from "react"
import Link from "next/link"

export function ExpandingLogo() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Link
      href="/"
      className="font-bold text-xl relative"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <span
        className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 ${
          expanded ? "opacity-0" : "opacity-100"
        }`}
      >
        SB
      </span>
      <div
        className={`absolute left-0 top-full pt-2 transition-all duration-300 ${
          expanded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ zIndex: expanded ? 50 : -1 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 whitespace-nowrap">
          Shashank Bhushan
        </span>
      </div>
    </Link>
  )
}
