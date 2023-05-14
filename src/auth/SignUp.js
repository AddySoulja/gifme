import app from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

export default async function signUp(username, email, password) {
  const auth = getAuth(app);
  let response = null,
    error = null;
  try {
    response = await createUserWithEmailAndPassword(auth, email, password);
    response = await updateProfile(response.user, { displayName: username });
  } catch (e) {
    error = e;
  }
  return { response, error };
}
