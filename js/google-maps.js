// Club Laiya
$(document).ready(function() {
    let locations = [
        ['Brgy. Sta Ana, Calatagan, Batangas', 13.791820, 120.644360, 1],
    ];

    let map = new google.maps.Map(document.getElementById('club-laiya-location-embeded-google-map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    let infowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    let marker, i;

    let image = 'http://beta.mvpi.ph/assets/frontend/img/icons/logo-symbol_active.png';

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
        });

        //extend the bounds to include each marker's position
        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    //now fit the map to the newly inclusive bounds
    map.fitBounds(bounds);

    //(optional) restore the zoom level after the map is done scaling
    let listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(6);
        google.maps.event.removeListener(listener);
    });
});

// Casobe
$(document).ready(function() {
    let locations = [
        ['Brgy. Sta Ana, Calatagan, Batangas', 13.791820, 120.644360, 1],
    ];

    let map = new google.maps.Map(document.getElementById('casobe-location-embeded-google-map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    let infowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    let marker, i;
    let image = 'http://beta.mvpi.ph/assets/frontend/img/icons/logo-symbol_active.png';

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
        });

        //extend the bounds to include each marker's position
        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    // now fit the map to the newly inclusive bounds
    map.fitBounds(bounds);

    //(optional) restore the zoom level after the map is done scaling
    let listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(6);
        google.maps.event.removeListener(listener);
    });
});

// Costa Azalea
$(document).ready(function() {
    let locations = [
        ['Samal Island, Davao Del Norte, Philippines', 7.133040, 125.689580, 1],
    ];

    let map = new google.maps.Map(document.getElementById('costa-azalea-location-embeded-google-map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    let infowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    let marker, i;
    let image = 'http://beta.mvpi.ph/assets/frontend/img/icons/logo-symbol_active.png';

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
        });

        //extend the bounds to include each marker's position
        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    //now fit the map to the newly inclusive bounds
    map.fitBounds(bounds);

    //(optional) restore the zoom level after the map is done scaling
    let listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(6);
        google.maps.event.removeListener(listener);
    });
});