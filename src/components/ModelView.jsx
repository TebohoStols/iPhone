import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import IPhone from "./IPhone"
import { Suspense } from "react"
import * as THREE from 'three'
import Loader from './Loader'


const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}) => {
  return (
    <View index={index}
          id={gsapType}
          className={`w-full absolute h-full ${index === 2 ? 'right-[-100%]' : ''}`}>
      
      {/**Control the light of the 3d object */}
      <ambientLight intensity={0.3}/>

      {/**Setup the  type of camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]}/>

      <Lights/>

      {/** Allows your model to move around upon being scrolled */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      {/**Create a custom Loader and suspense until the model loads */}
      <group ref={groupRef} name={`{index === 1} ? 
      'small' : 'large'`} position={[0, 0, 0]}>
        <Suspense fallback={
          <Loader/>}>
            <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                    item={item}
                    size={size}
            />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
