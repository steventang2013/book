// create a firebase reference to the root
      var ref = new Firebase('https://publicdata-parking.firebaseio.com');

      var data

      // read data from the location san_francisco/garages, only once
      ref.child('san_francisco/garages').once('value', function(snapshot){
        data = snapshot.val()
        console.log('data is loaded', data)

        // filter the data
        var garages = _.filter(data, function(d){
            // keep only those values (d) that has "open_spaces" as a field
            return _.has(d, 'open_spaces')
        })

        displayGarages(garages)
      })

      function displayGarages(garages){
        // lodash _.forEach https://lodash.com/docs#forEach
        _.forEach(garages, function(val, key){
          var txt_insert = [];
          var i = 0;
          var hours = val['hours'];
          var hrs_length = hours.length;
          var rates = val['rates'];
          var rate_length = rates.length;
          var open = val['open_spaces'];

          txt_insert[i++] = '<li class="collection-item">';

          if (parseInt(open) < 100){
            txt_insert[i++] =  '<div class="collapsible-header red lighten-2 white-text">';}
          else if (parseInt(open) >= 100 && parseInt(open) < 300){
            txt_insert[i++] =  '<div class="collapsible-header blue lighten-2 white-text">';}
          else {
            txt_insert[i++] =  '<div class="collapsible-header green lighten-2 white-text">';}
    
          txt_insert[i++] = val['friendlyName'] + '</div><div class="collapsible-body"><p><b>Open Spaces: </b> ' + open + '/' + val['total_spaces'] + '<br><i class="tiny material-icons">schedule</i><b> Hours: </b>';

          if(hrs_length){
            for (var a = 0; a < hrs_length; a += 1) {
              txt_insert[i++] = '<br>';
              if(hours[a]['FROM']) txt_insert[i++] = hours[a]['FROM'];
              if(hours[a]['TO']) txt_insert[i++] = ' to ' + hours[a]['TO'];
              if(hours[a]['BEG']) txt_insert[i++] = ', ' + hours[a]['BEG'];
              if(hours[a]['END']) txt_insert[i++] = ' to ' + hours[a]['END'];
            }
          }
          else{
              txt_insert[i++] = '<br>';
              if(hours['FROM']) txt_insert[i++] = hours['FROM'];
              if(hours['TO']) txt_insert[i++] = ' to ' + hours['TO'];
              if(hours['BEG']) txt_insert[i++] = ', ' + hours['BEG'];
              if(hours['END']) txt_insert[i++] = ' to ' + hours['END'];
          }

          if(rate_length){
            txt_insert[i++] = '<br><i class="tiny material-icons">payment</i><b> Rates: </b>';
            for (var a2 = 0; a2 < rate_length; a2 += 1) {
              txt_insert[i++] = '<br>';
              if(rates[a2]['BEG']) txt_insert[i++] = rates[a2]['BEG'];
              if(rates[a2]['END']) txt_insert[i++] = ' to ' + rates[a2]['END'];
              if(rates[a2]['DESC']) txt_insert[i++] = rates[a2]['DESC'];
              if(rates[a2]['RATE']) txt_insert[i++] = ',  $' + rates[a2]['RATE'];
              if(rates[a2]['RQ']) txt_insert[i++] = ',   ' + rates[a2]['RQ'];
              if(rates[a2]['RR']) txt_insert[i++] = ',  ' + rates[a2]['RR'];
            }
          }
          txt_insert[i++] = '</p></div></li> ';
          $('#garages').append(txt_insert.join(''));
        })
      }