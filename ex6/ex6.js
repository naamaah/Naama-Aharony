function thankyou()
    {
        document.getElementById("button").innerHTML = "Thank You";
        console.log("Naama Aharony");

    }


function changePic(){
    document.getElementById("pic").src = "Naama.jpeg";
}



function checkValid() {
    const inpObj = document.getElementById("age");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    }
}