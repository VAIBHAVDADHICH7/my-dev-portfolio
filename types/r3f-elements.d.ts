import '@react-three/fiber'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: React.DetailedHTMLProps<any, any>
      pointLight: React.DetailedHTMLProps<any, any>
    }
  }
}
