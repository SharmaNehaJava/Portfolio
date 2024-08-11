import React, { useEffect } from 'react';
import { particlesCursor } from 'threejs-toys'; // Adjust import if needed

const ParticleCursor = () => {
  useEffect(() => {
    const canvasElement = document.getElementById('app-canvas');
    const pc = particlesCursor({
      el: canvasElement,
      gpgpuSize: 512,
      colors: [0x00fffc, 0x0000ff, 0xff00ff, 0xffff00],
      color: 0xff0000,
      coordScale: 0.5,
      noiseIntensity: 0.01,
      noiseTimeCoef: 0.0002,
      pointSize: 3,
      pointDecay: 0.002,
      sleepRadiusX: 300,
      sleepRadiusY: 300,
      sleepTimeCoefX: 0.001,
      sleepTimeCoefY: 0.002,
      maxParticles: 1000,
      particleSpeed: 0.5,
    });
    return () => pc.destroy(); // Clean up effect
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas id="app-canvas" className="absolute top-0 left-0 w-full h-full z-[-1]"></canvas>
      <a
        id="source-link"
        className="absolute top-16 left-4 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-opacity-20 transition duration-300 z-50"
        href="https://t.me/+7yc_oGHnLJhlOWVl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-link text-blue-400"></i>
        <span className="text-white">Join my Telegram</span>
      </a>
      <a
        id="yt-link"
        className="absolute top-4 left-4 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-3 flex items-center gap-2 text-white hover:bg-opacity-20 transition duration-300 z-50"
        href="https://www.youtube.com/@codewith_muhilan?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube text-red-600"></i>
        <span className="text-white">Subscribe my channel..❤</span>
      </a>
    </div>
  );
};

export default ParticleCursor;
