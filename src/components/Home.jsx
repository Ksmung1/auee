import React, { useState, useRef, useEffect } from "react";
import MindReader from "./MindReader";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    // Cleanup listeners on unmount
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="p-6 bg-pink-600">
      <h1 className="text-2xl font-bold">Hello my name is Awieee</h1>
      <p className="mt-2">Listen to my song →</p>

      <audio
        ref={audioRef}
        controls
        className="mt-4 w-full max-w-md"
        src="/auee.mp3"
        type="audio/mpeg"
      >
        Your browser does not support the audio element.
      </audio>

      <h1 className="text-sm font-bold">Today i got a prize</h1>
      <img src="image.png" alt="" />

      {isPlaying && (
        <div className="mt-4">
          <img src="/auee.gif" alt="Playing animation" />
        </div>
      )}

      <div className="mt-10">
     <MindReader/>
      </div>
    </div>
  );
};

export default Home;
