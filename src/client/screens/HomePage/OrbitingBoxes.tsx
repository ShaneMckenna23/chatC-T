import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function Box(props: any) {
    // This reference will give us direct access to the mesh
    const mesh = useRef<{rotation: {x: number, y: number}}>()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      if (mesh.current !== undefined) {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
      }
    })
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color={hovered ? 'hotpink' : props.color} />
      </mesh>
    )
  }
  
  const OrbitingBoxes = () => {
    const [t, setT] = useState(0)
    useFrame(() => {
      setT(t + 0.01)
    })
  
    const r = 0.5 * (Math.sin(t * 0.5) + 2) * 1.5
  
    return (
      <>
        <Box position={[r * Math.cos(t), r * Math.sin(t), 0]} color="#FF5555" />
        <Box position={[r * Math.cos(t + (Math.PI / 3) * 2), r * Math.sin(t + (Math.PI / 3) * 2), 0]} color="#55BB55" />
        <Box position={[r * Math.cos(t + (Math.PI / 3) * 2 * 2), r * Math.sin(t + (Math.PI / 3) * 2 * 2), 0]} color="#5555FF" />
      </>
    )
  }

  export default OrbitingBoxes;