import { addDoc } from "firebase/firestore";
// import { favCollectionRef } from "../firebase/firebaseConfig";
export default async function addGif(gif) {
  let response = null,
    error = null;
  try {
    // response = await favCollectionRef;
  } catch (e) {
    error = e;
  }
  return { response, error };
}
