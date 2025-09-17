'use client'

import { useState, useEffect } from 'react'

interface TypewriterSequence {
  text: string
  action: 'type' | 'delete'
  speed?: number
  pause?: number
}

interface TypewriterTextProps {
  sequences: TypewriterSequence[]
  initialDelay?: number
  className?: string
  onComplete?: () => void
}

export default function TypewriterText({ 
  sequences, 
  initialDelay = 500,
  className = "",
  onComplete
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isPausing, setIsPausing] = useState(false)

  useEffect(() => {
    if (currentSequenceIndex >= sequences.length) {
      if (onComplete) {
        onComplete()
      }
      return
    }

    const currentSequence = sequences[currentSequenceIndex]
    const isTyping = currentSequence.action === 'type'
    const speed = currentSequence.speed || 50

    const startDelay = currentSequenceIndex === 0 ? initialDelay : 0

    const timeout = setTimeout(() => {
      if (isPausing) {
        setIsPausing(false)
        setCurrentSequenceIndex(prev => prev + 1)
        setCurrentCharIndex(0)
        setIsDeleting(false)
        return
      }

      if (isTyping && !isDeleting) {
        // Typing forward
        if (currentCharIndex < currentSequence.text.length) {
          setDisplayText(currentSequence.text.slice(0, currentCharIndex + 1))
          setCurrentCharIndex(prev => prev + 1)
        } else {
          // Finished typing, check if we need to pause then move to next sequence
          if (currentSequence.pause) {
            setIsPausing(true)
          } else {
            setCurrentSequenceIndex(prev => prev + 1)
            setCurrentCharIndex(0)
          }
        }
      } else if (currentSequence.action === 'delete' || isDeleting) {
        // Deleting backwards
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1))
          setIsDeleting(true)
        } else {
          // Finished deleting
          setIsDeleting(false)
          setCurrentSequenceIndex(prev => prev + 1)
          setCurrentCharIndex(0)
        }
      }
    }, isPausing ? currentSequence.pause || 1000 : speed + startDelay)

    return () => clearTimeout(timeout)
  }, [currentSequenceIndex, currentCharIndex, isDeleting, isPausing, sequences, initialDelay, displayText, onComplete])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {displayText}
      <span 
        className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
      />
    </span>
  )
}
