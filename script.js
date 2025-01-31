let correct1 = false;
let correct2 = false;
let correct3 = false;

function checkInput1(event) {
    event.preventDefault();

    let input1 = document.getElementById('input1').value;
    let result1 = document.getElementById('result1');

    if (input1 === '47446') {
        result1.textContent = "Congratulazioni! Du bist nun ein Rekrut der La Mano di Scrupolo."; 
        result1.className = "result-message correct"; 
        correct1 = true; 
    } else {
        result1.textContent = "Versuche es nochmal, denk dran, es könnte deine letzte Chance sein."; 
        result1.className = "result-message incorrect"; 
        correct1 = false;
    }

    checkAllInputs();
}

function checkInput2(event) {
    event.preventDefault();

    let input2 = document.getElementById('input2').value;
    let result2 = document.getElementById('result2');

    if (input2 === '51120') {
        result2.textContent = "Congratulazioni! Du wurdest zum Capo befördert."; 
        result2.className = "result-message correct"; 
        correct2 = true; 
    } else {
        result2.textContent = "Versuche es nochmal, denk dran, es könnte deine letzte Chance sein."; 
        result2.className = "result-message incorrect"; 
        correct2 = false;
    }

    checkAllInputs();
}

function checkInput3(event) {
    event.preventDefault();

    let input3 = document.getElementById('input3').value;
    let result3 = document.getElementById('result3');

    if (input3 === '41171') {
        result3.textContent = "Congratulazioni!"; 
        result3.className = "result-message correct"; 
        correct3 = true; 
    } else {
        result3.textContent = "Versuche es nochmal, denk dran, es könnte deine letzte Chance sein."; 
        result3.className = "result-message incorrect"; 
        correct3 = false;
    }

    checkAllInputs();
}

function checkAllInputs() {
    let resultText = document.getElementById('result');

    if (correct1 && correct2 && correct3) {
        resultText.textContent = 
        "Congratulazioni! Du bist bereit in das Buch der Paten zu schreiben.\n" +
        "Das Buch der Bücher – nein nicht die Bibel – sondern das Geheimregister aller Mafiosis – alle mächtigen Paten müssen sich dort eintragen.\n" +
        "Du hast nur einen Versuch – wen du scheiterst waren alle Mühen umsonst.\n" +
        "Bei Erfolg bist Du der neue Pate!\n\n" +
        "So stehe der Gründer Giuseppe Mazzini auf der ersten Seite mit der Zahl 1,\n" +
        "Ein weiterer Giuseppe Masseria steht auf Seite 2 auch mit der Zahl 1,\n" +
        "Giovanni Salvatore steht auf Seite 3 mit der Zahl 2.\n\n" +
        "Deine Seite ist die Seite 31. Schreibe die korrekte Zahl hinein und sehe, ob du der neue Pate wirst:";

        resultText.className = "result-message correct"; // grüne Farbe

        // Zeige das Eingabefeld für die finale Zahl an
        document.getElementById('finalInputSection').style.display = 'block';
    } else {
        resultText.textContent = "";  // Lösche die Nachricht, wenn nicht alle korrekt sind
    }
}

function checkFinalInput(event) {
    event.preventDefault();

    let finalInput = document.getElementById('finalInput').value;
    let finalResult = document.getElementById('finalResult');

    if (finalInput === '1346269') { // Korrekte Zahl
        finalResult.textContent = "Du bist der neue Pate!";
        finalResult.className = "result-message correct";

        // Zeige das Bild und den Text
        document.getElementById('pateImage').src = "BildFinal.jpg";  // Füge hier das Bild des neuen Paten hinzu
        document.getElementById('pateText').textContent = "Der Neue Pate Andrea Di Stefano";
        document.getElementById('pateInfo').style.display = 'block';

    } else {
        finalResult.textContent = "Falsche Zahl. Game Over!!!.";
        finalResult.className = "result-message incorrect";

        // Sperre alle Felder
        document.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });
        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        });
    }
}
