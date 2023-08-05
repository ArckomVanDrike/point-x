// Import the required Firebase modules
import { getDatabase, ref, push, set } from "firebase/database";

document.getElementById("newLocationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Recuperate the data entered by the user
  const locationName = document.getElementById("locationName").value;
  const description = document.getElementById("description").value;
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;
  const plusCode = document.getElementById("plusCode").value;

  // Generate a unique ID for the new location
  const newLocationKey = push(ref(getDatabase())).key;

  // Create an object with the data of the new location, including the Plus Code
  const newLocationData = {
    id: newLocationKey,
    name: locationName,
    description: description,
    latitude: latitude,
    longitude: longitude,
    plusCode: plusCode,
    // Other fields if necessary
  };

  // Save the data to the database
  set(ref(getDatabase(), "locations/" + newLocationKey), newLocationData)
    .then(() => {
      alert("Location added successfully!");
      // Clear the form after insertion
      document.getElementById("newLocationForm").reset();
    })
    .catch((error) => {
      console.error("Error while saving data:", error);
    });
});

