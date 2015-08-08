function showBus(number, route) {
    var display = $("#display");
    var content = "<div class = 'bus'>" +
        "<p>" + number + "</p>" +
        "<p>" + route + "</p>" +
        "<button>submit</button>" +
        "</div>";
    display.append(content);
};

