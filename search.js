function Search() {
  var sel = document.getElementById("selection");
  var value = sel.options[sel.selectedIndex].value;
	var text = sel.options[sel.selectedIndex].text;

	var firebaseRef = new Firebase('https://firstfirebaseweb.firebaseIO.com');
	firebaseRef.on('value', function(snapshot) {

	// TODO Make these assignment operations more efficient
	var universityOfMissouriArray = new Array();
	universityOfMissouriArray[0] = snapshot.val().UniversityofMissouri.major1;
	universityOfMissouriArray[1] = snapshot.val().UniversityofMissouri.major2;
	universityOfMissouriArray[2] = snapshot.val().UniversityofMissouri.major3;
    universityOfMissouriArray[3] = snapshot.val().UniversityofMissouri.major4;
    universityOfMissouriArray[4] = snapshot.val().UniversityofMissouri.major5;
    universityOfMissouriArray[5] = snapshot.val().UniversityofMissouri.major6;
    universityOfMissouriArray[6] = snapshot.val().UniversityofMissouri.major7;
    universityOfMissouriArray[7] = snapshot.val().UniversityofMissouri.major8;
    universityOfMissouriArray[8] = snapshot.val().UniversityofMissouri.major9;
    universityOfMissouriArray[9] = snapshot.val().UniversityofMissouri.major10;
    universityOfMissouriArray[10] = snapshot.val().UniversityofMissouri.major11;
    universityOfMissouriArray[11] = snapshot.val().UniversityofMissouri.major12;
    universityOfMissouriArray[12] = snapshot.val().UniversityofMissouri.major13;
    universityOfMissouriArray[13] = snapshot.val().UniversityofMissouri.major14;
    universityOfMissouriArray[14] = snapshot.val().UniversityofMissouri.major15;
    universityOfMissouriArray[15] = snapshot.val().UniversityofMissouri.major16;
    universityOfMissouriArray[16] = snapshot.val().UniversityofMissouri.major17;
    universityOfMissouriArray[17] = snapshot.val().UniversityofMissouri.major18;
    universityOfMissouriArray[18] = snapshot.val().UniversityofMissouri.major19;
    universityOfMissouriArray[19] = snapshot.val().UniversityofMissouri.major20;
    universityOfMissouriArray[20] = snapshot.val().UniversityofMissouri.major21;
    universityOfMissouriArray[21] = snapshot.val().UniversityofMissouri.major22;
    universityOfMissouriArray[22] = snapshot.val().UniversityofMissouri.major23;
    universityOfMissouriArray[23] = snapshot.val().UniversityofMissouri.major24;
    universityOfMissouriArray[24] = snapshot.val().UniversityofMissouri.major25;
    universityOfMissouriArray[25] = snapshot.val().UniversityofMissouri.major26;
    universityOfMissouriArray[26] = snapshot.val().UniversityofMissouri.major27;
    universityOfMissouriArray[27] = snapshot.val().UniversityofMissouri.major28;
    universityOfMissouriArray[28] = snapshot.val().UniversityofMissouri.major29;
    universityOfMissouriArray[29] = snapshot.val().UniversityofMissouri.major30;
    universityOfMissouriArray[30] = snapshot.val().UniversityofMissouri.major31;
    universityOfMissouriArray[31] = snapshot.val().UniversityofMissouri.major32;
    universityOfMissouriArray[32] = snapshot.val().UniversityofMissouri.major33;
    universityOfMissouriArray[33] = snapshot.val().UniversityofMissouri.major34;
    universityOfMissouriArray[34] = snapshot.val().UniversityofMissouri.major35;
    universityOfMissouriArray[35] = snapshot.val().UniversityofMissouri.major36;
    universityOfMissouriArray[36] = snapshot.val().UniversityofMissouri.major37;
    universityOfMissouriArray[37] = snapshot.val().UniversityofMissouri.major38;
    universityOfMissouriArray[38] = snapshot.val().UniversityofMissouri.major39;
    universityOfMissouriArray[39] = snapshot.val().UniversityofMissouri.major40;
    universityOfMissouriArray[40] = snapshot.val().UniversityofMissouri.major41;
    universityOfMissouriArray[41] = snapshot.val().UniversityofMissouri.major42;
    universityOfMissouriArray[42] = snapshot.val().UniversityofMissouri.major43;
    universityOfMissouriArray[43] = snapshot.val().UniversityofMissouri.major44;
    universityOfMissouriArray[44] = snapshot.val().UniversityofMissouri.major45;
    universityOfMissouriArray[45] = snapshot.val().UniversityofMissouri.major46;
    universityOfMissouriArray[46] = snapshot.val().UniversityofMissouri.major47;
    universityOfMissouriArray[47] = snapshot.val().UniversityofMissouri.major48;
    universityOfMissouriArray[48] = snapshot.val().UniversityofMissouri.major49;
    universityOfMissouriArray[49] = snapshot.val().UniversityofMissouri.major50;
    universityOfMissouriArray[50] = snapshot.val().UniversityofMissouri.major51;
    universityOfMissouriArray[51] = snapshot.val().UniversityofMissouri.major52;
    universityOfMissouriArray[52] = snapshot.val().UniversityofMissouri.major53;
    universityOfMissouriArray[53] = snapshot.val().UniversityofMissouri.major54;
    universityOfMissouriArray[54] = snapshot.val().UniversityofMissouri.major55;
    universityOfMissouriArray[55] = snapshot.val().UniversityofMissouri.major56;
    universityOfMissouriArray[56] = snapshot.val().UniversityofMissouri.major57;
    universityOfMissouriArray[57] = snapshot.val().UniversityofMissouri.major58;
    universityOfMissouriArray[58] = snapshot.val().UniversityofMissouri.major59;
    universityOfMissouriArray[59] = snapshot.val().UniversityofMissouri.major60;
    universityOfMissouriArray[60] = snapshot.val().UniversityofMissouri.major61;
    universityOfMissouriArray[61] = snapshot.val().UniversityofMissouri.major62;
    universityOfMissouriArray[62] = snapshot.val().UniversityofMissouri.major63;
    universityOfMissouriArray[63] = snapshot.val().UniversityofMissouri.major64;
    universityOfMissouriArray[64] = snapshot.val().UniversityofMissouri.major65;
    universityOfMissouriArray[65] = snapshot.val().UniversityofMissouri.major66;
    universityOfMissouriArray[66] = snapshot.val().UniversityofMissouri.major67;
    universityOfMissouriArray[67] = snapshot.val().UniversityofMissouri.major68;
    universityOfMissouriArray[68] = snapshot.val().UniversityofMissouri.major69;
    universityOfMissouriArray[69] = snapshot.val().UniversityofMissouri.major70;
    universityOfMissouriArray[70] = snapshot.val().UniversityofMissouri.major71;
    universityOfMissouriArray[71] = snapshot.val().UniversityofMissouri.major72;
    universityOfMissouriArray[72] = snapshot.val().UniversityofMissouri.major73;
    universityOfMissouriArray[73] = snapshot.val().UniversityofMissouri.major74;
    universityOfMissouriArray[74] = snapshot.val().UniversityofMissouri.major75;
    universityOfMissouriArray[75] = snapshot.val().UniversityofMissouri.major76;
    universityOfMissouriArray[76] = snapshot.val().UniversityofMissouri.major77;
    universityOfMissouriArray[77] = snapshot.val().UniversityofMissouri.major78;
    universityOfMissouriArray[78] = snapshot.val().UniversityofMissouri.major79;
    universityOfMissouriArray[79] = snapshot.val().UniversityofMissouri.check;

	for(var j=0;j<79;j++){
	  if(text===universityOfMissouriArray[j]){
        universityOfMissouriArray[79] = 1;

        var universityOfMissouri = new google.maps.LatLng(38.933139,-92.373804);

		var mapOptions = {
		  center: new google.maps.LatLng(38.349139,-92.373804),
		  zoom: 7,
		  mapTypeId: google.maps.MapTypeId.TERRAIN
		}

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		// To add the marker to the map, use the 'map' property
		var marker = new google.maps.Marker({
		  animation:google.maps.Animation.DROP,
		  position: universityOfMissouri,
		  map: map,
		  title:"University of Missouri"
		});

		var contentUniversityofMissouri = '<div id="content">'+
		    '<div id="siteNotice">'+
			'</div>'+
			'<div id="bodyContent">'+
			'<p><b>University of Missouri - Columbia</b></p>'+
			'<p><a href="http://missouri.edu/">'+
			'Visit Website</a> '+
			'</div>'+
			'</div>';

	    var infowindowuniversityofmissouri = new google.maps.InfoWindow();

	    makeInfoWindowEvent(map, infowindowuniversityofmissouri, contentUniversityofMissouri, marker);
	  }
	}

					// TODO Make these assignment operations more efficient
					var missouriSTArray = new Array();
					missouriSTArray[0] = snapshot.val().UniversityofMissouriST.major1;
					missouriSTArray[1] = snapshot.val().UniversityofMissouriST.major2;
          missouriSTArray[2] = snapshot.val().UniversityofMissouriST.major3;
          missouriSTArray[3] = snapshot.val().UniversityofMissouriST.major4;
          missouriSTArray[4] = snapshot.val().UniversityofMissouriST.major5;
          missouriSTArray[5] = snapshot.val().UniversityofMissouriST.major6;
          missouriSTArray[6] = snapshot.val().UniversityofMissouriST.major7;
          missouriSTArray[7] = snapshot.val().UniversityofMissouriST.major8;
          missouriSTArray[8] = snapshot.val().UniversityofMissouriST.major9;
          missouriSTArray[9] = snapshot.val().UniversityofMissouriST.major10;
          missouriSTArray[10] = snapshot.val().UniversityofMissouriST.major11;
          missouriSTArray[11] = snapshot.val().UniversityofMissouriST.major12;
          missouriSTArray[12] = snapshot.val().UniversityofMissouriST.major13;
          missouriSTArray[13] = snapshot.val().UniversityofMissouriST.major14;
          missouriSTArray[14] = snapshot.val().UniversityofMissouriST.major15;
          missouriSTArray[15] = snapshot.val().UniversityofMissouriST.major16;
          missouriSTArray[16] = snapshot.val().UniversityofMissouriST.major17;
          missouriSTArray[17] = snapshot.val().UniversityofMissouriST.major18;
          missouriSTArray[18] = snapshot.val().UniversityofMissouriST.major19;
          missouriSTArray[19] = snapshot.val().UniversityofMissouriST.major20;
          missouriSTArray[20] = snapshot.val().UniversityofMissouriST.major21;
          missouriSTArray[21] = snapshot.val().UniversityofMissouriST.major22;
          missouriSTArray[22] = snapshot.val().UniversityofMissouriST.major23;
          missouriSTArray[23] = snapshot.val().UniversityofMissouriST.major24;
          missouriSTArray[24] = snapshot.val().UniversityofMissouriST.major25;
          missouriSTArray[25] = snapshot.val().UniversityofMissouriST.major26;
          missouriSTArray[26] = snapshot.val().UniversityofMissouriST.major27;
          missouriSTArray[27] = snapshot.val().UniversityofMissouriST.major28;
          missouriSTArray[28] = snapshot.val().UniversityofMissouriST.major29;
          missouriSTArray[29] = snapshot.val().UniversityofMissouriST.major30;
          missouriSTArray[30] = snapshot.val().UniversityofMissouriST.major31;
          missouriSTArray[31] = snapshot.val().UniversityofMissouriST.check;

					for(var i=0;i<31;i++){
						if(text===missouriSTArray[i]){
              missouriSTArray[31] = 1;

							var missouriST = new google.maps.LatLng(37.953720,-91.775150);

              if(universityOfMissouriArray[79]!=1){
                var mapOptions = {
                  center: new google.maps.LatLng(38.349139,-92.373804),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }

							// To add the marker to the map, use the 'map' property
							var marker = new google.maps.Marker({
								animation:google.maps.Animation.DROP,
    							position: missouriST,
    							map: map,
    							title:"University of Missouri S&T"
							});

							var contentUniversityofMissouriST = '<div id="content">'+
      							'<div id="siteNotice">'+
      							'</div>'+
      							'<div id="bodyContent">'+
      							'<p><b>University of Missouri Science & Technology</b></p>'+
      							'<p><a href="https://www.mst.edu/">'+
      							'Visit Website</a> '+
      							'</div>'+
      							'</div>';

      				var infowindowuniversityofmissourist = new google.maps.InfoWindow();

							makeInfoWindowEvent(map, infowindowuniversityofmissourist, contentUniversityofMissouriST, marker);
						}
					}

		  // TODO Make these assignment operations more efficient
          var harrisStowe = new Array();
          harrisStowe[0] = snapshot.val().HarrisStowe.major1;
          harrisStowe[1] = snapshot.val().HarrisStowe.major2;
          harrisStowe[2] = snapshot.val().HarrisStowe.major3;
          harrisStowe[3] = snapshot.val().HarrisStowe.major4;
          harrisStowe[4] = snapshot.val().HarrisStowe.major5;
          harrisStowe[5] = snapshot.val().HarrisStowe.major6;
          harrisStowe[6] = snapshot.val().HarrisStowe.major7;
          harrisStowe[7] = snapshot.val().HarrisStowe.major8;
          harrisStowe[8] = snapshot.val().HarrisStowe.major9;
          harrisStowe[9] = snapshot.val().HarrisStowe.major10;
          harrisStowe[10] = snapshot.val().HarrisStowe.major11;
          harrisStowe[11] = snapshot.val().HarrisStowe.major12;
          harrisStowe[12] = snapshot.val().HarrisStowe.major13;
          harrisStowe[13] = snapshot.val().HarrisStowe.major14;
          harrisStowe[14] = snapshot.val().HarrisStowe.major15;
          harrisStowe[15] = snapshot.val().HarrisStowe.major16;
          harrisStowe[16] = snapshot.val().HarrisStowe.check;

          for(var i=0;i<16;i++){
            if(text===harrisStowe[i]){
              harrisStowe[16] = 1;

              var harrisStowe = new google.maps.LatLng(38.632708,-90.224303);

              if(universityOfMissouriArray[79]!=1&&missouriSTArray[31]!=1){
                var mapOptions = {
                  center: new google.maps.LatLng(38.349139,-92.373804),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }

              // To add the marker to the map, use the 'map' property
              var marker = new google.maps.Marker({
                animation:google.maps.Animation.DROP,
                  position: harrisStowe,
                  map: map,
                  title:"Harris-Stowe State University"
              });

              var contentHarrisStowe = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<div id="bodyContent">'+
                    '<p><b>Harris-Stowe State University</b></p>'+
                    '<p><a href="http://www.hssu.edu/">'+
                    'Visit Website</a> '+
                    '</div>'+
                    '</div>';

              var infowindowharrisstowe = new google.maps.InfoWindow();

              makeInfoWindowEvent(map, infowindowharrisstowe, contentHarrisStowe, marker);
            }
          }

          // TODO Make these assignment operations more efficient
          var lincoln = new Array();
          lincoln[0] = snapshot.val().Lincoln.major1;
          lincoln[1] = snapshot.val().Lincoln.major2;
          lincoln[2] = snapshot.val().Lincoln.major3;
          lincoln[3] = snapshot.val().Lincoln.major4;
          lincoln[4] = snapshot.val().Lincoln.major5;
          lincoln[5] = snapshot.val().Lincoln.major6;
          lincoln[6] = snapshot.val().Lincoln.major7;
          lincoln[7] = snapshot.val().Lincoln.major8;
          lincoln[8] = snapshot.val().Lincoln.major9;
          lincoln[9] = snapshot.val().Lincoln.major10;
          lincoln[10] = snapshot.val().Lincoln.major11;
          lincoln[11] = snapshot.val().Lincoln.major12;
          lincoln[12] = snapshot.val().Lincoln.major13;
          lincoln[13] = snapshot.val().Lincoln.major14;
          lincoln[14] = snapshot.val().Lincoln.major15;
          lincoln[15] = snapshot.val().Lincoln.major16;
          lincoln[16] = snapshot.val().Lincoln.major17;
          lincoln[17] = snapshot.val().Lincoln.major18;
          lincoln[18] = snapshot.val().Lincoln.major19;
          lincoln[19] = snapshot.val().Lincoln.major20;
          lincoln[20] = snapshot.val().Lincoln.major21;
          lincoln[21] = snapshot.val().Lincoln.major22;
          lincoln[22] = snapshot.val().Lincoln.major23;
          lincoln[23] = snapshot.val().Lincoln.major24;
          lincoln[24] = snapshot.val().Lincoln.major25;
          lincoln[25] = snapshot.val().Lincoln.major26;
          lincoln[26] = snapshot.val().Lincoln.major27;
          lincoln[27] = snapshot.val().Lincoln.major28;
          lincoln[28] = snapshot.val().Lincoln.major29;
          lincoln[29] = snapshot.val().Lincoln.major30;
          lincoln[30] = snapshot.val().Lincoln.major31;
          lincoln[31] = snapshot.val().Lincoln.major32;
          lincoln[32] = snapshot.val().Lincoln.major33;
          lincoln[33] = snapshot.val().Lincoln.major34;
          lincoln[34] = snapshot.val().Lincoln.check;

          for(var i=0;i<34;i++){
            if(text===lincoln[i]){
              lincoln[34] = 1;

              var lincoln = new google.maps.LatLng(38.564674,-92.169392);

              if(universityOfMissouriArray[79]!=1&&missouriSTArray[31]!=1&&harrisStowe[16]!=1){
                var mapOptions = {
                  center: new google.maps.LatLng(38.349139,-92.373804),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }

              // To add the marker to the map, use the 'map' property
              var marker = new google.maps.Marker({
                animation:google.maps.Animation.DROP,
                  position: lincoln,
                  map: map,
                  title:"Lincoln University"
              });

              var contentLincoln = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<div id="bodyContent">'+
                    '<p><b>Lincoln University</b></p>'+
                    '<p><a href="http://www.lincolnu.edu/">'+
                    'Visit Website</a> '+
                    '</div>'+
                    '</div>';

              var infowindowlincoln = new google.maps.InfoWindow();

              makeInfoWindowEvent(map, infowindowlincoln, contentLincoln, marker);
            }
          }
			
		  // TODO Make these assignment operations more efficient		
          var missouriSouthern = new Array();
          missouriSouthern[0] = snapshot.val().MissouriSouthern.major1;
          missouriSouthern[1] = snapshot.val().MissouriSouthern.major2;
          missouriSouthern[2] = snapshot.val().MissouriSouthern.major3;
          missouriSouthern[3] = snapshot.val().MissouriSouthern.major4;
          missouriSouthern[4] = snapshot.val().MissouriSouthern.major5;
          missouriSouthern[5] = snapshot.val().MissouriSouthern.major6;
          missouriSouthern[6] = snapshot.val().MissouriSouthern.major7;
          missouriSouthern[7] = snapshot.val().MissouriSouthern.major8;
          missouriSouthern[8] = snapshot.val().MissouriSouthern.major9;
          missouriSouthern[9] = snapshot.val().MissouriSouthern.major10;
          missouriSouthern[10] = snapshot.val().MissouriSouthern.major11;
          missouriSouthern[11] = snapshot.val().MissouriSouthern.major12;
          missouriSouthern[12] = snapshot.val().MissouriSouthern.major13;
          missouriSouthern[13] = snapshot.val().MissouriSouthern.major14;
          missouriSouthern[14] = snapshot.val().MissouriSouthern.major15;
          missouriSouthern[15] = snapshot.val().MissouriSouthern.major16;
          missouriSouthern[16] = snapshot.val().MissouriSouthern.major17;
          missouriSouthern[17] = snapshot.val().MissouriSouthern.major18;
          missouriSouthern[18] = snapshot.val().MissouriSouthern.major19;
          missouriSouthern[19] = snapshot.val().MissouriSouthern.major20;
          missouriSouthern[20] = snapshot.val().MissouriSouthern.major21;
          missouriSouthern[21] = snapshot.val().MissouriSouthern.major22;
          missouriSouthern[22] = snapshot.val().MissouriSouthern.major23;
          missouriSouthern[23] = snapshot.val().MissouriSouthern.major24;
          missouriSouthern[24] = snapshot.val().MissouriSouthern.major25;
          missouriSouthern[25] = snapshot.val().MissouriSouthern.major26;
          missouriSouthern[26] = snapshot.val().MissouriSouthern.major27;
          missouriSouthern[27] = snapshot.val().MissouriSouthern.major28;
          missouriSouthern[28] = snapshot.val().MissouriSouthern.major29;
          missouriSouthern[29] = snapshot.val().MissouriSouthern.major30;
          missouriSouthern[30] = snapshot.val().MissouriSouthern.major31;
          missouriSouthern[31] = snapshot.val().MissouriSouthern.major32;
          missouriSouthern[32] = snapshot.val().MissouriSouthern.major33;
          missouriSouthern[33] = snapshot.val().MissouriSouthern.major34;
          missouriSouthern[34] = snapshot.val().MissouriSouthern.major35;
          missouriSouthern[35] = snapshot.val().MissouriSouthern.major36;
          missouriSouthern[36] = snapshot.val().MissouriSouthern.major37;
          missouriSouthern[37] = snapshot.val().MissouriSouthern.major38;
          missouriSouthern[38] = snapshot.val().MissouriSouthern.major39;
          missouriSouthern[39] = snapshot.val().MissouriSouthern.major40;
          missouriSouthern[40] = snapshot.val().MissouriSouthern.major41;
          missouriSouthern[41] = snapshot.val().MissouriSouthern.check;

          for(var i=0;i<41;i++){
            if(text===missouriSouthern[i]){
              missouriSouthern[41] = 1;

              var missouriSouthern = new google.maps.LatLng(37.095957,-94.462199);

              if(universityOfMissouriArray[79]!=1&&missouriSTArray[31]!=1&&harrisStowe[16]!=1&&lincoln[34]!=1){
                var mapOptions = {
                  center: new google.maps.LatLng(38.349139,-92.373804),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }

              // To add the marker to the map, use the 'map' property
              var marker = new google.maps.Marker({
                animation:google.maps.Animation.DROP,
                  position: missouriSouthern,
                  map: map,
                  title:"Missouri Southern State University"
              });

              var contentMissouriSouthern = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<div id="bodyContent">'+
                    '<p><b>Missouri Southern State University</b></p>'+
                    '<p><a href="http://www.mssu.edu/">'+
                    'Visit Website</a> '+
                    '</div>'+
                    '</div>';

              var infowindowmissourisouthern = new google.maps.InfoWindow();

              makeInfoWindowEvent(map, infowindowmissourisouthern, contentMissouriSouthern, marker);
            }
          }

          // TODO Make these assignment operations more efficient
          var missouriState = new Array();
          missouriState[0] = snapshot.val().MissouriState.major1;
          missouriState[1] = snapshot.val().MissouriState.major2;
          missouriState[2] = snapshot.val().MissouriState.major3;
          missouriState[3] = snapshot.val().MissouriState.major4;
          missouriState[4] = snapshot.val().MissouriState.major5;
          missouriState[5] = snapshot.val().MissouriState.major6;
          missouriState[6] = snapshot.val().MissouriState.major7;
          missouriState[7] = snapshot.val().MissouriState.major8;
          missouriState[8] = snapshot.val().MissouriState.major9;
          missouriState[9] = snapshot.val().MissouriState.major10;
          missouriState[10] = snapshot.val().MissouriState.major11;
          missouriState[11] = snapshot.val().MissouriState.major12;
          missouriState[12] = snapshot.val().MissouriState.major13;
          missouriState[13] = snapshot.val().MissouriState.major14;
          missouriState[14] = snapshot.val().MissouriState.major15;
          missouriState[15] = snapshot.val().MissouriState.major16;
          missouriState[16] = snapshot.val().MissouriState.major17;
          missouriState[17] = snapshot.val().MissouriState.major18;
          missouriState[18] = snapshot.val().MissouriState.major19;
          missouriState[19] = snapshot.val().MissouriState.major20;
          missouriState[20] = snapshot.val().MissouriState.major21;
          missouriState[21] = snapshot.val().MissouriState.major22;
          missouriState[22] = snapshot.val().MissouriState.major23;
          missouriState[23] = snapshot.val().MissouriState.major24;
          missouriState[24] = snapshot.val().MissouriState.major25;
          missouriState[25] = snapshot.val().MissouriState.major26;
          missouriState[26] = snapshot.val().MissouriState.major27;
          missouriState[27] = snapshot.val().MissouriState.major28;
          missouriState[28] = snapshot.val().MissouriState.major29;
          missouriState[29] = snapshot.val().MissouriState.major30;
          missouriState[30] = snapshot.val().MissouriState.major31;
          missouriState[31] = snapshot.val().MissouriState.major32;
          missouriState[32] = snapshot.val().MissouriState.major33;
          missouriState[33] = snapshot.val().MissouriState.major34;
          missouriState[34] = snapshot.val().MissouriState.major35;
          missouriState[35] = snapshot.val().MissouriState.major36;
          missouriState[36] = snapshot.val().MissouriState.major37;
          missouriState[37] = snapshot.val().MissouriState.major38;
          missouriState[38] = snapshot.val().MissouriState.major39;
          missouriState[39] = snapshot.val().MissouriState.major40;
          missouriState[40] = snapshot.val().MissouriState.major41;
          missouriState[41] = snapshot.val().MissouriState.major42;
          missouriState[42] = snapshot.val().MissouriState.major43;
          missouriState[43] = snapshot.val().MissouriState.major44;
          missouriState[44] = snapshot.val().MissouriState.major45;
          missouriState[45] = snapshot.val().MissouriState.major46;
          missouriState[46] = snapshot.val().MissouriState.major47;
          missouriState[47] = snapshot.val().MissouriState.major48;
          missouriState[48] = snapshot.val().MissouriState.major49;
          missouriState[49] = snapshot.val().MissouriState.major50;
          missouriState[50] = snapshot.val().MissouriState.major51;
          missouriState[51] = snapshot.val().MissouriState.major52;
          missouriState[52] = snapshot.val().MissouriState.major53;
          missouriState[53] = snapshot.val().MissouriState.major54;
          missouriState[54] = snapshot.val().MissouriState.major55;
          missouriState[55] = snapshot.val().MissouriState.major56;
          missouriState[56] = snapshot.val().MissouriState.major57;
          missouriState[57] = snapshot.val().MissouriState.major58;
          missouriState[58] = snapshot.val().MissouriState.major59;
          missouriState[59] = snapshot.val().MissouriState.major60;
          missouriState[60] = snapshot.val().MissouriState.major61;
          missouriState[61] = snapshot.val().MissouriState.major62;
          missouriState[62] = snapshot.val().MissouriState.major63;
          missouriState[63] = snapshot.val().MissouriState.major64;
          missouriState[64] = snapshot.val().MissouriState.major65;
          missouriState[65] = snapshot.val().MissouriState.major66;
          missouriState[66] = snapshot.val().MissouriState.major67;
          missouriState[67] = snapshot.val().MissouriState.major68;
          missouriState[68] = snapshot.val().MissouriState.major69;
          missouriState[69] = snapshot.val().MissouriState.major70;
          missouriState[70] = snapshot.val().MissouriState.major71;
          missouriState[71] = snapshot.val().MissouriState.major72;
          missouriState[72] = snapshot.val().MissouriState.major73;
          missouriState[73] = snapshot.val().MissouriState.major74;
          missouriState[74] = snapshot.val().MissouriState.major75;
          missouriState[75] = snapshot.val().MissouriState.major76;
          missouriState[76] = snapshot.val().MissouriState.major77;
          missouriState[77] = snapshot.val().MissouriState.major78;
          missouriState[78] = snapshot.val().MissouriState.major79;
          missouriState[79] = snapshot.val().MissouriState.major80;
          missouriState[80] = snapshot.val().MissouriState.major81;
          missouriState[81] = snapshot.val().MissouriState.major82;
          missouriState[82] = snapshot.val().MissouriState.major83;
          missouriState[83] = snapshot.val().MissouriState.major84;
          missouriState[84] = snapshot.val().MissouriState.major85;
          missouriState[85] = snapshot.val().MissouriState.major86;
          missouriState[86] = snapshot.val().MissouriState.major87;
          missouriState[87] = snapshot.val().MissouriState.major88;
          missouriState[88] = snapshot.val().MissouriState.major89;
          missouriState[89] = snapshot.val().MissouriState.major90;
          missouriState[90] = snapshot.val().MissouriState.major91;
          missouriState[91] = snapshot.val().MissouriState.major92;
          missouriState[92] = snapshot.val().MissouriState.major93;
          missouriState[93] = snapshot.val().MissouriState.major94;
          missouriState[94] = snapshot.val().MissouriState.major95;
          missouriState[95] = snapshot.val().MissouriState.major96;
          missouriState[96] = snapshot.val().MissouriState.major97;
          missouriState[97] = snapshot.val().MissouriState.check;

          for(var i=0;i<97;i++){
            if(text===missouriState[i]){
              missouriState[97] = 1;

              var missouriState = new google.maps.LatLng(37.200629,-93.281232);

              if(universityOfMissouriArray[79]!=1&&missouriSTArray[31]!=1&&harrisStowe[16]!=1&&lincoln[34]!=1
                  &&missouriState[41]!=1){
                var mapOptions = {
                  center: new google.maps.LatLng(38.349139,-92.373804),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }

              // To add the marker to the map, use the 'map' property
              var marker = new google.maps.Marker({
                animation:google.maps.Animation.DROP,
                  position: missouriState,
                  map: map,
                  title:"Missouri State University"
              });

              var contentMissouriState = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<div id="bodyContent">'+
                    '<p><b>Missouri State University</b></p>'+
                    '<p><a href="http://www.missouristate.edu/">'+
                    'Visit Website</a> '+
                    '</div>'+
                    '</div>';

              var infowindowmissouristate = new google.maps.InfoWindow();

              makeInfoWindowEvent(map, infowindowmissouristate, contentMissouriState, marker);
            }
          }

          // TODO Make these assignment operations more efficient
          var northwest = new Array();
          northwest[0] = snapshot.val().Northwest.major1;
          northwest[1] = snapshot.val().Northwest.major2;
          northwest[2] = snapshot.val().Northwest.major3;
          northwest[3] = snapshot.val().Northwest.major4;
          northwest[4] = snapshot.val().Northwest.major5;
          northwest[5] = snapshot.val().Northwest.major6;
          northwest[6] = snapshot.val().Northwest.major7;
          northwest[7] = snapshot.val().Northwest.major8;
          northwest[8] = snapshot.val().Northwest.major9;
          northwest[9] = snapshot.val().Northwest.major10;
          northwest[10] = snapshot.val().Northwest.major11;
          northwest[11] = snapshot.val().Northwest.major12;
          northwest[12] = snapshot.val().Northwest.major13;
          northwest[13] = snapshot.val().Northwest.major14;
          northwest[14] = snapshot.val().Northwest.major15;
          northwest[15] = snapshot.val().Northwest.major16;
          northwest[16] = snapshot.val().Northwest.major17;
          northwest[17] = snapshot.val().Northwest.major18;
          northwest[18] = snapshot.val().Northwest.major19;
          northwest[19] = snapshot.val().Northwest.major20;
          northwest[20] = snapshot.val().Northwest.major21;
          northwest[21] = snapshot.val().Northwest.major22;
          northwest[22] = snapshot.val().Northwest.major23;
          northwest[23] = snapshot.val().Northwest.major24;
          northwest[24] = snapshot.val().Northwest.major25;
          northwest[25] = snapshot.val().Northwest.major26;
          northwest[26] = snapshot.val().Northwest.major27;
          northwest[27] = snapshot.val().Northwest.major28;
          northwest[28] = snapshot.val().Northwest.major29;
          northwest[29] = snapshot.val().Northwest.major30;
          northwest[30] = snapshot.val().Northwest.major31;
          northwest[31] = snapshot.val().Northwest.major32;
          northwest[32] = snapshot.val().Northwest.major33;
          northwest[33] = snapshot.val().Northwest.major34;
          northwest[34] = snapshot.val().Northwest.major35;
          northwest[35] = snapshot.val().Northwest.major36;
          northwest[36] = snapshot.val().Northwest.major37;
          northwest[37] = snapshot.val().Northwest.major38;
          northwest[38] = snapshot.val().Northwest.major39;
          northwest[39] = snapshot.val().Northwest.major40;
          northwest[40] = snapshot.val().Northwest.major41;
          northwest[41] = snapshot.val().Northwest.major42;
          northwest[42] = snapshot.val().Northwest.major43;
          northwest[43] = snapshot.val().Northwest.major44;
          northwest[44] = snapshot.val().Northwest.major45;
          northwest[45] = snapshot.val().Northwest.major46;
          northwest[46] = snapshot.val().Northwest.major47;
          northwest[47] = snapshot.val().Northwest.major48;
          northwest[48] = snapshot.val().Northwest.major49;
          northwest[49] = snapshot.val().Northwest.major50;
          northwest[50] = snapshot.val().Northwest.major51;
          northwest[51] = snapshot.val().Northwest.major52;
          northwest[52] = snapshot.val().Northwest.major53;
          northwest[53] = snapshot.val().Northwest.major54;
          northwest[54] = snapshot.val().Northwest.major55;
          northwest[55] = snapshot.val().Northwest.major56;
          northwest[56] = snapshot.val().Northwest.major57;
          northwest[57] = snapshot.val().Northwest.major58;
          northwest[58] = snapshot.val().Northwest.major59;
          northwest[59] = snapshot.val().Northwest.major60;
          northwest[60] = snapshot.val().Northwest.major61;
          northwest[61] = snapshot.val().Northwest.major62;
          northwest[62] = snapshot.val().Northwest.major63;
          northwest[63] = snapshot.val().Northwest.major64;
          northwest[64] = snapshot.val().Northwest.major65;
          northwest[65] = snapshot.val().Northwest.major66;
          northwest[66] = snapshot.val().Northwest.major67;
          northwest[67] = snapshot.val().Northwest.check;

          for(var i=0;i<67;i++){
            if(text===northwest[i]){
              northwest[67] = 1;

              var northwest = new google.maps.LatLng(40.352449,-94.882253);

              if(universityOfMissouriArray[79]!=1&&missouriSTArray[31]!=1&&harrisStowe[16]!=1&&lincoln[34]!=1
                  &&missouriSouthern[41]!=1&&missouriState[97]!=1){
                var mapOptions = {
                  center: new google.maps.LatLng(38.349139,-92.373804),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }

              // To add the marker to the map, use the 'map' property
              var marker = new google.maps.Marker({
                animation:google.maps.Animation.DROP,
                  position: northwest,
                  map: map,
                  title:"Northwest Missouri State University"
              });

              var contentNorthwest = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<div id="bodyContent">'+
                    '<p><b>Northwest Missouri State University</b></p>'+
                    '<p><a href="http://www.nwmissouri.edu/">'+
                    'Visit Website</a> '+
                    '</div>'+
                    '</div>';

              var infowindownorthwest = new google.maps.InfoWindow();

              makeInfoWindowEvent(map, infowindownorthwest, contentNorthwest, marker);
            }
          }

          // TODO Make these assignment operations more efficient
          var south = new Array();
          south[0] = snapshot.val().MissouriSouth.major1;
          south[1] = snapshot.val().MissouriSouth.major2;
          south[2] = snapshot.val().MissouriSouth.major3;
          south[3] = snapshot.val().MissouriSouth.major4;
          south[4] = snapshot.val().MissouriSouth.major5;
          south[5] = snapshot.val().MissouriSouth.major6;
          south[6] = snapshot.val().MissouriSouth.major7;
          south[7] = snapshot.val().MissouriSouth.major8;
          south[8] = snapshot.val().MissouriSouth.major9;
          south[9] = snapshot.val().MissouriSouth.major10;
          south[10] = snapshot.val().MissouriSouth.major11;
          south[11] = snapshot.val().MissouriSouth.major12;
          south[12] = snapshot.val().MissouriSouth.major13;
          south[13] = snapshot.val().MissouriSouth.major14;
          south[14] = snapshot.val().MissouriSouth.major15;
          south[15] = snapshot.val().MissouriSouth.major16;
          south[16] = snapshot.val().MissouriSouth.major17;
          south[17] = snapshot.val().MissouriSouth.major18;
          south[18] = snapshot.val().MissouriSouth.major19;
          south[19] = snapshot.val().MissouriSouth.major20;
          south[20] = snapshot.val().MissouriSouth.major21;
          south[21] = snapshot.val().MissouriSouth.major22;
          south[22] = snapshot.val().MissouriSouth.major23;
          south[23] = snapshot.val().MissouriSouth.major24;
          south[24] = snapshot.val().MissouriSouth.major25;
          south[25] = snapshot.val().MissouriSouth.major26;
          south[26] = snapshot.val().MissouriSouth.major27;
          south[27] = snapshot.val().MissouriSouth.major28;
          south[28] = snapshot.val().MissouriSouth.major29;
          south[29] = snapshot.val().MissouriSouth.major30;
          south[30] = snapshot.val().MissouriSouth.major31;
          south[31] = snapshot.val().MissouriSouth.major32;
          south[32] = snapshot.val().MissouriSouth.major33;
          south[33] = snapshot.val().MissouriSouth.major34;
          south[34] = snapshot.val().MissouriSouth.major35;
          south[35] = snapshot.val().MissouriSouth.major36;
          south[36] = snapshot.val().MissouriSouth.major37;
          south[37] = snapshot.val().MissouriSouth.major38;
          south[38] = snapshot.val().MissouriSouth.major39;
          south[39] = snapshot.val().MissouriSouth.major40;
          south[40] = snapshot.val().MissouriSouth.major41;
          south[41] = snapshot.val().MissouriSouth.major42;
          south[42] = snapshot.val().MissouriSouth.major43;
          south[43] = snapshot.val().MissouriSouth.major44;
          south[44] = snapshot.val().MissouriSouth.major45;
          south[45] = snapshot.val().MissouriSouth.major46;
          south[46] = snapshot.val().MissouriSouth.major47;
          south[47] = snapshot.val().MissouriSouth.major48;
          south[48] = snapshot.val().MissouriSouth.major49;
          south[49] = snapshot.val().MissouriSouth.major50;
          south[50] = snapshot.val().MissouriSouth.major51;
          south[51] = snapshot.val().MissouriSouth.major52;
          south[52] = snapshot.val().MissouriSouth.major53;
          south[53] = snapshot.val().MissouriSouth.major54;
          south[54] = snapshot.val().MissouriSouth.major55;
          south[55] = snapshot.val().MissouriSouth.major56;
          south[56] = snapshot.val().MissouriSouth.major57;
          south[57] = snapshot.val().MissouriSouth.major58;
          south[58] = snapshot.val().MissouriSouth.major59;
          south[59] = snapshot.val().MissouriSouth.major60;
          south[60] = snapshot.val().MissouriSouth.major61;
          south[61] = snapshot.val().MissouriSouth.major62;
          south[62] = snapshot.val().MissouriSouth.major63;
          south[63] = snapshot.val().MissouriSouth.major64;
          south[64] = snapshot.val().MissouriSouth.major65;
          south[65] = snapshot.val().MissouriSouth.major66;
          south[66] = snapshot.val().MissouriSouth.major67;
          south[67] = snapshot.val().MissouriSouth.major68;
          south[68] = snapshot.val().MissouriSouth.major69;
          south[69] = snapshot.val().MissouriSouth.major70;
          south[70] = snapshot.val().MissouriSouth.major71;
          south[71] = snapshot.val().MissouriSouth.major72;
          south[72] = snapshot.val().MissouriSouth.check;

          for(var i=0;i<72;i++){
            if(text===south[i]){
              south[72] = 1;

              var south = new google.maps.LatLng(37.095957,-94.462199);

              if(universityOfMissouriArray[79]!=1&&missouriSTArray[31]!=1&&harrisStowe[16]!=1&&lincoln[34]!=1
                  &&missouriSouthern[41]!=1&&missouriState[97]!=1&&northwest[67]!=1){
                var mapOptions = {
                  center: new google.maps.LatLng(38.349139,-92.373804),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
              }

              // To add the marker to the map, use the 'map' property
              var marker = new google.maps.Marker({
                animation:google.maps.Animation.DROP,
                  position: south,
                  map: map,
                  title:"Southeast Missouri State University"
              });

              var contentSoutheast = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<div id="bodyContent">'+
                    '<p><b>Southeast Missouri State University</b></p>'+
                    '<p><a href="http://www.semo.edu/">'+
                    'Visit Website</a> '+
                    '</div>'+
                    '</div>';

              var infowindowsoutheast = new google.maps.InfoWindow();

              makeInfoWindowEvent(map, infowindowsoutheast, contentSoutheast, marker);
            }
          }

          function makeInfoWindowEvent(map, infowindow, contentString, marker) {
                google.maps.event.addListener(marker, 'click', function() {
                  infowindow.setContent(contentString);
                  infowindow.open(map, marker);
                });
          }
        });
}