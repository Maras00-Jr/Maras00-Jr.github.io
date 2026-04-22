function processForm(event) {
    if (!validate())
        event.preventDefault();
}



function validate() {

    

    const errors = document.getElementsByClassName("errors");
    for (i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }
    // code clears all the error messages every time the user clicks on the submit button.


    const name_val = document.getElementById("name").value.trim();
    if (name_val === "") {
        document.getElementById("err1").textContent = "Please enter your Name"
        return false;

    }
    if (name_val.length > 25) {
        document.getElementById("err1").textContent = "Your name has to have less than 25 letters"
        return false;
    }

    const address_val = document.getElementById("address").value.trim();
    if (address_val === "") {
        document.getElementById("err2").textContent = "Please enter your address"
        return false;
    }

    /*const knum_val = document.getElementById("knum").value.trim();
    const regexKnum = /^K00\d{6}$/; 
    if (regexKnum.test(knum_val)==false)
    {
        document.getElementById("err").textContent="*Please enter a valid K number.";
        return false;
     
    }*/

    const mobile_val = document.getElementById("mobile").value.trim();
    const regexMobile = /^08[5, 6, 7]\d{7}$/;
    if (regexMobile.test(mobile_val) == false) {
        document.getElementById("err3").textContent = "*Please enter your mobile number.";
        return false;

    }

    const email1_val = document.getElementById("email1").value.trim();
    if (email1_val === "") {
        document.getElementById("err4").textContent = "Please enter your email"
        return false;
    }

    if (validateEmail(email1_val) === false) {
        document.getElementById("err4").textContent = "Incorrect email form"
        return false;
    }

    const email2_val = document.getElementById("email2").value.trim();
    if (email2_val === "") {
        document.getElementById("err5").textContent = "Please re-enter your email"
        return false;
    }
    if (email1_val != email2_val) {
        document.getElementById("err5").textContent = "Your emails do not match"
        return false;
    }
    const member_val = document.getElementById("member").value.trim();
    if (email2_val === "") {
        document.getElementById("err6").textContent = "Please enter information"
        return false;
    }


    return true;
}

function validateEmail(emailAddress) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailAddress);
}


processForm();

function menu() {
      var x = document.getElementById("menu");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
      }