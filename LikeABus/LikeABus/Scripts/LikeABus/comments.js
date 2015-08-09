function showBus(number, route) {
    var display = $("#display");
    var content = "<div class = 'bus'>" +
        "<p>" + number + "</p>" +
        "<p>" + route + "</p>" +
        "<button>submit</button>" +
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