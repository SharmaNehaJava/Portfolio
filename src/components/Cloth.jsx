import { useCloth } from '@react-three/cannon';

const Cloth = () => {
  const clothRef = useRef();
  const [nodes] = useCloth(clothRef, { 
    mass: 0.1, 
    position: [0, 5, 0], 
    segment: [16, 16], 
    size: 5, 
    damping: 0.01 
  });

  return (
    <mesh ref={clothRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" {...nodes.position} />
        <bufferAttribute attach="attributes-normal" {...nodes.normal} />
        <bufferAttribute attach="attributes-index" {...nodes.index} />
      </bufferGeometry>
      <meshStandardMaterial attach="material" color="skyblue" side={THREE.DoubleSide} />
    </mesh>
  );
};

// Add Cloth to ThreeDModel component

const ThreeDModel = () => {
  return (
    <Canvas shadowMap camera={{ position: [0, 5, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
      <Physics>
        <Plane />
        <Box />
        <Sphere />
        <Cloth />
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
