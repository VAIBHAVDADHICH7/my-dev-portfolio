'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    meshRef.current.rotation.y += 0.003
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4ade80" wireframe />
    </mesh>
  )
}
