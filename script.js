function translateText() {
    const input = document.getElementById("inputText").value;
    const lang = document.getElementById("langSelect").value;
    const output = document.getElementById("outputText");

    if (!input.trim()) {
        output.innerHTML = "<i>Veuillez entrer un texte à traduire.</i>";
        return;
    }

    // Simulation de traduction
    output.innerHTML = "<b>Texte traduit (" + lang + ") :</b><br>" +
        input.split('').reverse().join('') + " (simulation)";
}
