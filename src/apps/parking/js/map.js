// create a firebase reference to the root
var ref = new Firebase('https://publicdata-parking.firebaseio.com');
var busRef = new Firebase('https://publicdata-transit.firebaseio.com');
var data;
var data1;

// read data from the location san_francisco/garages, only once
function drawMap(){
	ref.child('san_francisco/garages').once('value', function(snapshot){
	  data = snapshot.val()

	  var garages = _.filter(data, function(d){
		  return _.has(d, 'open_spaces')
	  })

	  drawGarages(garages)
	})

}

function generateBus(bus_id){
	busRef.child('sf-muni/vehicles').on('value', function(snapshot){
		data1 = snapshot.val()
		drawBuses(data1, bus_id);
	})
}

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
    color_icon = createIcon('img/redicon.png', latlng);
  }
  else if (parseInt(open) >= 100 && parseInt(open) < 300){
    color_icon = createIcon('img/bluedot.png', latlng);
  }
  else {
    color_icon = createIcon('img/greenicon.png', latlng);
  }
  
  var rate_data = getRate(garage);

  var button = "<button onclick='generate_modal(\"" + rate_data[0] + "\" , \"" + rate_data[1] + "\")' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Rates</button>"
  L.marker(latlng, {icon: color_icon}).bindPopup("<b>" + garage_name + "</b><br>" + open + " open spaces <br>" + total + " total spaces <br>" +
                           "<div>" + button + "</div>").addTo(map);
                           
    // add the circle layer to the makers layer group
    //markersLayerGroup.addLayer(circle)

  })

}

function drawBuses(bus_data, bus_id){
  // clear all existing markers (if any)
  var bool = 0;
  markersLayerGroup.clearLayers()
  	map.eachLayer(function (layer) {
		if (parseInt(layer._leaflet_id) == 22){
			bool = 1;
		}
		else{
			bool = 0;
		}
		if (bool == 0){
			map.removeLayer(layer);
		}
	});
  drawMap();	
  console.log("method called");
  _.forEach(bus_data, function(bus){
	  var latlng = [bus.lat, bus.lon]
	  if (bus.vtype == 'bus'){
		  bus_val = parseInt(bus.id);
		  var busIcon = L.icon({
			iconUrl: 'img/busicon.png',
			iconSize: [20, 30],
			popupAnchor: [0, 0]
		  })
		  if (bus_val >= bus_id-2000 && bus_val <= bus_id){
			L.marker(latlng, {icon: busIcon}).addTo(map)
		  }
	  /*var circle = L.circle(latlng, 2, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	  }).addTo(map)*/
	  }
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

drawMap();
generateBus(2000);