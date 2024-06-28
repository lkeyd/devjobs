"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function ModeSlider() {
  const [mode, setMode] = useState("dark");

  const handleModeClick = () => {
    setMode((prevMode) => prevMode === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center gap-x-2">
      <Image
        src="sun.svg"
        width={24}
        height={24}
        style={{ filter: "invert(100%)" }}
      ></Image>
      <button
        onClick={handleModeClick}
        className="relative flex items-center bg-white w-16 h-6 rounded-full"
      >
        <span
          className={`absolute w-5 h-5 rounded-full bg-slate-500 transition-all duration-300 ${
            mode === `dark` ? `left-10` : `left-1`
          }`}
        ></span>
      </button>
      <Image
        src="moon.svg"
        width={24}
        height={24}
        style={{ filter: "invert(100%)" }}
      ></Image>
    </div>
  );
}
