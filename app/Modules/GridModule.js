"use client";
import "../globals.css";
import React from "react";
import JobCard from "../Components/JobCard";
import { useState, useEffect } from "react";


export default function GridModule() {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayAmount, setDisplayAmount] = useState(6);

  const handleLoad = () => {
    const currentDisplayAmount = displayAmount;
    setDisplayAmount(currentDisplayAmount + 6);
  };

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch("jobdata.json");
        if (!response.ok) {
          throw new Error("Failed to retrieve data");
        }
        const data = await response.json();
        setJobData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job data: ", error.message);
        setJobData(null);
      }
    };
    fetchJobData();
  }, []);

  return loading ? (
    <div></div>
  ) : (
    <div className="py-16 pb-40 w-full">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobData.slice(0, displayAmount).map((job, index) => {
            return <JobCard key={index} job={job}></JobCard>;
          })}
        </div>
        {displayAmount <= jobData.length ? (
          <div className="w-full flex justify-center items-center">
            <button onClick={handleLoad} className="bg-[#5964df] text-white px-4 p-2 rounded-lg hover:scale-[1.03] transition-transform duration-200">
              Load More
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
