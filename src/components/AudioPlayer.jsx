import React, { useRef, useState, useEffect } from 'react';
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

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Auto-play was blocked by the browser:", error);
        setIsPlaying(false);
      }
    };

    playAudio();

    audioRef.current.addEventListener('play', () => setIsPlaying(true));
    audioRef.current.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      audioRef.current.removeEventListener('play', () => setIsPlaying(true));
      audioRef.current.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="footer-sound" onClick={togglePlayPause}>
      <audio ref={audioRef} src="song.mp3" />
      <div className={`sound-bars ${isPlaying ? 'playing' : 'paused'}`}>
        <div className="sbar"></div>
        <div className="sbar"></div>
        <div className="sbar"></div>
        <div className="sbar"></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
