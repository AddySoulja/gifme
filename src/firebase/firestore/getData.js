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
const cityRef = db.collection("cities").doc("SF");
const doc = await cityRef.get();
if (!doc.exists) {
  console.log("No such document!");
} else {
  console.log("Document data:", doc.data());
}
