"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi2";

export default function NotFound() {
  const [glitch, setGlitch] = useState(false);
  const [scrambledText, setScrambledText] = useState("404");
  const [timestamp, setTimestamp] = useState("");

  // Set timestamp only on client side
  useEffect(() => {
    setTimestamp(new Date().toISOString());
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789";
    let iteration = 0;

    const scrambleInterval = setInterval(() => {
      setScrambledText(
        "404"
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return "404"[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= 3) {
        clearInterval(scrambleInterval);
        setScrambledText("404");
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(scrambleInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] animate-pulse" />

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent animate-scan" />

      <div className="relative z-10 text-center space-y-8 px-4">
        {/* 404 Text */}
        <div className="relative">
          <h1
            className={`text-8xl md:text-9xl font-mono font-black tracking-wider ${
              glitch ? "animate-glitch" : ""
            }`}
            style={{
              color: "#fb923c",
              textShadow: glitch
                ? "0 0 10px #fb923c, 0 0 20px #fb923c, 0 0 40px #fb923c, 2px 2px 0px #22c55e, -2px -2px 0px #06b6d4"
                : "0 0 20px #fb923c, 0 0 40px #fb923c",
            }}
          >
            {scrambledText}
          </h1>
          {glitch && (
            <h1
              className="absolute inset-0 text-8xl md:text-9xl font-mono font-black tracking-wider opacity-50"
              style={{
                color: "#22c55e",
                textShadow: "0 0 10px #22c55e",
                transform: "translate(3px, 3px)",
              }}
            >
              404
            </h1>
          )}
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <p className="text-orange-500 text-xl md:text-2xl font-mono tracking-wide animate-pulse">
            [ ACCESS DENIED ]
          </p>
          <p className="text-orange-300/70 text-sm md:text-base font-mono max-w-md mx-auto">
            &gt; ERROR: The requested resource could not be located in the system database.
          </p>
          {timestamp && (
            <p className="text-orange-300/50 text-xs md:text-sm font-mono">
              &gt; Timestamp: {timestamp}
            </p>
          )}
        </div>

        {/* Animated border box */}
        <div className="relative inline-block mt-8">
          <div className="absolute inset-0 bg-orange-500/20 blur-xl animate-pulse" />
          <Link
            href="/"
            className="relative flex items-center gap-3 px-8 py-4 bg-black border-2 border-orange-500 text-orange-500 font-mono font-bold tracking-wider hover:bg-orange-500 hover:text-black transition-all duration-300 group"
          >
            <HiHome size={20} className="group-hover:rotate-12 transition-transform" />
            <span>[ RETURN HOME ]</span>
            <div className="absolute inset-0 border-2 border-orange-500 animate-ping opacity-20" />
          </Link>
        </div>

        {/* Terminal cursor */}
        <div className="flex justify-center items-center gap-2 text-orange-500 font-mono text-sm mt-8">
          <span>&gt;</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        .animate-glitch {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}</style>
    </div>
  );
}
