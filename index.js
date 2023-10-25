var name1 = prompt("Für wen soll die Aufgabe generiert werden?")
if (name1 == "Max") {
    document.querySelector("img").setAttribute("src", "./images/max.jpg")
    document.querySelector("h1").innerHTML = "Max";
}
    else if (name1 == "Lucie") {
    document.querySelector("img").setAttribute("src", "./images/lucie.jpg")
    document.querySelector("h1").innerHTML = "Lucie";
}
else if (name1 == "Marlon") {
    document.querySelector("img").setAttribute("src", "./images/marlon.jpg")
    document.querySelector("h1").innerHTML = "Marlon";
}

var number1 = ((Math.floor(Math.random() * 6)) + 1)

if (number1 == 1) {
    document.querySelector("p").innerHTML = "darf diese Woche die Toilette und Dusche putzen";
}
if (number1 == 2) {
    document.querySelector("p").innerHTML = "darf diese Woche chillen. Du hast das Freilos gewonnen :-)";
}
if (number1 == 3) {
    document.querySelector("p").innerHTML = "darf diese Woche einen Kuchen backen, oder was anderes leckeres zum verzehren";
}
if (number1 == 4) {
    document.querySelector("p").innerHTML = "darf diese Woche die Wohnung gründlich saugen und wischen";
}
if (number1 == 5) {
    document.querySelector("p").innerHTML = "darf diese Woche einen Witz erzählen";
}
if (number1 == 6) {
    document.querySelector("p").innerHTML = "darf diese Woche die Küche und den Balkon entrümpeln";
}