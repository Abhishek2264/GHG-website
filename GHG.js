// Using Leaflet.js - Make sure to include the Leaflet CSS and JS files in your HTML
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Example data - replace with actual GHG data
const countries = [
    {"name": "USA", "lat": 37.0902, "lon": -95.7129, "ghg": "6,674 MT CO2"},
    {"name": "India", "lat": 20.5937, "lon": 78.9629, "ghg": "2,654 MT CO2"},
    // Add more countries here
];

countries.forEach((country) => {
    L.marker([country.lat, country.lon])
      .addTo(map)
      .bindPopup(`<strong>${country.name}</strong><br>GHG Emissions: ${country.ghg}`);
});
