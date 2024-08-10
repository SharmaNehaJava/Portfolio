import { useMemo } from 'react';
import { BufferGeometry, Float32BufferAttribute, PointsMaterial, Points } from 'three';
import { useFrame } from '@react-three/fiber';

const Particles = () => {
  const particlesRef = useRef();
  const particlesGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(() => {
    particlesRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial attach="material" color="#00ffff" size={0.05} />
    </points>
  );
};

// Add Particles to ThreeDModel component

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
      <Particles />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;
