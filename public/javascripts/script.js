const socket = io();

// Function to get fallback IP location
function getIPLocation() {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            console.warn("Using fallback IP location:", data.latitude, data.longitude);
            socket.emit("send-location", { latitude: data.latitude, longitude: data.longitude });
        })
        .catch(err => console.error("IP-based location failed", err));
}

// Check if geolocation is available
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Sending location:", latitude, longitude);
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.warn("Geolocation error:", error);
            getIPLocation(); // Use fallback if GPS fails
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 10000, // Increase timeout
        }
    );
}

// Initialize Leaflet map
const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Himanshi's Tracker"
}).addTo(map);

const markers = {};
let isFirstLocation = true;

// Listen for location updates from other users
socket.on("recieved-location", (data) => {
    const { id, latitude, longitude } = data;

    // Only center on the first location
    if (isFirstLocation) {
        map.setView([latitude, longitude]);
        isFirstLocation = false;
    }

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

// Handle user disconnection
socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
