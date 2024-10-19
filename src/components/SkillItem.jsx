import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SkillItem = ({ skill }) => {
  const ref = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200); // Set size of the canvas
    ref.current.appendChild(renderer.domElement);

    // Cloth material
    const geometry = new THREE.PlaneGeometry(1, 1);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(skill.icon);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    const cloth = new THREE.Mesh(geometry, material);
    scene.add(cloth);

    camera.position.z = 1.5; // Adjust camera for better visibility

    let count = 0;

    const animate = () => {
      count += 0.1; // Control the wave speed
      cloth.rotation.x = Math.sin(count) * 0.1; // Create wave effect
      cloth.rotation.y = Math.cos(count) * 0.1; // Control wave movement

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      ref.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, [skill.icon]);

  return (
    <div
      className="flex flex-col items-center rounded-md p-4 shadow-lg transition-transform duration-300 transform hover:scale-105 bg-cover bg-center bg-gray-800 mx-auto "
      style={{
        backgroundImage: "url('/star.png')",
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        width: '150px', 
        height: '150px',
      }}
    >
     
      <div ref={ref} className="w-32 h-32 mb-2 flex justify-center items-center bg-transparent" /> {/* Ensure it is centered */}
      <p className="text-lg font-semibold text-white text-center">{skill.name}</p>
    </div>
  );
};

export default SkillItem;
