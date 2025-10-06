function sendToWhatsapp(){
    let number  ="+918590566309"

    let name = document.getElementById("name").value;
    let place = document.getElementById("pl").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("mes").value;

    var url="https://wa.me/"+ number + "?text="
    + "Name :" + name +"%0a"
    + "Email :" +email + "%0a"
    + "Place :" + place + "%0a"
    + "Message :" + message+ "%0a%0a";

    window.open(url,"_blank").focus();
}