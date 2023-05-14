// import { db } from "../firebaseConfig";

export default async function getFavorites(collection) {
  let result = null;
  let error = null;

  try {
    // result = await favRefs.get();
  } catch (e) {
    error = e;
  }

  return { result, error };
}
