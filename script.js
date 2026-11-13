

// Display current year in footer
document.addEventListener("DOMContentLoaded", function() {


    let footer = document.querySelector("footer");


    if (footer) {
        footer.innerHTML =
        "© " + new Date().getFullYear() +
        " Navya B A | All Rights Reserved";
    }


    // Welcome message
    console.log("Welcome to Navya's Personal Website!");


});

