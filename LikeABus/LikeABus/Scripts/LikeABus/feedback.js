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
        submit.rating = "up";
        //console.log("UP");
    }
    if (document.getElementById('down').checked) {
        submit.rating = "down"
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

}



