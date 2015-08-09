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
    var content = "<div class='row'>" +
                        "<img class = 'col-xs-2 thumbnail' src='../../Content/Bus-icon.png/'>" +
                        "<div class='col-xs-4'>" +
                            "<h4 class='lead'>"+ number + "</h4>" +
                            "<h3>" + Route + "</h3>" +
                        "</div>" +
                    "</div>" +
                    "<div class='row'>" +
                        "<div class='col-xs-4'>" +
                            "<img class='row thumbnail' src='../../Content/happy.png'/>" +
                            "<label class='row'>"+ ups +"</label>" +
                         "</div>" +
                         "<div class='col-xs-4'>"
                    <img class="row thumbnail" src="../../Content/sad.png"/>
                    <label class="row">70%</label>
                </div>
            </div>
                    <div class="row" id = "busInfo" > ;
                    forEach(item in comments)
        {
            $("#busInfo"),append("")
        }
    
                    <div class="comment"> - bad</div>
                    <div class="comment"> - late</div>
                    <div class="comment"> - crowded</div>
                    <button> Back</button>
                </div>
};