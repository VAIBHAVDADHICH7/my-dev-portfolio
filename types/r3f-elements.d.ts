import '@react-three/fiber'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any
      ambientLight: any
      pointLight: any
      sphereGeometry: any
      meshStandardMaterial: any
    }
  }
}
