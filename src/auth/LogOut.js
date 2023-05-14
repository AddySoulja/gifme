import app from "../firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

export default async function logOut() {
  let response = null,
    error = null;
  try {
    response = await signOut(auth);
  } catch (e) {
    error = e;
  }
  return { response, error };
}
