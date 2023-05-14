import app from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default async function signIn(email, password) {
  let response = null,
    error = null;
  try {
    response = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { response, error };
}
