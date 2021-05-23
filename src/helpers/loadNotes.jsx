import React from "react";
import { db } from "../firebase/firebaseConfig";

const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();

  const notes = [];
  notesSnap.forEach((snapHijo) => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });
  console.log({ notes });
  return notes;
};

export default loadNotes;
