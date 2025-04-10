'use client'

import { useRef } from 'react'
import { Mesh } from 'three'

export function Sphere() {
  const meshRef = useRef<Mesh>(null)

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4ade80" wireframe />
    </mesh>
  )
}
