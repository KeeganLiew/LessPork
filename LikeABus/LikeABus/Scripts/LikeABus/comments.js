function showBus(number, route) {
    route = route.replace('amp;', '');
    console.log(route);
    var display = $("#display");
    var content = "<div class = 'bus'>" +
        "<p>" + number + "</p>" +
        "<p>" + route + "</p>" +
        //"<button id=\""+number+"\" onclick=\"button("+number+","+ route +")\">submit</button>" +
        "<button id=\"" + number + "\" onclick=\"button('" + number + "','" + route + "')\">submit</button>" + 
        "</div>";
    display.append(content);
};

function showComments(number,route,ups,downs,comments) {
    var container = $("#comment-box");
    var content = "<div>" +
        "<p>" + number + "</p>"
        + "<h4>" + route + "</h4>" +
        "</div>";
};

function button(number, route) {
    //alert("" + number + "," + route); // or alert($(this).attr('id'));
    /*
    var bus = new Object();//{ busID: number, route: route };
    bus.busID = number;
    bus.route = route;
    */
    /*
    sessionStorage.setItem(1, bus);
    //var persistedval = sessionStorage.getItem("1") //returns "Some Value"
    console.log(sessionStorage.getItem(1).route);
    //window.location = 
    alert("" + number + "," + route); // or alert($(this).attr('id'));
    */

    sessionStorage.setItem("busID", number);
    sessionStorage.setItem("route", route);
    var persistedval1 = sessionStorage.getItem("busID"); //returns "Some Value"
    var persistedval2 = sessionStorage.getItem("route")

    //alert("persistedval: " + persistedval1 + " " + persistedval2);
    window.location = '/Home/FeedBack';
}

