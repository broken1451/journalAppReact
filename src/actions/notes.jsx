import React from "react";
import { types } from "../types/types";

import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import loadNotes from "../helpers/loadNotes";
import fileUpload from "../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNotes = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNotes);

    dispatch(activeNote(docRef.id, newNotes));
    dispatch(addNewNote(docRef.id, newNotes));
    Swal.fire("Created", "", "success");
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};

export const addNewNote = (id, note) => {
  return {
    type: types.notesAddNew,
    payload: {
      id,
      ...note,
    },
  };
};




export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: [...notes],
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteFireStore = { ...note };
    delete noteFireStore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFireStore);
    // dispatch(startLoadingNotes(uid)) // carga perezo/ manera facil
    dispatch(refreshNote(note.id, noteFireStore)); // noteFireStore / note  no hace falta nada solo se envia y ya
    Swal.fire("Created", note.title, "success");
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdated,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
  // return { con note
  //   type: types.notesUpdated,
  //   payload: {
  //     id,
  //     note,
  //   },
  // };
};

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const FileUpload = await fileUpload(file);
    activeNote.url = FileUpload;
    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};

export const startDelete = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().uid;
    const user = getState().auth;
    const bdCollection = db.collection(user.uid)
   
    // console.log(`${id}/journal/notes/${id}`);
    // db.collection("app").document("users").collection(uid).document("notifications")
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    bdCollection.doc(id).delete().then(()=>console.log('borrado'))
    

    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => {
  return {
    type: types.notesDelete,
    payload: id,
  };
};

export const noteLogout = () => {
  return {
    type: types.notesLogoutCleaning
  };
};
