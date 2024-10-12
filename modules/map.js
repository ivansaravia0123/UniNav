// Create the map
var map = L.map('map').setView([13.48861, -88.19208], 13);

// Create different tile layers
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,});

var osmTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,});

// Add one of the base layers to the map by default
osm.addTo(map);

// Create a base layers object
var baseLayers = {
    "Leaflet Default": osm,
    "Leaflet Hot": osmHOT,
    "Leaflet TopoMap" : osmTopoMap,
};


// Definir el ícono personalizado para la ubicación actual (figura de una persona)
const personIcon = L.AwesomeMarkers.icon({
    icon: 'street-view',  // Ícono de FontAwesome (puedes cambiarlo)
    markerColor: 'blue',  // Color del marcador
    prefix: 'fa',  // Prefijo para FontAwesome
    iconColor: 'white'    // Color del ícono de la persona
});

// Función para obtener y mostrar la ubicación actual con el ícono de persona
function showCurrentLocation(map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Añadir el marcador con el ícono de persona en la ubicación actual
            const currentLocationMarker = L.marker([lat, lng], { icon: personIcon }).addTo(map);
            map.setView([lat, lng], 16);  // Ajustar el zoom en la ubicación actual
        }, function () {
            alert('No se pudo obtener la ubicación actual');
        });
    } else {
        alert('Geolocalización no es soportada por este navegador');
    }
}


var layerControl = L.control.layers(baseLayers).addTo(map);

layerControl.setPosition('bottomleft');

// Llamar a la función cuando el mapa esté cargado
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([initialLat, initialLng], 15);  // Inicializa el mapa
    showCurrentLocation(map);  // Muestra la ubicación actual
});