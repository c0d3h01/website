"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi2";

export default function NotFound() {
  const [glitch, setGlitch] = useState(false);
  const [scrambledText, setScrambledText] = useState("404");
  const [timestamp, setTimestamp] = useState("");
  const [scanPosition, setScanPosition] = useState(-100);

  useEffect(() => {
    setTimestamp(new Date().toISOString());

    // Scanline animation
    const scanInterval = setInterval(() => {
      setScanPosition((prev) => (prev >= 100 ? -100 : prev + 0.5));
    }, 30);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    // Scramble effect
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789";
    let iteration = 0;

    const scrambleInterval = setInterval(() => {
      setScrambledText(
        "404"
          .split("")
          .map((char, index) => {
            if (index < iteration) return "404"[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 0.5;
      if (iteration >= 3) {
        clearInterval(scrambleInterval);
        setScrambledText("404");
      }
    }, 50);

    return () => {
      clearInterval(scanInterval);
      clearInterval(glitchInterval);
      clearInterval(scrambleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent h-32"
          style={{ transform: `translateY(${scanPosition}%)` }}
        />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fb923c 1px, transparent 1px), linear-gradient(90deg, #fb923c 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        {/* 404 Text with glitch */}
        <div className="relative">
          <h1
            className="text-8xl md:text-9xl font-mono font-black tracking-wider select-none"
            style={{
              color: "#fb923c",
              textShadow: glitch
                ? "0 0 10px #fb923c, 0 0 20px #fb923c, 0 0 40px #fb923c, 2px 2px 0px #22c55e, -2px -2px 0px #06b6d4"
                : "0 0 20px #fb923c, 0 0 40px #fb923c, 0 0 60px #fb923c",
              transform: glitch
                ? `translate(${Math.random() > 0.5 ? 3 : -3}px, ${Math.random() > 0.5 ? 3 : -3}px)`
                : "translate(0, 0)",
            }}
          >
            {scrambledText}
          </h1>
          {glitch && (
            <>
              <h1
                className="absolute inset-0 text-8xl md:text-9xl font-mono font-black tracking-wider opacity-70 pointer-events-none"
                style={{
                  color: "#22c55e",
                  textShadow: "0 0 10px #22c55e",
                  transform: "translate(3px, 3px)",
                }}
                aria-hidden="true"
              >
                404
              </h1>
              <h1
                className="absolute inset-0 text-8xl md:text-9xl font-mono font-black tracking-wider opacity-70 pointer-events-none"
                style={{
                  color: "#06b6d4",
                  textShadow: "0 0 10px #06b6d4",
                  transform: "translate(-3px, -3px)",
                }}
                aria-hidden="true"
              >
                404
              </h1>
            </>
          )}
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <p className="text-orange-400 text-lg md:text-xl font-mono tracking-wide">
            <span className="inline-block animate-pulse">[</span>{" "}
            <span className="text-orange-500">ERROR:</span> Page not found in cyberspace{" "}
            <span className="inline-block animate-pulse">]</span>
          </p>
          <p className="text-orange-300/60 text-sm md:text-base font-mono">
            The requested resource has been lost in the digital void
          </p>
          <p className="text-orange-300/40 text-xs md:text-sm font-mono">
            &gt; Timestamp: {timestamp}
          </p>
        </div>

        {/* Return Home Button */}
        <div className="relative inline-block mt-8">
          <div className="absolute inset-0 bg-orange-500/20 blur-xl animate-pulse" />
          <Link
            href="/"
            className="relative flex items-center gap-3 px-8 py-4 bg-black border-2 border-orange-500 text-orange-500 font-mono font-bold tracking-wider hover:bg-orange-500 hover:text-black transition-all duration-300 group"
          >
            <HiHome size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">RETURN HOME</span>
          </Link>
        </div>

        {/* Terminal-style info */}
        <div className="mt-8 inline-block text-left">
          <div className="border border-orange-500/30 bg-black/50 backdrop-blur-sm p-4 font-mono text-xs md:text-sm text-orange-400/70 max-w-md">
            <p>&gt; Status: 404</p>
            <p>&gt; Message: Resource not found</p>
            <p>&gt; Action: Redirecting to home...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
