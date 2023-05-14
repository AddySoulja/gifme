import { db } from "../firebaseConfig";

export default async function getDoument(collection) {
  const favRefs = db.collection(collection);

  let result = null;
  let error = null;

  try {
    result = await favRefs.get();
  } catch (e) {
    error = e;
  }

  return { result, error };
}
