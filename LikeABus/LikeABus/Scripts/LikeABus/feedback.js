$(document).ready(submitForm());

function person(rating, comment, latitude, longitude) {
    this.rating = rating;
    this.comment = comment;
    this.latitude = latitude;
    this.longitude = longitude;
    this.time = Date();
    this.busID = sessionStorage.getItem("busID")
    this.route = sessionStorage.getItem("route")
}

var str = document.getElementById("header2").innerHTML;
str = str + "" + sessionStorage.getItem("busID") + " - " + sessionStorage.getItem("route");
//debugger;
document.getElementById("header2").innerHTML = str;

function submitForm() {
    console.log("opened script file");
}
function myFunction() {
    //console.log("Hello myFunction()s");        
    var submit = new person("","","","");
    if (document.getElementById('up').checked) {
        submit.rating = "positive";
        //console.log("UP");
    }
    if (document.getElementById('down').checked) {
        submit.rating = "negative"
        //console.log("DOWN");
    }
    console.log(submit.rating);
    submit.comment = document.getElementById('textArea').value
    console.log(submit.comment);
    console.log(submit.time);
    sessionStorage.setItem("rating", submit.rating);
    sessionStorage.setItem("comment", submit.comment);
    sessionStorage.setItem("date", submit.time);

    window.location.replace = '/Home/Comments';
    DataResults("aaa", "ddd", submit.rating, submit.comment, submit.time)

}



function DataResults(sbusID, sbusRoute, srating, scomment, dtdate) {
    var myObject = new Object();
    myObject.comment = scomment;
    myObject.time = dtdate;
    myObject.rating = srating;
    myObject.busID = sbusID;
    myObject.busRoute = sbusRoute;

    var myString = JSON.stringify(myObject);
    $.ajax({
        url: "/Home/WriteXML",
        dataType: "json",
        type: "POST",
        data: myString,
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            return data.success;

        },
        error: function (xhr) {
            return null;
        }
    });
}



