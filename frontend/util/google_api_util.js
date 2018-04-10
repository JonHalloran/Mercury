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
let clickListener;

export const initMap = (
  center = { lat: 37.77949, lng: -122.4194 }
) => routeIn => {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true
  });
  locations = [];

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: center,
    disableDefaultUI: true
  });

  map.setOptions({
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      }
    ]
  });

  directionsDisplay.setMap(map);

  if (routeIn !== undefined) {
    calcRoute(routeIn);
  } else {
    clickListener = map.addListener("click", e => {
      addWaypoint(e.latLng);
      if (locations.length > 1) {
        clearFirstMarker();
        calcRoute();
      } else placeMarker(e.latLng, map);
    });
  }
};

function placeMarker(latLng) {
  let marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  markers.push(marker);
}

function clearFirstMarker() {
  markers[markers.length - 1].setMap(null);
}

function addWaypoint(latLng) {
  locations.push({ location: latLng, stopover: true });
}

export const removeLastWaypoint = () => {
  locations = locations.slice(0, locations.length - 1);
  if (locations.length > 1) {
    calcRoute();
  } else if (length === 1) {
    placeMarker(locations[0].location, map);
    directionsDisplay.setMap(null);
  } else {
    clearFirstMarker();
  }
};

export const removeAllWaypoint = () => {
  locations = [];
  directionsDisplay.setMap(null);
};

export const calcRoute = request => {
  let selectedMode = "WALKING";
  request = request || {
    origin: locations[0].location,
    destination: locations[locations.length - 1].location,
    waypoints: locations.slice(1, -1),
    travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == "OK") {
      storedResponse = response;
      directionsDisplay.setDirections(response);
      directionsDisplay.setMap(map);
    }
  });
};

//Call this wherever needed to actually handle the display
export const codeAddress = zipCode => {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode(
    {
      address: zipCode,
      componentRestrictions: { country: "US" }
    },
    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    }
  );
};

export const getResponse = () => {
  return {
    response: storedResponse,
    waypointLat: locations[0].location.lat(),
    waypointLng: locations[0].location.lng()
  };
};

export const mapExists = () => {
  return map !== undefined;
};

export const removeClicks = () => {
  console.log(clickListener);
  google.maps.event.removeListener(clickListener);
  directionsDisplay.directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true
  });
};

export const staticThumbImage = polyline =>
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=enc%3A${polyline}&key=AIzaSyAdfqHssdl3Lpo_Lul6UOOGLwnfO85bbJ0`,
    method: "GET"
  });
