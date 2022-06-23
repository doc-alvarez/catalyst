import React, {Suspense} from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

// function Box() {
//     const { scene } = useGLTF("scene.gltf")
//     return <primitive object={scene} />
// }

function MyAnimatedBox() {
    const { scene } = useGLTF("./cyberpunk_robot/scene.gltf")
    const myMesh = React.useRef()
    
    
    useFrame(({ clock }) => {
    //         myMesh.current.rotation.x = Math.asin(clock.elapsedTime() / 8);
            // myMesh.current.rotation.y = (clock.getElapsedTime()/ 10);
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


export function ShowRobot(props) {
    return (
        <div className="robot2_container" style = {{backgroundColor: "transparent", opacity: props.hide }}>
        <Canvas camera={{position: [-80, 80, 142], fov: 140 }}>
        
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