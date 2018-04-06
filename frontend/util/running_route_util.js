// copied from google maps api
let map

let locations = [];
let directionsService;
let directionsDisplay;
let markers = [];
let urlsearch;

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
    map.setOptions({
        styles: [
            {
                featureType: 'poi',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            }
        ]
    });


    directionsDisplay.setMap(map);
    map.addListener('click', (e) => {
        addWaypoint(e.latLng);
        if (locations.length > 1) {
            clearFirstMarker();
            calcRoute();
        } else placeMarker(e.latLng, map)

    })

};

function placeMarker(latLng, map) {
    let marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    markers.push(marker)
}


function clearFirstMarker() {
    markers[0].setMap(null)
}


function addWaypoint(latLng) {
    locations.push({location: latLng, stopover: true})
}


function calcRoute() {
    let selectedMode = 'WALKING';
    let request = {
        origin: locations[0].location,
        destination: locations[locations.length - 1].location,
        waypoints: locations.slice(1, -1),
        travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            console.log('request');
            console.log('response')
            directionsDisplay.setDirections(response);
        }
    });
}