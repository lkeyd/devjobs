import React from "react";
import Image from "next/image";
import ModeSlider from "../Components/ModeSlider.js";

export default function Header() {
  return (
    <div className="flex justify-center bg-[#5964df] h-40 w-full rounded-bl-full">
      <div className="flex justify-between w-full max-w-[1080px] mt-10 px-6 xl:px-0">
        <div className="text-3xl">devops</div>
        <div>
          <ModeSlider />
        </div>
      </div>
    </div>
  );
}
