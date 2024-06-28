"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);

  const handleInput = (event, func) => {
    func(event.target.value);
    console.log(event.target.value);
  };

  const toggleFullTimeOnly = () => {
    setFullTimeOnly(!fullTimeOnly);
  };

  const handleFilterClick = () => {
    setFilterToggle(!filterToggle);
  };

  const handleCloseFilter = () => {
    setFilterToggle(false);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 bg-[#1a202e] rounded-xl">
      <div className="flex gap-4 w-full lg:w-full border-0 lg:border-r-2 border-gray-500 border-opacity-30 h-full px-4">
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="hidden lg:block"
        ></Image>
        <div className="flex items-center w-full">
          <input
            type="text"
            onChange={(event) => handleInput(event, setTitle)}
            value={title}
            placeholder={"Filter by title.."}
            className="bg-[#1a202e] border-gray-500 text-gray-500 placeholder-gray-500 text-md focus:outline-none focus:ring-2 focus:ring-opacity-20 focus:ring-gray-500 focus:rounded-sm focus:border-gray-500 p-2 w-full"
          ></input>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 w-full border-r-2 border-gray-500 border-opacity-30 h-full px-4">
        <Image
          src="/location.svg"
          alt="location"
          width={24}
          height={24}
        ></Image>
        <div className="flex items-center w-full">
          <input
            type="text"
            onChange={(event) => handleInput(event, setLocation)}
            value={location}
            placeholder={"Filter by location.."}
            className="bg-[#1a202e] border-gray-500 text-gray-500 placeholder-gray-500 text-md focus:outline-none focus:ring-2 focus:ring-opacity-20 focus:ring-gray-500 focus:rounded-sm focus:border-gray-500 p-2 w-full"
          ></input>
        </div>
      </div>
      <div className="hidden lg:flex items-center px-4 w-[630px]">
        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={fullTimeOnly}
              onChange={toggleFullTimeOnly}
              className="form-checkbox text-gray-600 rounded-sm h-5 w-5 accent-[#5964df]"
            />
            <span className="text-white text-lg ml-2">Full Time Only</span>
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4">
        <button
          onClick={handleFilterClick}
          className="flex lg:hidden items-center w-8 h-8"
        >
          <Image src="/filter.svg" alt="filter" height={48} width={48}></Image>
        </button>
        <button className="bg-[#5964df] text-white text-xl rounded-xl px-4 py-2">
          Search
        </button>
      </div>
      {filterToggle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseFilter}
        >
          <div
            className="bg-[#1a202e] rounded-xl p-6 w-3/4 md:w-1/2 lg:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center border-2 border-gray-500 border-opacity-5 p-4">
                <Image
                  src="/location.svg"
                  width={24}
                  height={24}
                  alt="Location"
                />
                <input
                  type="text"
                  onChange={(event) => handleInput(event, setLocation)}
                  value={location}
                  placeholder={"Filter by location.."}
                  className="bg-[#1a202e] border-gray-500 text-gray-500 placeholder-gray-500 text-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 focus:ring-gray-500 focus:rounded-sm focus:border-gray-500 p-2 w-full"
                ></input>
              </div>
              <label className="flex items-center gap-4 cursor-pointer p-4 py-6 border-2 border-opacity-5 border-gray-500">
                <input
                  type="checkbox"
                  checked={fullTimeOnly}
                  onChange={toggleFullTimeOnly}
                  className="form-checkbox text-gray-600 rounded-sm h-5 w-5 accent-[#5964df]"
                />
                <span className="text-gray-500 text-xl ml-2">
                  Full Time Only
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
