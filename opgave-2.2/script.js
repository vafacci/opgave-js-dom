// En separat click handler på hver div (2.2.2): det virker, men er gentagende
document.getElementById("first").addEventListener("click", function () {
    // Skriver til konsollen, hvilken div der blev klikket på
    console.log("Hi from first");
});

document.getElementById("second").addEventListener("click", function () {
    console.log("Hi from second");
});

document.getElementById("third").addEventListener("click", function () {
    console.log("Hi from third");
});

// Én handler på forælderen #outer (2.2.4): klik på en div bobler op til #outer (event bubbling)
document.getElementById("outer").addEventListener("click", function (event) {
    // event.target er det element, der faktisk blev klikket på
    // .id giver id'et på det element, og teksten vises i #output med innerText (2.2.5 og 2.2.6)
    document.getElementById("output").innerText = "Du har klikket på: " + event.target.id;
});
