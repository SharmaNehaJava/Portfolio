import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GmailLogo3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 50); // Black fog effect

    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000); // Background color (black)
    mountRef.current.appendChild(renderer.domElement);

    // Load Gmail background image as texture
    const textureLoader = new THREE.TextureLoader();
    const gmailLogoTexture = textureLoader.load('gmail_image.png');
    
    // Create a larger PlaneGeometry for the Gmail logo
    const logoGeometry = new THREE.PlaneGeometry(30, 10); // Larger size to fit within the form height
    const logoMaterial = new THREE.MeshBasicMaterial({
      map: gmailLogoTexture,
      side: THREE.DoubleSide,
      transparent: true,
    });
    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    scene.add(logo);

    // Lighting (optional for better 3D effect)
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation: Add rotation
    let clock = new THREE.Clock();
    const animate = function () {
      requestAnimationFrame(animate);

      // Floating animation
      const elapsedTime = clock.getElapsedTime();
      logo.position.y = Math.sin(elapsedTime) * 0.2;
      logo.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    // Resize function
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default GmailLogo3D;
