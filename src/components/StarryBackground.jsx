import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import starBackground from '../../public/stars.jpg';

const StarryBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Load star background texture
    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load(starBackground);
    starTexture.wrapS = THREE.RepeatWrapping; // Repeat texture horizontally
    starTexture.wrapT = THREE.RepeatWrapping; // Repeat texture vertically
    starTexture.repeat.set(1, 1); // Initial repeat values
    scene.background = starTexture;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Animation loop
    let starTextureOffsetX = 0;
    let starTextureOffsetY = 0;

    const animate = () => {
      // Move the star background texture
      starTextureOffsetX += 0.0005;
      starTextureOffsetY += 0.0005;
      starTexture.offset.set(starTextureOffsetX % 1, starTextureOffsetY % 1); // Keep offset within [0, 1]

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
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default StarryBackground;
