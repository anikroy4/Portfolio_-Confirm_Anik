import { useEffect } from 'react'

export default function useReveal(selector = '.reveal', stagger = 80){
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector))
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('show'), i * stagger)
    })
  }, [selector, stagger])
}
