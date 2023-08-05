// addPlace.js

import { getFirestore } from "./firebase/firestore";

import { app } from "./firebaseConfig";

// Inizializza il database Firestore
const db = getFirestore(app);

// Aggiungi un documento alla collezione "places"
async function addPlace(latitude, longitude, name, plusCode) {
  try {
    const docRef = await addDoc(collection(db, "places"), {
      latitude: latitude,
      longitude: longitude,
      name: name,
      plusCode: plusCode,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default addPlace;
