import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moonTexture from '../../public/moon-texture.jpg';
import moonDisplacementMap from '../../public/moon-displacement.jpg';
import starBackground from '../../public/stars.jpg';

const Moon = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Load star background texture
    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load(starBackground);
    starTexture.wrapS = THREE.RepeatWrapping; 
    starTexture.wrapT = THREE.RepeatWrapping; 
    starTexture.repeat.set(1, 1); 
    scene.background = starTexture;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    scene.add(camera);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Adjust moon size based on window width
    const getMoonSize = () => {
      if (window.innerWidth < 768) return 1.5; 
      if (window.innerWidth < 1024) return 2; 
      return 3;
    };

    // Moon geometry and material
    const geometry = new THREE.SphereGeometry(getMoonSize(), 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: textureLoader.load(moonTexture),
      displacementMap: textureLoader.load(moonDisplacementMap),
      bumpMap: textureLoader.load(moonDisplacementMap),
      bumpScale: 0.04,
      displacementScale: 0.05,
      metalness: 0.3,
      roughness: 0.6,
    });

    // Moon mesh
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); 
    directionalLight.position.set(60, 0, 50);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.2); 
    scene.add(ambientLight);

    const blueLight = new THREE.DirectionalLight(0x0000ff, 1.5);
    blueLight.position.set(-10, -20, 5);
    scene.add(blueLight);

    // OrbitControls (enabled for all devices)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Animation loop
    let scaleDirection = 1;
    let starTextureOffsetX = 0;
    let starTextureOffsetY = 0;

    const animate = () => {
      moon.rotation.y += 0.002;
      moon.scale.x += scaleDirection * 0.001;
      moon.scale.y += scaleDirection * 0.001;
      moon.scale.z += scaleDirection * 0.001;

      if (moon.scale.x > 1.3 || moon.scale.x < 1) {
        scaleDirection *= -1;
      }

      // Move the star background texture
      starTextureOffsetX += 0.0005;
      starTextureOffsetY += 0.0005;
      starTexture.offset.set(starTextureOffsetX % 1, starTextureOffsetY % 1); 

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
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default Moon;
