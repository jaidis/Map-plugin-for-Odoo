function load() {
    $("#plantillaMapa").children("#mapid").remove();
    var mapid = $('<div id="mapid" style="height:300px"></div>');
    $("#plantillaMapa").append(mapid);

    var partner_latitude;
    var partner_longitude;
    var partner_location;

    if ($("#lat").children().val() == "")
        partner_latitude = $("#lat").children().text();
    else
        partner_latitude = $("#lat").children().val();


    if ($("#long").children().val() == "")
        partner_longitude = $("#long").children().text();
    else
        partner_longitude = $("#long").children().val();


    if ($("#location_name").children().children().val() == "")
        partner_location = $("#location_name").children().text();
    else
        partner_location = $("#location_name").children().children().val();


    var mymap = L.map('mapid').setView([partner_latitude, partner_longitude], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFpZGlzIiwiYSI6ImNqczF3YWxmbDAwemY0M3Q5dTJpMG9ydGQifQ.Ez8OD9zzDE-V1midffWKvg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiamFpZGlzIiwiYSI6ImNqczF3YWxmbDAwemY0M3Q5dTJpMG9ydGQifQ.Ez8OD9zzDE-V1midffWKvg'
    }).addTo(mymap);
    var marker = L.marker([partner_latitude, partner_longitude]).addTo(mymap);
    marker.bindPopup("<b> " + partner_location + " </b>").openPopup();
}
