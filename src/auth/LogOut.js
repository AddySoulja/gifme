import { getAuth, signOut } from "firebase/auth";

export default async function logOut() {
  const auth = getAuth();
  let response = null,
    error = null;
  try {
    response = await signOut(auth);
  } catch (e) {
    error = e;
  }
  return { response, error };
}
