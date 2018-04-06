// copied from google maps api
let map
export const initMap = () => {
    var uluru = {lat: 37.77949, lng: -122.4194};
    var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru,
            disableDefaultUI: true,
        })
    ;

    map.addListener('click', (e) => placeMarkerAndPanTo(e.latLng, map))
}

function placeMarker(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}