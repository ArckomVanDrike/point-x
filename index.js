import L from "leaflet";

// Inizializza la mappa sulla div 'map'
const map = L.map('map').setView([51.505, -0.09], 13);

// Aggiungi un layer della mappa di OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to get the user's current location
function getUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Get latitude and longitude from the position object
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Center the map on the user's location
        map.setView([latitude, longitude], 15); // Set the zoom level as desired (here it's set to 15)

        // Display the user's coordinates and Plus Code on the marker
        const plusCode = OpenLocationCode.encode(latitude, longitude);
        const userMarker = L.marker([latitude, longitude]).addTo(map);
        userMarker.bindPopup(`Latitude: ${latitude}<br>Longitude: ${longitude}<br>Plus Code: ${plusCode}`).openPopup();
      },
      function (error) {
        console.error("Error getting user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not available in this browser.");
  }
}

// Call the getUserLocation function when the page loads
getUserLocation();

// Aggiungi un marker sulla mappa per il Colosseo
const colosseoMarker = L.marker([41.890251, 12.492373]).addTo(map);
colosseoMarker.bindPopup("Colosseo").openPopup();

// Aggiungi un marker sulla mappa per la Torre Eiffel
const torreEiffelMarker = L.marker([48.8584, 2.2945]).addTo(map);
torreEiffelMarker.bindPopup("Torre Eiffel").openPopup();
