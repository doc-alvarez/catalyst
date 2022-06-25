import React, {Suspense} from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

// function Box() {
//     const { scene } = useGLTF("scene.gltf")
//     return <primitive object={scene} />
// }

function MyAnimatedBox() {
    const { scene } = useGLTF("./minirobot/scene.gltf")
    const myMesh = React.useRef()
    
    
    useFrame(({ clock }) => {
    //         myMesh.current.rotation.x = Math.asin(clock.elapsedTime() / 8);
            // myMesh.current.rotation.y = (clock.getElapsedTime()/ 3);
            // myMesh.current.rotation.y = Math.sin(clock.getElapsedTime())/10;
            // myMesh.current.rotation.z = Math.cos(clock.getElapsedTime())/10;

      })
   
    return (
      <mesh ref={myMesh}>
        <primitive object={scene} />
        <meshBasicMaterial color="royalblue" />
      </mesh>
    )
  }


export function ShowBaby(props) {
    return (
        <div className="robot3_container" style = {{backgroundColor: "transparent"}}>
        <Canvas camera={{position: [-5, -20, 142], fov: 80 }}>
        
            <pointLight position={[60, 50, 10]} intensity={1.9} />
            <ambientLight />
            <Suspense fallback={null}>
                <MyAnimatedBox />
                <OrbitControls />
            </Suspense>
        </Canvas>

        </div>
    )
}