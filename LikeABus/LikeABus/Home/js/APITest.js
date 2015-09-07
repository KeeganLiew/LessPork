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
	x.innerHTML = "You are currently at <i>Latitude of " + position.coords.latitude +
    " and <i>Longitude of " + position.coords.longitude + "<br>";
	getNearestBusInformation(position.coords.latitude,position.coords.longitude,340);
}

function compare(a, b) {
    if (a.route_short_name < b.route_short_name)
        return -1;
    if (a.route_short_name > b.route_short_name)
        return 1;
    return 0;
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
        			returnArray.sort(compare);
					display(returnArray)
					//debugger;
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
    var x = document.getElementById("demo");
	for(var j=0; j<returnArray.length; j++){
	    displayString = displayString + returnArray[j].route_short_name + " " + returnArray[j].route_long_name + "<br>"
	    //x.innerHTML = displayString;
	    showBus(""+returnArray[j].route_short_name, ""+returnArray[j].route_long_name);
	    //showBus(returnArray[j]);
	}
	
	//x.innerHTML = displayString;
}
