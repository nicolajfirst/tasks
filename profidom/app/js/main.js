
    // Initialize and add the map
    function initMap() {
    // The location of Uluru
    var uluru = {lat: 46.4776966, lng: 30.7549346};
    // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map'),
        {
        zoom: 10, center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}


