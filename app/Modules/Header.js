import React from "react";
import ModeSlider from "../Components/ModeSlider.js";
import { Kumbh_Sans } from "next/font/google";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Header() {
  return (
    <div className="flex justify-center bg-[#5964df] h-40 w-full rounded-bl-full">
      <div className="flex justify-between w-full max-w-[1080px] mt-10 px-4">
        <h1 className={`text-4xl text-white font-bold ${kumbhSans.className}`}>
          devjobs
        </h1>
        {
          //<div>
          //<ModeSlider />
          //</div>
        }
      </div>
    </div>
  );
}
