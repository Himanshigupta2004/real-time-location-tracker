const socket=io(); //connection req jayegi

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
       const {latitude,longitude}= position.coords;
        socket.emit("send-location",{latitude,longitude});
    },(error)=>{
        console.log(error);
    },
    {
        enableHighAccuracy:true,
        maximumAge:0,//ensure the fresh location data
        timeout:2000,//in how much time it should check again
        fallbackToIP: true,// Uses IP-based location if GPS fails 
        allowBackgroundLocation: false,
    }
);
}

const map=L.map("map").setView([0,0],10); //set latitude longitude as 0 and zoom 10

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"OpenStrretMap"
}).addTo(map);


