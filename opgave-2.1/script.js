// Henter knappen ud fra dens id
const button = document.getElementById("colorBtn");

// Click handler (2.1.2): koden inde i funktionen kører, hver gang der klikkes på knappen
button.addEventListener("click", function () {
    // getElementById henter en bestemt div, og style.backgroundColor ændrer dens baggrundsfarve
    
    // Første div bliver rød
    document.getElementById("first").style.backgroundColor = "red";

    // Anden div bliver blå
    document.getElementById("second").style.backgroundColor = "blue";

    // Tredje div bliver pink
    document.getElementById("third").style.backgroundColor = "pink";
});
