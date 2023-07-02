import { db } from "./firebaseConfig";
import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    getDocs,
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
    console.log(currhistory);
    return deleteDoc(currhistory);
  };
  const getALLHistory = async(id) => {
    const q=query(collection(db,"HistoryNews"), where('id','==',id));
    const qresult=await getDocs(q);
    return qresult;
  };
  
  export { addHistory, updateHistory, deleteHistory, getALLHistory };