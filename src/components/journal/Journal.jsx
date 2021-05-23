import React from "react";
import { useSelector } from "react-redux";
import Notes from "../notes/Notes";
import NothingSelected from "./NothingSelected";
import Sidebar from "./Sidebar";

const Journal = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-container animate__animated animate__fadeIn animate__faster">
      <Sidebar />
      <main>{active ? <Notes /> : <NothingSelected />}</main>
    </div>
  );
};

export default Journal;
