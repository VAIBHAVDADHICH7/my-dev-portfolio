
'use client'
/** @jsxImportSource @react-three/fiber */

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Sphere } from './_ThreeSphere'

export default function Skills3D() {
  return (
    <div className="h-[400px] w-full mt-20">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
