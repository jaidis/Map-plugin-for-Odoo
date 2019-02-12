function load(){
    var partner_latitude = document.getElementById("lat").innerText;
    var partner_longitude = document.getElementById("long").innerText;
    var partner_location = document.getElementById("location_name").innerText;
    var mymap = L.map('mapid').setView([partner_latitude, partner_longitude], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFpZGlzIiwiYSI6ImNqczF3YWxmbDAwemY0M3Q5dTJpMG9ydGQifQ.Ez8OD9zzDE-V1midffWKvg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 9,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiamFpZGlzIiwiYSI6ImNqczF3YWxmbDAwemY0M3Q5dTJpMG9ydGQifQ.Ez8OD9zzDE-V1midffWKvg'
    }).addTo(mymap);
    var marker = L.marker([partner_latitude, partner_longitude]).addTo(mymap);
    marker.bindPopup("<b> "+ partner_location +" </b>").openPopup();
}
