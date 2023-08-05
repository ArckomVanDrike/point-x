// Import the Firebase configuration from the firebaseConfig.js file
import firebaseConfig from "./firebaseConfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
import { OpenLocationCode } from "./percorso_della_libreria/openlocationcode.min.js";

// Initialize the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Function to get the user's GPS location
export function getLocation() {
  if (navigator.geolocation) {
    // Library is loaded, call the showPosition function
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Function to handle the obtained GPS location
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Convert GPS coordinates to a plus code
  const plusCode = OpenLocationCode.encode(latitude, longitude);

  // Display the GPS coordinates in the console
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  console.log("Plus Code:", plusCode);

  // Now compare the plus code with points of interest
  const places = [
    // List of points of interest with their plus codes
    { name: "Place A", plusCode: "XXXXXX+XX" },
    { name: "Place B", plusCode: "XXXXXX+XX" },
    // Add other points of interest here
  ];

  // Check if the current plus code matches any of the points of interest
  const currentPlace = places.find((place) => place.plusCode === plusCode);

  if (currentPlace) {
    // Assign the badge to the user for this point of interest
    console.log("Congratulations! You've earned the badge for", currentPlace.name);
    // Implement the logic here to assign the badge to the user
    // For example, you can show a notification, update a variable, etc.
  } else {
    console.log("You haven't visited any points of interest.");
    // Implement the logic here to handle the absence of a point of interest
  }
}

// Function to handle geolocation errors
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

export { getLocation };

