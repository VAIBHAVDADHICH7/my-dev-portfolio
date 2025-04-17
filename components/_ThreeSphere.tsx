'use client'

import { useRef, useEffect } from 'react'
import { Mesh } from 'three'

export function Sphere() {
  const meshRef = useRef<Mesh>(null)

  useEffect(() => {
    function handleScroll() {
      if (meshRef.current) {
        const scrollY = window.scrollY
        // Rotate sphere based on scroll position
        meshRef.current.rotation.y = scrollY * 0.005
        meshRef.current.rotation.x = scrollY * 0.0025
        // Increase size based on scroll position (clamped)
        const scale = 1 + Math.min(scrollY * 0.001, 1)
        meshRef.current.scale.set(scale, scale, scale)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#4ade80" wireframe />
    </mesh>
  )
}
