// make a google Map object, add script into page


$(document).ready( function() {

  // https://code.google.com/apis/console/#project:892963257598:access
  var apikey = "AIzaSyA7321NrGVV7Kq7ouqDTlEFXZ-YuZW6cM0";

   var el = document.createElement("script");
   el.type = "text/javascript";
   el.src = "http://maps.googleapis.com/maps/api/js?sensor=false&key=" +apikey+
                      "&libraries=adsense&callback=initializeMap";
   // var dest = document.getElementsByTagName("head")[0];
   var dest = document.body;
   dest.appendChild( el ); 
   // dest.insertBefore( el, dest.firstChild );
 });

// onload callback
function initializeMap() {
  Map.map = new Map();
  if (setupAdsense) {
    setupAdsense( Map.map.map );  // die die die
  }
}

//----------------------------------------------------------------------
//  var map = new Map({ lat: -35, lng: 150, el:document.getElementById("map")});
//----------------------------------------------------------------------
var Map = (function()
{
  function Map( inArgs ) {
    var args = inArgs || {};

    this.lat = args.lat || 47;
    this.lng = args.lng || -122;
    this.mapEl = args.el || document.getElementById('map');

    var mapOptions = {
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true
    };

    this.map = new google.maps.Map( this.mapEl, mapOptions );

    if (this.lat) {
     this.setCenter( this.lat, this.lng ); 
    }
  };
    
  Map.prototype = {

    //----------------------------------------
    setCenter: function( lat, lng ) {
      this.lat = lat;
      this.lng = lng;
      this.center = new google.maps.LatLng( this.lat, this.lng );
      
      this.marker = new google.maps.Marker(
        {
          position: this.center,
          title: 'You are here. Creepy, huh?',
          animation: google.maps.Animation.DROP,
          map: this.map,
          draggable: true
        });

      this.map.setCenter( this.center );
    }
  };

  return Map;
})();

