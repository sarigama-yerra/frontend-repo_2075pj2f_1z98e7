import { useEffect } from 'react'

export default function CursorFX() {
  useEffect(() => {
    const dot = document.createElement('div')
    const ring = document.createElement('div')
    dot.className = 'pointer-events-none fixed z-50 w-2 h-2 rounded-full bg-neon-green mix-blend-difference'
    ring.className = 'pointer-events-none fixed z-50 w-12 h-12 rounded-full border border-neon-green/60 mix-blend-difference'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let x = 0, y = 0
    const move = (e) => {
      x = e.clientX; y = e.clientY
      dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`
    }
    const follow = () => {
      ring.style.transform = `translate3d(${x - 24}px, ${y - 24}px, 0)`
      requestAnimationFrame(follow)
    }
    window.addEventListener('mousemove', move)
    follow()

    return () => {
      window.removeEventListener('mousemove', move)
      dot.remove(); ring.remove()
    }
  }, [])

  return null
}
