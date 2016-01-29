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
          var txtInsrt = [];
          var i = 0;
          var hours = val['hours'];
          var hrsLength = hours.length;
          var rates = val['rates'];
          var rateLength = rates.length;


          txtInsrt[i++] = '<li class="collection-item"><div class="collapsible-header">' + val['friendlyName'] + '</div><div class="collapsible-body"><p><b>Open Spaces: </b> ' + val['open_spaces'] + '/' + val['total_spaces'] + '<br><b>Hours: </b>';

          if(hrsLength){
            for (var a = 0; a < hrsLength; a += 1) {
              txtInsrt[i++] = '<br>';
              if(hours[a]['FROM'] != null){
                txtInsrt[i++] = hours[a]['FROM'];}
              if(hours[a]['TO'] != null){
                txtInsrt[i++] = ' to ';
                txtInsrt[i++] = hours[a]['TO'];}
              if(hours[a]['BEG'] != null){
                txtInsrt[i++] = ', ';
                txtInsrt[i++] = hours[a]['BEG'];}
              if(hours[a]['END'] != null){
                txtInsrt[i++] = ' to ';
                txtInsrt[i++] = hours[a]['END'];}
            }
          }
          else{
            txtInsrt[i++] = '<br>';
            if(hours['FROM'] != null){
              txtInsrt[i++] = hours['FROM'];}
            if(hours['TO'] != null){
              txtInsrt[i++] = ' to ';
              txtInsrt[i++] = hours['TO'];}
            if(hours['BEG'] != null){
              txtInsrt[i++] = ', ';
              txtInsrt[i++] = hours['BEG'];}
            if(hours['END'] != null){
              txtInsrt[i++] = ' to ';
              txtInsrt[i++] = hours['END'];}
          }

          txtInsrt[i++] = '<br><b>Rates: </b>';

          if(rateLength){
            for (var a2 = 0; a2 < rateLength; a2 += 1) {
              txtInsrt[i++] = '<br>';
              if(rates[a2]['BEG'] != null){
                txtInsrt[i++] = rates[a2]['BEG'];}
              if(rates[a2]['END'] != null){
                txtInsrt[i++] = ' to ';
                txtInsrt[i++] = rates[a2]['END'];}
              if(rates[a2]['DESC'] != null){
                txtInsrt[i++] = rates[a2]['DESC'];}
              if(rates[a2]['RATE'] != null){
                txtInsrt[i++] = ',   ';
                txtInsrt[i++] = '   $';
                txtInsrt[i++] = rates[a2]['RATE'];}
              if(rates[a2]['RQ'] != null){
                txtInsrt[i++] = '   ';
                txtInsrt[i++] = rates[a2]['RQ'];}
              if(rates[a2]['RR'] != null){
                txtInsrt[i++] = ',   ';
                txtInsrt[i++] = rates[a2]['RR'];}
            }
          }
          txtInsrt[i++] = '</p></div></li> ';
          $('#garages').append(txtInsrt.join(''));
        })
      }