"use client"

import { useEffect, useState } from "react"

const quotes = [
  "“Believe you can and you're halfway there.”",
  "“Your only limit is your mind.”",
  "“Do it now. Sometimes ‘later’ becomes never.”",
  "“Don’t stop until you’re proud.”",
]

const QuotesSection = () => {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % quotes.length)
        setIsVisible(true)
      }, 500) // 500ms for fade out
    }, 5000) // Change quote every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center py-6 text-center min-h-[100px]">
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-(--gb-fg2) italic">{quotes[index]}</p>
      </div>
    </section>
  )
}

export default QuotesSection
