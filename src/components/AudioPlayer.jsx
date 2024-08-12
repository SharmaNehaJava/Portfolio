// src/components/AudioPlayer.js
import React, { useRef, useState } from 'react';
import '../CSS/AudioPlayer.css';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="footer-sound " onClick={togglePlayPause}>
      <audio ref={audioRef} src="path/to/your-audio-file.mp3" />
      <div className={`sound-bars ${isPlaying ? 'playing' : ''} `}>
        <div className="sbar inline-block"></div>
        <div className="sbar inline-block"></div>
        <div className="sbar"></div>
        <div className="sbar"></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
