import React, {Suspense} from 'react'
import { useGLTF, OrbitControls, useFBX } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

// function Box() {
//     const { scene } = useGLTF("./tiger/scene.gltf")
//     return <primitive object={scene} />
// }
// function Scene() {
//   const fbx = useFBX('/source/Tiger/Tiger.FBX')
//   return <primitive object={fbx} />
// }
function Scene() {
  const fbx = useLoader(FBXLoader, '/source/Tiger/Tiger.FBX')
  return <primitive object={fbx} />
}

// function MyAnimatedBox() {
//     const { scene } = useGLTF("./tiger/scene.gltf")
//     const myMesh = React.useRef()
    
    
//     useFrame(({ clock }) => {
//     //         myMesh.current.rotation.x = Math.asin(clock.elapsedTime() / 8);
//             // myMesh.current.rotation.y = Math.tan(clock.getElapsedTime())/5;
//             // myMesh.current.rotation.y = Math.sin(clock.getElapsedTime())/10;
//             // myMesh.current.rotation.z = Math.cos(clock.getElapsedTime())/10;

//       })
//     return (
//       <mesh ref={myMesh}>
//         <primitive object={scene} />
//         <meshBasicMaterial color="royalblue" />
//       </mesh>
//     )
//   }


export function ShowTiger(props) {
    return (
        <div className="robot_container" style = {{backgroundColor: "transparent" }}>
        <Canvas camera={{ position: [-50,-10, 15], fov: 70 }}>
        
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
            <ambientLight intensity={1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <Suspense fallback={null}>
                {/* <MyAnimatedBox /> */}
                {/* <Box /> */}
                <Scene />
                <OrbitControls />
            </Suspense>
        </Canvas>

        </div>
    )
}