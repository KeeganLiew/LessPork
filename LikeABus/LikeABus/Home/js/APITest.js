/*
	zoe
*/
  
function myFunction(){
	var aipKey = "5f496b63-80d7-4eb3-9855-48a01af4c4c4";
	var routeId = "0035WA6848";

	$.ajax({
            //url: "https://api.at.govt.nz/v1/gtfs/trips/routeid/0035WA6848?api_key=2ed0839d-89c3-41f3-910c-d6786c27491b",
            url: "https://api.at.govt.nz/v1/gtfs/trips/routeid/0035WA6848",
            type: "GET",
            contentType: "json",
			data:{"api_key":aipKey},
            success: function (data) {
				debugger;              
            },
            error: function (xhr) {
                alert("fail:get");
            }
        });
}
function myFunction1(){
	getNearestBusInformation(-36.846607,174.755505,250);
}
//return type: json array
//example: 	[{route_id="8734NS5928",  agency_id="AT",  route_long_name="Midtown To Constellation  Express",  "route_desc":null,"route_type":3,"route_url":null,"route_color":"0096FF","route_text_color":"000000","st_distance_sphere":169.777530417}, {route_id="8734NS5928",  agency_id="AT",  route_long_name="Midtown To Constellation  Express",  "route_desc":null,"route_type":3,"route_url":null,"route_color":"0096FF","route_text_color":"000000","st_distance_sphere":169.777530417}]
getLocation();
function getLocation() {
	var x = document.getElementById("demo");
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	var x = document.getElementById("demo");
	x.innerHTML = "<i>Debug: Latitude: " + position.coords.latitude + 
    ", <i>Longitude: " + position.coords.longitude + "<br>";
	getNearestBusInformation(position.coords.latitude,position.coords.longitude,240);
}


function getNearestBusInformation(flat,flng,fdistance){
	var aipKey = "5f496b63-80d7-4eb3-9855-48a01af4c4c4";
	var lat = flat;
	var lng = flng;
	var distance = fdistance;
	var returnArray = new Array();
	$.ajax({
    	url: "https://api.at.govt.nz/v1/gtfs/routes/geosearch",
        type: "GET",
        contentType: "json",
		data:{"lat":lat,"lng":lng,"distance":distance,"api_key":aipKey},
        success: function (data) {
        	if(data.status == "OK"){
        		if(data.response.length == 0){
        			return null;
        		}else{
					
        			for(var i=0; i<data.response.length; i++){
						var duplicate = false;
						for(var j=0; j<returnArray.length; j++){
							if(returnArray[j].route_short_name == data.response[i].route_short_name
							//&& returnArray[j].route_long_name == data.response[i].route_long_name
							){
							duplicate = true;
							}
						}
						if(!duplicate){
        				var returnObj = new Object();
        				returnObj.route_id = data.response[i].route_id;
        				returnObj.agency_id = data.response[i].agency_id;
						returnObj.route_short_name = data.response[i].route_short_name;
        				returnObj.route_long_name = data.response[i].route_long_name;
        				returnObj.route_desc = data.response[i].route_desc;
        				returnObj.route_type = data.response[i].route_type;
        				returnObj.route_url = data.response[i].route_url;
        				returnObj.route_color = data.response[i].route_color;
        				returnObj.route_text_color = data.response[i].route_text_color;
        				returnObj.st_distance_sphere = data.response[i].st_distance_sphere;
        				returnArray.push(returnObj);
						}
        			}
					display(returnArray)
					debugger;
        			return returnArray;
        		}
        	}else{
        		alert("fail:get nearest bus stops");
        	}
			          
        },
        error: function (xhr) {
            alert("fail:get nearest bus stops");
        }
    });
}
function display(returnArray){
	var displayString = "";
	for(var j=0; j<returnArray.length; j++){
		displayString = displayString + returnArray[j].route_short_name +" " + returnArray[j].route_long_name + "<br>"
	}
	var x = document.getElementById("display");
	x.innerHTML = displayString;
}
