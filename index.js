function sendToWhatsApp(){

    const inputEmail = document.getElementById("email").value;
    const  inputName = document.getElementById("fname").value;

    const formUrl = "https://wa.me/+27734737725" +  "?text=" 
    +"Hey, I hope you are well, my name "+encodeURIComponent(inputName)+ " and my email is "+encodeURIComponent(inputEmail)+ ". I would like to book you for an Upcoming Event. ";
    window.open(formUrl, '_blank').focus();

} 
