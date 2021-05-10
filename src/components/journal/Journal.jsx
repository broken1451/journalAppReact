import React from "react";
import Notes from "../notes/Notes";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";

const Journal = () => {
  return (
    <div className='journal__main-container'>
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <Notes />
      </main>
      
    </div>
  );
};

export default Journal;
