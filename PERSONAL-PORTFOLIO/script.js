/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const subject =
        document.getElementById("subject").value.trim();


    const message =
        document.getElementById("message").value.trim();


    const emailBody =

        "Hello Jegasri,\n\n" +

        "Name: " + name + "\n" +

        "Email: " + email + "\n\n" +

        "Message:\n" + message;


    const mailtoLink =

        "mailto:jegasrisubass@gmail.com" +

        "?subject=" +

        encodeURIComponent(subject) +

        "&body=" +

        encodeURIComponent(emailBody);


    window.location.href = mailtoLink;

});


/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopButton =
    document.getElementById("scrollTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   HEADER SHADOW
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(15,23,42,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});