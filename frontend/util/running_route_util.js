// copied from google maps api
let map

let locations = []
let directionsService
let directionsDisplay

export const initMap = () => {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    let sanFran = {lat: 37.77949, lng: -122.4194};
    let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: sanFran,
            disableDefaultUI: true,
        })
    ;
    directionsDisplay.setMap(map)
    map.addListener('click', (e) => {
        placeMarker(e.latLng, map)
    })

}

function placeMarker(latLng, map) {
    let marker = new google.maps.Marker({
        position: latLng,
        map: map
    });

    addWaypoint(latLng)
    calcRoute()
}

function addWaypoint(latLng) {
    locations.push({location: latLng, stopover: true})
    console.log(locations)
}


function calcRoute() {
    let selectedMode = 'WALKING'
    let request = {
        origin: locations[0].location,
        destination: locations[locations.length - 1].location,
        waypoints: locations.slice(1, -1),
        travelMode: google.maps.TravelMode[selectedMode]
    }
    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        }
    });
}