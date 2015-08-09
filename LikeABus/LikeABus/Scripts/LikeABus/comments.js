
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
