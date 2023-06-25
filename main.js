$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("#navBar").addClass("mybg-primary");
    } else {
      $("#navBar").removeClass("mybg-primary");
    }
  });
  $(".navbar-toggler").click(function () {
    $("#navBar").toggleClass("mybg-primary1");
  });
});

function mailValidate() {
  let mail = document.getElementById("mailInp");
  let mailErr = document.getElementById("mailErr");
  let mailReg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let mailValid;

  if (mail.value == "") {
    mailErr.innerHTML = "This feild can't be empty";
    mailValid = 0;
  } else if (!mailReg.test(mail.value)) {
    mailErr.innerHTML = "Enter a valid email address";
    mailValid = 0;
  } else {
    mailErr.innerHTML = "";
    mailValid = 1;
  }

  if (mailValid) {
    return true;
  } else {
    return false;
  }
}

function formValidate() {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let mail = document.getElementById("mailInp");
  let messege = document.getElementById("message");
  let mailErr = document.getElementById("mailErr");
  let fErr = document.getElementById("fErr");
  let lErr = document.getElementById("lErr");
  let mErr = document.getElementById("mErr");
  let mailReg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let firstname, lastname, mailValid, messValid;

  if (firstName.value == "") {
    fErr.innerHTML = "Please enter your first name";
    firstname = 0;
  } else {
    fErr.innerHTML = "";
    firstname = 1;
  }

  if (lastName.value == "") {
    lErr.innerHTML = "Please enter your last name";
    lastname = 0;
  } else {
    lErr.innerHTML = "";
    lastname = 1;
  }

  if (messege.value == "") {
    mErr.innerHTML = "Please fill the message feild";
    messValid = 0;
  } else {
    mErr.innerHTML = "";
    messValid = 1;
  }

  if (mail.value == "") {
    mailErr.innerHTML = "This feild can't be empty";
    mailValid = 0;
  } else if (!mailReg.test(mail.value)) {
    mailErr.innerHTML = "Enter a valid email address";
    mailValid = 0;
  } else {
    mailErr.innerHTML = "";
    mailValid = 1;
  }

  if (mailValid && firstname && lastname && messValid) {
    return true;
  } else {
    return false;
  }
}
