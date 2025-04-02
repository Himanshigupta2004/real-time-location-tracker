# Real-Time Location Tracker

## Overview
This project is a **real-time location tracking application** built using **Node.js, Express, Socket.io, and Leaflet.js**. It allows users to share their live locations with others on an interactive map.

## Features
- 📍 **Real-time location sharing** via WebSockets (Socket.io)
- 🌍 **Map integration** using Leaflet.js and OpenStreetMap
- 🔄 **Auto-updates** location when a user moves
- 🚀 **Supports multiple users** with individual markers
- ❌ **Removes users from the map** when they disconnect

## Technologies Used
- **Backend:** Node.js, Express, Socket.io
- **Frontend:** HTML, CSS, JavaScript, Leaflet.js
- **Map Data Provider:** OpenStreetMap

## Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone 
cd real-time-location-tracker
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Server
```bash
node server.js
```

or if you have **Nodemon** installed:
```bash
nodemon server.js
```

### 4️⃣ Open the App
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
📂 real-time-location-tracker
├── 📂 public
│   ├── 📂 style (CSS files)
│   ├── 📂 javascripts (Client-side JS)
├── 📂 views (EJS templates)
├── server.js (Main server file)
├── package.json
└── README.md
```

## How It Works
1. When a user **visits the app**, their browser requests **geolocation permission**.
2. The location is **sent to the server** via WebSockets.
3. The **server broadcasts** this location to all connected users.
4. The frontend **updates the map** with the new location.
5. If a user **disconnects**, their marker is removed from the map.

## Troubleshooting
### ❌ Location Not Updating?
- Ensure your **browser allows location access** (`chrome://settings/content/location`).
- Use a **device with GPS** (smartphone) for more accuracy.
- Restart the browser or **try in incognito mode**.

### ❌ Server Not Running?
- Check if **Node.js is installed** (`node -v`).
- Try running `npm install` again.
- Ensure **port 3000 is free** or change the port in `server.js`.

## Contributing
Feel free to contribute by **opening issues, improving the UI, or adding features**!


