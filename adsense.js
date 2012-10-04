// Add a Google AdSense ad to map

var setupAdsense = function( map ) {
 
  var adsense = "pub-6421937014796169";
    
  var adUnit = new google.maps.adsense.AdUnit( 
    document.createElement("div"), 
    {
      format: google.maps.adsense.AdFormat.BUTTON,
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
      publisherId: adsense,
      map: map,
      visible: true
    });
};
