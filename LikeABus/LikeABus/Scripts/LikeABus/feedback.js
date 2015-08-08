$(document).ready(submitForm());

function person(rating, comment, latitude, longitude) {
    this.rating = rating;
    this.comment = comment;
    this.latitude = latitude;
    this.longitude = longitude;
    //this.time = date();
}


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

}



