import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moonTexture from '../../public/moon-texture.jpg'; // Replace with the actual path
import moonDisplacementMap from '../../public/moon-displacement.jpg'; // Replace with the actual path
import starBackground from '../../public/stars.jpg'; // Replace with the actual path to your starry night image

const Moon = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Load star background texture
    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load(starBackground);
    scene.background = starTexture; // Set the scene background to the starry night

    // Camera setup
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    scene.add(camera);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Moon geometry and material
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: textureLoader.load(moonTexture),
      displacementMap: textureLoader.load(moonDisplacementMap),
      bumpMap: textureLoader.load(moonDisplacementMap),
      bumpScale: 0.04,
      displacementScale: 0.05,
      metalness: 0.1,
      roughness: 0.5,
      specular: 0xffffff, // Adding specular for reflection
      shininess: 100, // Higher value for sharp reflection
    });

    // Moon mesh
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Simulating sunlight
    directionalLight.position.set(10, 0, 25);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5); // Increased intensity
    pointLight.position.set(20, 10, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light
    scene.add(ambientLight);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false; // Disable zoom to avoid resizing
    controls.enablePan = false;

    // Animation loop
    const animate = () => {
      moon.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden', // Hide overflow
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default Moon;
