/* ==== Registration form validation ==== */

/* Setting all event handler */
// firstName.addEventListener("blur, firstNameVerify, true");
// lastName.addEventListener("blur, lastNameVerify, true");
// phoneNumber.addEventListener("blur, phoneNumberVerify, true");
// gender.addEventListener("blur, genderVerify, true");
// email.addEventListener("blur, emailVerify, true");

function formValidation() {

/* ==== Form ids ==== */
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNumber = document.getElementById("phoneNumber");
let gender = document.getElementById("gender");
let email = document.getElementById("email");

/* ==== Error message ids ==== */
let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let phoneNumberError = document.getElementById("phoneNumberError");
let genderError = document.getElementById("genderError");
let emailError = document.getElementById("emailError");

  /* firstName */
  if ( firstName.value == "" ) {
    firstName.style.borderBottom = "2px solid rgb(255, 52, 52)";
    firstNameError.textContent = "Your first name is required";
    return false;
  }else {
    firstName.style.borderBottom = "";
    firstNameError.textContent = "";
  }

  /* lastName */
  if ( lastName.value == "" ) {
    lastName.style.borderBottom = "2px solid rgb(255, 52, 52)";
    lastNameError.textContent = "Your last name is required";
    return false;
  }else {
    lastName.style.borderBottom = "";
    lastNameError.textContent = "";
  }

  if ( phoneNumber.value == "" ) {
    phoneNumber.style.borderBottom = "2px solid rgb(255, 52, 52)";
    phoneNumberError.textContent = "Your phone number is required";
    // alert("this validation works with alart");
    return false;
  }else {
    phoneNumber.style.borderBottom = "";
    phoneNumberError.textContent = "";
  }
  
  let selectedValue = gender.options[gender.selectedIndex].value;
  if ( selectedValue == "selectedGender" ) {
    gender.style.borderBottom = "2px solid rgb(255, 52, 52)";
    genderError.textContent = "Your gender is required";
    return false;
  }else {
    gender.style.borderBottom = "";
    genderError.textContent = "";
  }

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




/* name verification */
// function firstNameverify() {
//   if ( firstName.value =! "" ) {
//     return true;
//   }
// }
