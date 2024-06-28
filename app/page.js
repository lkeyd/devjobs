import React from "react";
import Header from "./Modules/Header.js";
import GridModule from "./Modules/GridModule.js";
import SearchBarModule from "./Modules/SearchBarModule.js";

export default function page() {

  return (
    <div className="flex flex-col items-center bg-[#121721]">
      <Header />
      <SearchBarModule />
      <GridModule />
    </div>
  );
}
