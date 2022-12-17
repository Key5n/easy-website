import { addDoc, collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "./clientApp";

export const addDocExample = async (
  /** @type {string} */ clubName,
  /** @type {string} */ description,
  /** @type {string} */ username
) => {
  return await addDoc(collection(db, clubName), {
    name: username,
    description,
  });
};

export const getDocsExample = async (/** @type {string} */ clubName) => {
  return await getDocs(collection(db, clubName));
};

export const display = (/** @type {QuerySnapshot} */ docs) => {
  docs.forEach((doc) => {
    const data = doc.data();
    JSON.stringify(data);
    console.log(data);
  });
};
