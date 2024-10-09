import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Icons for play and pause

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Initially true to start playing on load

  // Toggle between play and pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Update state to toggle the icon
  };

  useEffect(() => {
    // Try to auto-play the audio when the component mounts
    const playAudioOnLoad = async () => {
      try {
        await audioRef.current.play(); // Attempt to auto-play
        setIsPlaying(true); // If successful, set isPlaying to true
      } catch (error) {
        console.log("Auto-play was blocked by the browser:", error);
        setIsPlaying(false); // If blocked, set isPlaying to false
      }
    };

    playAudioOnLoad(); // Call the function when component loads

    // Event listeners to track play/pause actions
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audioRef.current.addEventListener('play', handlePlay);
    audioRef.current.addEventListener('pause', handlePause);

    // Cleanup event listeners on unmount
    return () => {
      audioRef.current.removeEventListener('play', handlePlay);
      audioRef.current.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div
      className="fixed top-3 right-3 flex items-center justify-center bg-gray-800 rounded-full p-2 cursor-pointer shadow-lg"
      onClick={togglePlayPause}
    >
      <audio ref={audioRef} src="song.mp3" preload="auto" />
      {/* Play or Pause Icon */}
      {isPlaying ? (
        <FaPause className="text-white text-xl" /> // Smaller icon size with text-xl
      ) : (
        <FaPlay className="text-white text-xl" />
      )}
    </div>
  );
};

export default AudioPlayer;
