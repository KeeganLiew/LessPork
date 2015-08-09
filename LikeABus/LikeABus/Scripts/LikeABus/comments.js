
﻿function showBus(number, route) {
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
/*** you can fix later nary
function showComments(number,route,ups,downs,comments) {
    var container = $("#comment-box");

    var content = "<div class='row'>" +
                        "<img class='col-xs-2 thumbnail' src='../../Content/Bus-icon.png'> " +
                        "<div class='col-xs-4'>" +
                            "<h4 class='lead'>"+ number + "</h4>" +
                            "<h3>" + route + "</h3>" +
                        "</div>" +
                    "</div>" +
                    "<div class='row'>" +
                        "<div class='col-xs-4'>" +
                            "<img class='row thumbnail' src='../../Content/happy.png'/>" +
                            "<label class='row'>"+ ups +"</label>" +
                         "</div>" +
                         "<div class='col-xs-4'>" +
                            "<img class='row thumbnail' src='../../Content/sad.png'/>" +
                            "<label class='row'>"+ downs+"</label>" +
                        "</div>" +
                    "</div>" +
                    "<div class='row' id = 'busInfo'>";
    container.append(content);
    addComments(comments);
};

function addComments(com) {
    for (var i = 0; i < com.length; i++) {
        $("#busInfo").append("<div class='comment'> -" + com[i] + "</div>");
    }
    $("#busInfo").append("<button> Back</button>" +
        "</div>");
}
***/