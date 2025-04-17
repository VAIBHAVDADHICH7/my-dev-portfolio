'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Sphere } from './_ThreeSphere'

export default function Skills3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}
