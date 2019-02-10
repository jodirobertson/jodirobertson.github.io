function initMap() {
    var nicaragua = {lat: 12.1150, lng: -86.2362};
    var montezuma = {lat: 35.6522, lng: -105.2766};
    var zuni = {lat: 35.0695, lng: -108.8484};
    var eastVassalboro = {lat: 44.4479, lng: -69.6066};
    var hunterMountain = {lat: 42.2078, lng: -74.2078};
    var seattle = {lat: 47.6062, lng: -122.3321};
    var awa = {lat: 33.3670, lng: 133.2589};
    var missouri = {lat: 38.5026, lng: -90.6279};
    var nola = {lat: 29.9511, lng: -90.0715};
    var bahamas = {lat: 24.8371, lng: -76.3427};
    var nahant = {lat: 42.4266, lng: -70.9223};
    var israel = {lat: 32.0853, lng: 34.7818};
    var palestine = {lat: 31.86667, lng: 35.45};
    var colombia = {lat: 4.7110, lng: -74.0721};
    var guatemala = {lat: 14.6907, lng: -91.2025};

    var arrayPosn = [nicaragua, montezuma, zuni, eastVassalboro, hunterMountain, seattle, awa, missouri, nola, bahamas, nahant, israel, palestine, colombia, guatemala];
    
    // The map
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 2, center: seattle});
    // The markers
    arrayPosn.forEach(function(posn) {
        var marker = new google.maps.Marker({position: posn, map: map});
    });
}