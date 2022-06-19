import React, {Suspense} from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

// function Box() {
//     const { scene } = useGLTF("scene.gltf")
//     return <primitive object={scene} />
// }

function MyAnimatedBox() {
    const { scene } = useGLTF("scene.gltf")
    const myMesh = React.useRef()
    
    useFrame(({ clock }) => {
            myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
            myMesh.current.rotation.y = Math.cos(clock.getElapsedTime());
      })
    return (
      <mesh ref={myMesh}>
        <primitive object={scene} />
        <meshBasicMaterial color="royalblue" />
      </mesh>
    )
  }


export function ShowKubik(props) {
    return (
        <div className="rubik_container" style = {{backgroundColor: "#101019", opacity: props.hide }}>
        <Canvas camera={{ position: [80, 85, 82], fov: 13 }}>
            <pointLight position={[60, 50, 10]} intensity={1.9} />
            <Suspense fallback={null}>
                <MyAnimatedBox />
                <OrbitControls />
            </Suspense>
        </Canvas>

        </div>
    )
}