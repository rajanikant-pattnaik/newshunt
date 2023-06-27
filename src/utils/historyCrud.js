import { db } from "./firebaseConfig";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  const historyCollection = collection(db, "HistoryNews");
  const addHistory = (history) => {
    return addDoc(historyCollection, history);
  };
  const updateHistory = (id, history) => {
    const currhistory = doc(db, "HistoryNews", id);
    return updateDoc(currhistory, history);
  };
  const deleteHistory = (id) => {
    const currhistory = doc(db, "HistoryNews", id);
    return deleteDoc(currhistory);
  };
  const getALLHistory = () => {
    return getDocs(historyCollection);
  };
  
  export { addHistory, updateHistory, deleteHistory, getALLHistory };