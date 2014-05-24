// Place this in /themes/rootsthemename/assets/js/vendor/
var carawebsMap;
		function initialize() {
		var myOptions = {
			zoom: 9,
			center: new google.maps.LatLng(52.693032,-8.864808),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			disableDefaultUI: false,
			styles: 
            [
                {"featureType":"water","stylers":[{"visibility":"on"},{"color":"#3bade2"}]},//#acbcc9
                {"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},
                {"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#777777"}]},////#c5c6c6
                {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#c0c0c0"}]},//#e4d7c6
                {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},
                {"featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
                {"featureType": "transit.line", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }]},//Kilrush Rd Marker
                {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},
                {"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},
                {"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},
                {"featureType":"road","stylers":[{"lightness":20}]}]
        };

		carawebsMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		// Define an image to be used as a marker
        var image = "http://carawebs.com/wp-content/uploads/2014/04/star.png";
        
		var centreLatLng = new google.maps.LatLng(52.693032,-8.864808);
        /* School Co-ordinates */
        var ennisLatLng = new google.maps.LatLng(52.847079,-8.987698); // Ennis Community College
        var ennistymon1LatLng = new google.maps.LatLng(52.941578,-9.289763); // Ennistymon CBS
        var ennistymon2LatLng = new google.maps.LatLng(52.94024,-9.3); // Ennistymon Vocational
        var castletroyLatLng = new google.maps.LatLng(52.663136,-8.540908); // Castletroy College
		var gaelcholLatLng = new google.maps.LatLng(52.663383,-8.635708); // Gaelcholaiste Luimnigh
        var drumcollLatLng = new google.maps.LatLng(52.339587,-8.907984); // Drumcollagher
        var scarLatLng = new google.maps.LatLng(52.902897,-8.53677); // Drumcollagher
    
        
        /*===============================
         Position the Markers
        ===============================*/
        var marker = new google.maps.Marker({
			position: ennisLatLng,
			icon: image,
			map: carawebsMap,
			title: 'Ennis Community College'
        });
			  
        var marker2 = new google.maps.Marker({
			position: ennistymon1LatLng,
			icon: image,
			map: carawebsMap,
			title: 'Ennistymon CBS'
        });
            
        var marker3 = new google.maps.Marker({
			position: ennistymon2LatLng,
			icon: image,
			map: carawebsMap,
			title: 'Ennistymon Vocational School'
        });
            
        var marker4 = new google.maps.Marker({
			position: castletroyLatLng,
			icon: image,
			map: carawebsMap,
			title: 'Castletroy College'
        });
            
        var marker5 = new google.maps.Marker({
			position: gaelcholLatLng,
			icon: image,
			map: carawebsMap,
			title: 'Gaelcholaiste Luimnigh'
        });
            
        var marker6 = new google.maps.Marker({
			position: drumcollLatLng,
			icon: image,
			map: carawebsMap,
			title: 'Drumcollagher'
        });
            
        var marker7 = new google.maps.Marker({
			position: scarLatLng,
			icon: image,
			map: carawebsMap,
			title: 'Scarriff'
        });
        /*===============================
         Content Strings for Markers
        ===============================*/
            
         // Ennis Community College
         var ennisContentString = 
             '<div id="content" style="color: #666;">'+
             '<h4 id="firstHeading" class="firstHeading">Ennis Community College</h4>'+
             '<div>'+
             '<p><b>Ennis Community College</b> is where we started<br>'+
             'our first School Cafe. We have been providing a service<br>' +
             'for the staff and students since 2009 -<br>'+
             'when we converted an old cupboard into a<br>'+
             'fully functioning school canteen.</p>'+
             '</div>'+
             '</div>';
        
        // Ennistymon CBS
		 var ennistymon1ContentString = '<div id="content" style="color: #000;">'+
			 '<h4 id="firstHeading" class="firstHeading">Ennistymon CBS</h4>'+
			 '<div id="bodyContent">'+
			 '<p>Some information about Ennistymon CBS.</p>'+
			 '</div>'+
			 '</div>';
        
        // Ennistymon Vocational
		 var ennistymon2ContentString = '<div id="content" style="color: #000;">'+
			 '<h4 id="firstHeading" class="firstHeading">Ennistymon Vocational School</h4>'+
			 '<div id="bodyContent">'+
			 '<p>Some information about the School Food Company at Ennistymon Vocational School.</p>'+
			 '</div>'+
			 '</div>';
        
        // Castletroy College
		 var castletroyContentString = '<div id="content" style="color: #000;">'+
			 '<h4 id="firstHeading" class="firstHeading">Castletroy College</h4>'+
			 '<div id="bodyContent">'+
			 '<p>Some information about the food service at Casteltroy College.</p>'+
			 '</div>'+
			 '</div>';
            
        // Gaelcholaiste Luimnigh
		 var gaelcholContentString = '<div id="content" style="color: #000;">'+
			 '<h4 id="firstHeading" class="firstHeading">Gaelcholaiste Luimnigh</h4>'+
			 '<div id="bodyContent">'+
			 '<p>Some information about School Food Co at Gaelcholaiste Luimnigh.</p>'+
			 '</div>'+
			 '</div>';
            
        // Drumcollagher
		 var drumcollContentString = '<div id="content" style="color: #000;">'+
			 '<h4 id="firstHeading" class="firstHeading">Dromcollagher</h4>'+
			 '<div id="bodyContent">'+
			 '<p>Some information about Drumcollagher.</p>'+
			 '</div>'+
			 '</div>';
            
        // Scarriff
		 var scarContentString = '<div id="content" style="color: #000;">'+
			 '<h4 id="firstHeading" class="firstHeading">Scarriff</h4>'+
			 '<div id="bodyContent">'+
			 '<p>Some information about Scarriff.</p>'+
			 '</div>'+
			 '</div>';
            
            /*===========================
             Set the InfoWindow
            ===========================*/

			var ennisInfowindow = new google.maps.InfoWindow({
                content: ennisContentString
            });
			  
			var ennistymon1InfoWindow = new google.maps.InfoWindow({
                content: ennistymon1ContentString
            });
            
            var ennistymon2InfoWindow = new google.maps.InfoWindow({
                content: ennistymon2ContentString
            });
            
            var castletroyInfoWindow = new google.maps.InfoWindow({
                content: castletroyContentString
            });
            
            var gaelcholInfoWindow = new google.maps.InfoWindow({
                content: gaelcholContentString
            });
            
            var drumcollInfoWindow = new google.maps.InfoWindow({
                content: drumcollContentString
            });
            
            var scarInfoWindow = new google.maps.InfoWindow({
                content: scarContentString
            });
            
            
			/*===================================
             Click Events for School Markers 
            ===================================*/
			
            // Ennis Community College
            google.maps.event.addListener(marker, 'click', function() {
				ennisInfowindow.open(carawebsMap,marker); // Reference the info window and marker
            });
			  
            // Ennistymon CBS
            google.maps.event.addListener(marker2, 'click', function() {
				ennistymon1InfoWindow.open(carawebsMap,marker2);
            });
            
            // Ennistymon Vocational
            google.maps.event.addListener(marker3, 'click', function() {
				ennistymon2InfoWindow.open(carawebsMap,marker3);
            });
            
            // Castletroy College
            google.maps.event.addListener(marker4, 'click', function() {
				castletroyInfoWindow.open(carawebsMap,marker4);
            });
            
            // Gaelcholaiste Luimnigh
            google.maps.event.addListener(marker5, 'click', function() {
				gaelcholInfoWindow.open(carawebsMap,marker5);
            });
            
            // Ennistymon Vocational
            google.maps.event.addListener(marker6, 'click', function() {
				drumcollInfoWindow.open(carawebsMap,marker6);
            });
		
            // Scarriff
            google.maps.event.addListener(marker7, 'click', function() {
				scarInfoWindow.open(carawebsMap,marker7);
            });
		}

		google.maps.event.addDomListener(window, "load", initialize);
		google.maps.event.addDomListener(window, "resize", function() {
			 var center = carawebsMap.getCenter();
			 google.maps.event.trigger(carawebsMap, "resize");
			 carawebsMap.setCenter(center); 
        });