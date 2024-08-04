import { Canvas } from '@react-three/fiber'
import OrbitingBoxes from './OrbitingBoxes'
import Effects from './Effects'


export default function App() {
  return (
    <div className="home-container">
      {/* <div className="home-heading">
        "But afterwards there occurred violent earthquakes and floods; and in a single day and night of rain all your warlike men in a body sank into the earth,
        and the island of Atlantis in like manner disappeared, and was sunk beneath the sea."
      </div> */}
      <Canvas gl={{ antialias: false }} dpr={1} style={{ width: '100vw', height: '100vh', imageRendering: 'pixelated' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitingBoxes />
        <Effects />
      </Canvas>
    </div>
  )
}