"use client";
import React from "react";
import JobCard from "../Components/JobCard";
import { useState, useEffect } from "react";

export default function GridModule() {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="pt-16 w-full">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobData.map((job) => {
            return <JobCard job={job}></JobCard>;
          })}
        </div>
      </div>
    </div>
  );
}
