// copied from google maps api
let locations = [];
let directionsService;
let directionsDisplay;
let markers = [];
let urlsearch;
let geocoder;
let map;
let request;
let storedResponse;

export const initMap = (center = {lat: 37.77949, lng: -122.4194}) => () => {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true
    });
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: center,
        disableDefaultUI: true,
    });

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
    console.log('place marker', latLng)
    let marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    markers.push(marker)
}


function clearFirstMarker() {
    markers[markers.length - 1].setMap(null)
}


function addWaypoint(latLng) {
    locations.push({location: latLng, stopover: true})
}

export const removeLastWaypoint = () => {
    locations = locations.slice(0, locations.length - 1);
    if (locations.length > 1) {
        calcRoute()
    } else if (length === 1) {
        console.log(locations);
        placeMarker(locations[0].location, map);
        directionsDisplay.setMap(null)
    } else {
        clearFirstMarker();
    }
};

export const removeAllWaypoint = () => {
    console.log('removeall');
    locations = [];
    directionsDisplay.setMap(null)
};


export const calcRoute = (request) => {
    let selectedMode = 'WALKING';
    request = request || {
        origin: locations[0].location,
        destination: locations[locations.length - 1].location,
        waypoints: locations.slice(1, -1),
        travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            storedResponse = response;
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(map)
        }
    });
}

//Call this wherever needed to actually handle the display
export const codeAddress = (zipCode) => {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': zipCode, "componentRestrictions": {"country": "US"}
    }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

            map.setCenter(results[0].geometry.location);

        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
};

export const getResponse = () => {
    return storedResponse;
};

export const mapExists = () => {
    return map !== undefined;
}