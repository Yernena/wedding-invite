import { useRef, useState } from "react";
import music from "../assets/music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!playing) audioRef.current.play();
    else audioRef.current.pause();
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop />
      <button
        onClick={toggle}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "none",
          background: "white",
          color: "black",
          fontSize: 18,
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {playing ? "⏸" : "🎵"}
      </button>
    </>
  );
}
