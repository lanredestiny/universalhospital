var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


/* ==== Registration form validation ==== */

/* Setting all event handler */
// firstName.addEventListener("blur, firstNameVerify, true");
// lastName.addEventListener("blur, lastNameVerify, true");
// phoneNumber.addEventListener("blur, phoneNumberVerify, true");
// gender.addEventListener("blur, genderVerify, true");
// email.addEventListener("blur, emailVerify, true");

function formValidation() {

  /* ==== Form ids ==== */
  let email = document.getElementById("email");
  
  /* ==== Error message ids ==== */
  let emailError = document.getElementById("emailError");
  
    /* Email */
  
    if ( email.value == "" ) {
      email.style.borderBottom = "2px solid rgb(255, 52, 52)";
      emailError.textContent = "Your email address is required";
      return false;
    }else if ( email.value.includes("@") == false && email.value.endsWith(".com") == false ) {
      email.style.borderBottom = "2px solid rgb(255, 52, 52)";
      emailError.textContent = "enter a validate email address";
      return false;
    }else {
      email.style.borderBottom = "";
      emailError.textContent = "";
    }
  }



