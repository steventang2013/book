// create a firebase reference to the root
var ref = new Firebase('https://publicdata-parking.firebaseio.com');

var data;

// read data from the location san_francisco/garages, only once
ref.child('san_francisco/garages').once('value', function(snapshot){
  data = snapshot.val()

  var garages = _.filter(data, function(d){
      return _.has(d, 'open_spaces')
  })

  drawGarages(garages)
})

var attributionText = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a       href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'

// create the map
var map = L.map($('#map')[0]).setView([37.78, -122.41], 13)
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: attributionText,
    maxZoom: 18,
    id: 'doubleshow.noeko77m',
    accessToken: 'pk.eyJ1IjoiZG91Ymxlc2hvdyIsImEiOiJjaWZ5Y3B1eTE1MHRidWRtMG9uZXluajg4In0.u5ONW27Ly5cU7M5KYi6Y9Q'
}).addTo(map)

// create a layer group to hold all the markers
var markersLayerGroup = L.layerGroup()
// add the makers layer group to the map
markersLayerGroup.addTo(map)

// visualize garages on a map
function drawGarages(garages){

  // clear all existing markers (if any)
  markersLayerGroup.clearLayers()

  _.forEach(garages, function(garage){
    var color_icon;
  var points = garage.points
    var latlng = [points[0], points[1]]
    // create a circle layer
    /*var circle = L.circle(latlng, 10, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    })*/
  var garage_name = garage.friendlyName;
  var open = garage.open_spaces;
  var total = garage.total_spaces;
  
  if (parseInt(open) < 100){
    color_icon = createIcon('img/redIcon.png', latlng);
  }
  else if (parseInt(open) >= 100 && parseInt(open) < 300){
    color_icon = createIcon('img/blueIcon.png', latlng);
  }
  else {
    color_icon = createIcon('img/greenIcon.png', latlng);
  }
  
  var rate_data = getRate(garage);

  var button = "<button onclick='generate_modal(\"" + rate_data[0] + "\" , \"" + rate_data[1] + "\")' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Rates</button>"
  L.marker(latlng, {icon: color_icon}).bindPopup("<b>" + garage_name + "</b><br>" + open + " open spaces <br>" + total + " total spaces <br>" +
                           "<div>" + button + "</div>").addTo(map);
                           
    // add the circle layer to the makers layer group
    //markersLayerGroup.addLayer(circle)

  })

}

function createIcon(image, latlng){
  var colorcon = L.icon({
    iconUrl: image,
    iconSize: [30, 50],
    popupAnchor: [0, 0]
  });
  return colorcon;
}

function getRate(garage){
  var name = garage.friendlyName;
  var content = "";
  var garage_rate_info = [];
  for (var time in garage.rates){
    for (var ele in garage.rates[time]){
      content += ele + ':';
      content += garage.rates[time][ele] + "   ";
    }
    content += " <br>"
  }
  garage_rate_info[0] = name;
  garage_rate_info[1] = content;
  return garage_rate_info;
}

function generate_modal(rate0, rate1){
  //refresh
  document.getElementById('rate-title').innerHTML = rate0
  document.getElementById('content-stuff').innerHTML = rate1
}