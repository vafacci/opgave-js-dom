// Én event handler på #buttons i stedet for en på hver knap (event bubbling)
document.getElementById("buttons").addEventListener("click", function (event) {
    // event.target er det element, der faktisk blev klikket på
    // Tjekker at det er en knap (klassen t1), så klik mellem knapperne ignoreres
    if (event.target.classList.contains("t1")) {
        // += tilføjer knappens tekst til displayet i stedet for at overskrive det
        document.getElementById("display").innerText += event.target.innerText;
    }
});

// Egen handler til "=" knappen
document.getElementById("calculate").addEventListener("click", function (event) {
    // Stopper eventet, så det ikke bobler op til #buttons (ellers ville "=" blive skrevet i displayet)
    event.stopPropagation();

    // Henter teksten fra displayet, fx "7+5"
    const expression = document.getElementById("display").innerText;
    // eval() regner strengen ud som et udtryk og returnerer resultatet, som vises i displayet
    document.getElementById("display").innerText = eval(expression);
});
