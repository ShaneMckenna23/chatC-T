import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useFBX } from '@react-three/drei'

function Byte(props: any) {
    // This reference will give us direct access to the mesh
    const mesh = useRef<{rotation: {x: number, y: number}}>()
    const fbx = useFBX('Sculpture.fbx')
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      if (mesh.current !== undefined) {
        mesh.current.rotation.y += 0.01
      }
    })

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={0.01 }
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <primitive object={fbx}  scale={[1,1,1]} />
        <meshLambertMaterial color={hovered ? 'hotpink' : props.color} />
      </mesh>
    )
  }
  
  const OrbitingBoxes = () => {
    const [t, setT] = useState(0)
    useFrame(() => {
      setT(t + 0.01)
    })
  
    return (
      <>
        <Byte position={[0, -1, 0]} color="#5555FF" />
      </>
    )
  }

  export default OrbitingBoxes;