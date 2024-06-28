import React from "react";
import Image from "next/image";

export default function JobCard(props) {
  const job = props.job;
  console.log(job);

  const getImage = (logoNumber) => {
    const base = "/logo";
    const extension = logoNumber <= 3 ? ".png" : ".jpg";
    return `${base}${logoNumber}${extension}`;
  };

  const getFullTime = () => {
    return;
  };

  return (
    <a href ="#" className="flex flex-col gap-2 bg-[#1a202e] rounded-xl pl-8 mb-8 w-full">
      <div className="relative w-14 h-14">
        <Image
          src={getImage(job.companyLogo)}
          fill
          className="rounded-xl -mt-8"
        ></Image>
      </div>
      <div className="flex flex-col gap-4 -mt-4">
        <div className="flex items-center gap-4 ">
          <p className="text-gray-500">{job.date}</p>
          <span className="w-1 h-1 rounded-full bg-gray-500"></span>
          <p className="text-gray-500">
            {job.fullTime ? `Full Time` : `Part Time`}
          </p>
        </div>
        <p className="text-white text-xl">{job.jobTitle}</p>
        <p className="text-gray-500">{job.hiringCompany}</p>
        <p className="text-[#5964df] font-bold pt-12 pb-12">{job.country}</p>
      </div>
    </a>
  );
}
