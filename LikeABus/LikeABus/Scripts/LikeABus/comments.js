﻿function showBus(number, route) {
    route = route.replace('amp;', '');
    console.log(route);
    var display = $("#display");
    var content = "<div class = 'bus'>" +
        "<p>" + number + "</p>" +
        "<p>" + route + "</p>" +
        //"<button id=\""+number+"\" onclick=\"button("+number+","+ route +")\">submit</button>" +
        "<button id=\"" + number + "\" onclick=\"button(" + number +")\">submit</button>" +
        "</div>";
    display.append(content);
};

function button(number, route) {

    alert("" + number + "," + route); // or alert($(this).attr('id'));
    sessionStorage.setItem(number, route);
    var persistedval = sessionStorage.getItem(number) //returns "Some Value"
    alert("persistedval: " + persistedval);
    //window.location = '/';
}

