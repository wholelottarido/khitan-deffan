"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // Browser akan mengizinkan audio setelah interaksi pertama pengguna.
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    void playMusic();

    const startAfterInteraction = (event: PointerEvent | KeyboardEvent) => {
      document.removeEventListener("pointerdown", startAfterInteraction);
      document.removeEventListener("keydown", startAfterInteraction);

      if (
        event.target instanceof Element &&
        event.target.closest("[data-music-toggle]")
      ) {
        return;
      }

      if (audio.paused) void playMusic();
    };

    document.addEventListener("pointerdown", startAfterInteraction, {
      once: true,
    });
    document.addEventListener("keydown", startAfterInteraction, { once: true });

    return () => {
      document.removeEventListener("pointerdown", startAfterInteraction);
      document.removeEventListener("keydown", startAfterInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await playMusic();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/Tunggal_Rasa.mp3" loop preload="auto" />

      <button
        type="button"
        data-music-toggle
        onClick={toggleMusic}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        aria-pressed={isPlaying}
        className="fixed bottom-5 right-[max(1rem,calc((100vw-28rem)/2+1rem))] z-50 flex size-12 items-center justify-center rounded-full border border-white/70 bg-[#78643f]/90 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#665432] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78643f]"
      >
        {isPlaying ? (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5"
            fill="currentColor"
          >
            <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5 translate-x-px"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
