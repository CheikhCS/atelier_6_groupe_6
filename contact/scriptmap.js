// Intialisation de la carte pour les coordonnees de Dakar
var map = L.map('map').setView([14.6937000,  -17.4440600], 11);

// Ajout de la carte 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Ajout du marqueur 
var marker = L.marker([14.6937000,  -17.4440600]).addTo(map);


// Pop Up pour afficher le message du groupe 
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Atelier 6 Startup Groupe 6")
        .openOn(map);
}

map.on('click', onMapClick);