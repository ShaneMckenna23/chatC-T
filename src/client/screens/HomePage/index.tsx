import { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import OrbitingBoxes from './OrbitingBoxes'
import Effects from './Effects'
import Sculpture from './Sculpture'
import { useFBX } from '@react-three/drei'
import Video from '../../components/Video'

export default function App() {
  const fbx = useFBX('./Sculpture.fbx')
  const navigate = useNavigate()
  
  useEffect(() => {
    const handleKeyPress = () => {
      navigate('/term')
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [navigate])
  
  return (
    <div>
      <Video />
      <Canvas 
        gl={{ antialias: false, alpha: true, clearColor: [0x000000, 0] }} 
        dpr={1} 
        style={{ width: '100vw', height: '100vh', imageRendering: 'pixelated' }}
      >
        
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <OrbitingBoxes /> */}
          <Sculpture />
        <Effects />
      </Canvas>

    </div>
  )
}