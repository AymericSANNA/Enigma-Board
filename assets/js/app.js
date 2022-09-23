// Objet représentant l'écran défilant Advertizr
const gameBoard = {

    /**
     * Propriétés
     */

    // Propriété permettant de modéliser le fait que la touche MAJ a été enfoncée
    isUpperCase: false,
    keyElement: "",
    majElement: "",
    screenElement: "",
    emojiElement: "",
    textElement: "",
    levelElement: "",
    typewriterElement: "",
    typewriter2Element: "",
    typewriter3Element: "",
    typewriter4Element: "",
    typewriter5Element: "",
    typewriter6Element: "",
    selectEnigme: "",
    selectEnigme1: "",
    selectEnigme2: "",
    selectEnigme3: "",
    selectEnigme4: "",
    selectEnigme5: "",
    selectEnigme6: "",
    selectEnigme7: "",

    /**
     * Méthodes
     */

    init: function () {
        // Selector:
        gameBoard.screenElement = document.querySelector('.text'); // Screen element 
        gameBoard.majElement = document.querySelector('.maj'); // Shift element 
        const backElement = document.querySelector('.return'); // Return element 
        gameBoard.keyElement = document.querySelectorAll('.touch'); // Letters elements 
        gameBoard.emojiElement = document.querySelector('.emoji'); // Emoji elements
        gameBoard.textElement = document.querySelector('.text'); // Text element
        gameBoard.levelElement = document.querySelector('.level'); // Level element
        gameBoard.typewriterElement = document.querySelector('.typewriter'); // Typewriter element
        gameBoard.typewriter2Element = document.querySelector('.typewriter2'); // Typewriter 2 element
        gameBoard.typewriter3Element = document.querySelector('.typewriter3'); // Typewriter 3 element
        gameBoard.typewriter4Element = document.querySelector('.typewriter4'); // Typewriter 4 element
        gameBoard.typewriter5Element = document.querySelector('.typewriter5'); // Typewriter 5 element
        gameBoard.typewriter6Element = document.querySelector('.typewriter6'); // Typewriter 6 element
        gameBoard.selectEnigme1 = document.querySelector('#enigme1');// Enigme 1 button element
        gameBoard.selectEnigme2 = document.querySelector('#enigme2');// Enigme 2 button element
        gameBoard.selectEnigme3 = document.querySelector('#enigme3');// Enigme 3 button element
        gameBoard.selectEnigme4 = document.querySelector('#enigme4');// Enigme 4 button element
        gameBoard.selectEnigme5 = document.querySelector('#enigme5');// Enigme 5 button element
        gameBoard.selectEnigme6 = document.querySelector('#enigme6');// Enigme 6 button element
        gameBoard.selectEnigme7 = document.querySelector('#enigme7');// Enigme 7 button element
        gameBoard.selectEnigme = document.querySelectorAll('.enigme');// All Enigme elements
        

        // Listener:
        backElement.addEventListener('click', gameBoard.handleBack); // Erase a letter on click
        gameBoard.majElement.addEventListener('click', gameBoard.pressed); // Enable or Disable Shift button on click

        // show the selected Enigme on board.
        for (let index = 0; index < gameBoard.selectEnigme.length; index++) {
            gameBoard.selectEnigme[index].addEventListener('click', gameBoard.handleEnigmeDisplay); 
        }
        
        // Write letter in screen on click
        for (let index = 0; index < gameBoard.keyElement.length; index++) {
            gameBoard.keyElement[index].addEventListener('click', gameBoard.handleClickOnLetter);
        }

        
    },

    handleClickOnLetter: function (event) {
        //Select clicked element text
        const letter = event.currentTarget.textContent;
        gameBoard.addLetter(letter);
        gameBoard.checkMessage(gameBoard.screenElement.textContent)// check message on board.
    },

    addLetter: function (letter) {
        if (letter !== null) {
            if (gameBoard.isUpperCase === false) {
                // add Selected letter on the screen
                gameBoard.screenElement.textContent = gameBoard.screenElement.textContent + letter;
            } else {
                gameBoard.screenElement.textContent = gameBoard.screenElement.textContent + letter.toUpperCase();
            }
        }
    },

    pressed: function (event) {
        // change value of isUpperCase if currentTarget 
        if (event.currentTarget === gameBoard.majElement && gameBoard.isUpperCase === false) {
            gameBoard.majElement.classList.add('pressed');
            gameBoard.isUpperCase = true;  
        } else {
            gameBoard.isUpperCase = false;
            gameBoard.majElement.classList.remove('pressed');
        }
    },

    handleBack: function (event) {
        gameBoard.removeLetter();
    },

    removeLetter: function () {    
        gameBoard.screenElement.textContent = gameBoard.screenElement.textContent.slice(0,-1);
    },

    checkAllAnswers: function () {
        if (
            gameBoard.selectEnigme1.textContent == "Enigme - 1 (Résolue)" 
            && gameBoard.selectEnigme2.textContent == "Enigme - 2 (Résolue)" 
            && gameBoard.selectEnigme3.textContent == "Enigme - 3 (Résolue)"
            && gameBoard.selectEnigme4.textContent == "Enigme - 4 (Résolue)"
            && gameBoard.selectEnigme5.textContent == "Enigme - 5 (Résolue)"
            && gameBoard.selectEnigme6.textContent == "Enigme - 6 (Résolue)"
            && gameBoard.selectEnigme7.textContent == "Enigme - 7 (Résolue)"
        ) {
            gameBoard.levelElement.textContent = "🎊 Félicitations !!! 🎊";
            gameBoard.typewriterElement.textContent = "Vous avez résolu toutes les énigmes 🤯";
            gameBoard.typewriter2Element.textContent = "🎉";
            gameBoard.typewriter3Element.textContent = "Je vous remercie d'avoir participé,";
            gameBoard.typewriter4Element.textContent = "Vous pouvez maintenant vous amuser";
            gameBoard.typewriter5Element.textContent = "à écrire ce que vous souhaitez ! 🥰";
            gameBoard.textElement.textContent = "";
            document.querySelector('.emoji').style.display = "inline-block";
        }
    },

    handleEnigmeDisplay: function (event) {
        const target = event.currentTarget;
        if (target === gameBoard.selectEnigme1){
            gameBoard.levelElement.textContent = "Enigme - 1";
            gameBoard.typewriterElement.textContent = "Autrefois elle acheminait bien du courrier";
            gameBoard.typewriter2Element.textContent = "Elle est souvent synonyme de voyages.";
            gameBoard.typewriter3Element.textContent = "Parfois au fond d’un grenier,";
            gameBoard.typewriter4Element.textContent = "S’y entasse des souvenirs sans âge.";
            gameBoard.typewriter5Element.textContent = "Qui est-elle?";
            gameBoard.textElement.textContent = "";
        }
        if (target === gameBoard.selectEnigme2){
            gameBoard.levelElement.textContent = "Enigme - 2";
            gameBoard.typewriterElement.textContent = "Comme le coton, il est léger,";
            gameBoard.typewriter2Element.textContent = "Et de glace il est constitué.";
            gameBoard.typewriter3Element.textContent = "Cette céréale déshydratée,";
            gameBoard.typewriter4Element.textContent = "Est idéale au petit-déjeuner.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
        }
        if (target === gameBoard.selectEnigme3){
            gameBoard.levelElement.textContent = "Enigme - 3";
            gameBoard.typewriterElement.textContent = "Souvent associé au printemps,";
            gameBoard.typewriter2Element.textContent = "On peut aussi plonger dedans.";
            gameBoard.typewriter3Element.textContent = "Très utile en pâtisserie,";
            gameBoard.typewriter4Element.textContent = "Pour peindre on s'en sert aussi.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
        }
        if (target === gameBoard.selectEnigme4){
            gameBoard.levelElement.textContent = "Enigme - 4";
            gameBoard.typewriterElement.textContent = "On compte sur elle pour le transport,";
            gameBoard.typewriter2Element.textContent = "C'est une bête qu'il faut ménager.";
            gameBoard.typewriter3Element.textContent = "Elle peut être en or,";
            gameBoard.typewriter4Element.textContent = "Sans elle, des verres on ne pourrait porter.";
            gameBoard.typewriter5Element.textContent = "Qui est-elle?";
            gameBoard.textElement.textContent = "";
        }
        if (target === gameBoard.selectEnigme5){
            gameBoard.levelElement.textContent = "Enigme - 5";
            gameBoard.typewriterElement.textContent = "Utile pour le dessin,";
            gameBoard.typewriter2Element.textContent = "On l'imite quand on l'aime bien.";
            gameBoard.typewriter3Element.textContent = "Il adore défiler.";
            gameBoard.typewriter4Element.textContent = "Et peut-être déposer.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
        }
        if (target === gameBoard.selectEnigme6){
            gameBoard.levelElement.textContent = "Enigme - 6";
            gameBoard.typewriterElement.textContent = "Capable de marcher sur la tête,";
            gameBoard.typewriter2Element.textContent = "Avec ses œufs on ne fait pas d'omelette.";
            gameBoard.typewriter3Element.textContent = "Souvent très laid, toujours avec fierté,";
            gameBoard.typewriter4Element.textContent = "Il gratte le cuir avec assiduité.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
        }
        if (target === gameBoard.selectEnigme7){
            gameBoard.levelElement.textContent = "Enigme - 7";
            gameBoard.typewriterElement.textContent = "En équilibre sur sa pointe fine,";
            gameBoard.typewriter2Element.textContent = "C'est une chose enfantine.";
            gameBoard.typewriter3Element.textContent = "Fort utile pour le maçon,";
            gameBoard.typewriter4Element.textContent = "Elle enchaîne les rotations.";
            gameBoard.typewriter5Element.textContent = "Qui est-elle?";
            gameBoard.textElement.textContent = "";
            
        }

    },

    // This function will check the word written on screen and make action form the different 
    // message checked.
    // example : try to write "I love you" or "Kevin" on screen
    checkMessage: function(message){
        if (message == "I love you" || message == "I LOVE YOU" || message == "i love you"){
            for (let index = 0; index < gameBoard.keyElement.length; index++) {
                gameBoard.keyElement[index].style.backgroundColor = "darkred";
                gameBoard.keyElement[index].style.color = "white";
                gameBoard.keyElement[index].style.boxShadow = "white 0px 5px";
            }
            gameBoard.screenElement.style.color = 'darkmagenta';
            gameBoard.majElement.style.backgroundColor = "darkred";
            gameBoard.majElement.style.color = "white";
            gameBoard.majElement.style.boxShadow = "white 0px 5px";
        }
        if (message == "kevin" || message == "Kevin" || message == "KEVIN") {
            for (let index = 0; index < gameBoard.keyElement.length; index++) {
                gameBoard.keyElement[index].style.backgroundColor = "black";
                gameBoard.keyElement[index].style.color = "white";
                gameBoard.keyElement[index].style.boxShadow = "white 0px 5px";
                gameBoard.keyElement[index].textContent = '☠️';
            }

            gameBoard.screenElement.style.color = 'white';
            gameBoard.majElement.style.backgroundColor = "black";
            gameBoard.majElement.style.color = "white";
            gameBoard.majElement.style.boxShadow = "white 0px 5px";
        }
        if (message == "Emoji" || message == "EMOJI" || message == "emoji"){
            gameBoard.emojiElement.style.display = "inline-block";
        }
        if (message == "La Malle" || message == "LA MALLE" || message == "la malle" || message == "Une Malle" || message == "UNE MALLE" || message == "une malle" || message == "Malle" || message == "MALLE" || message == "malle") {
            gameBoard.levelElement.textContent = "Enigme - 2";
            gameBoard.typewriterElement.textContent = "Comme le coton, il est léger,";
            gameBoard.typewriter2Element.textContent = "Et de glace il est constitué.";
            gameBoard.typewriter3Element.textContent = "Cette céréale déshydratée,";
            gameBoard.typewriter4Element.textContent = "Est idéale au petit-déjeuner.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
            gameBoard.selectEnigme1.textContent = "Enigme - 1 (Résolue)";
            gameBoard.selectEnigme1.style.backgroundColor = "rgba(180,180,180)";
            gameBoard.selectEnigme1.style.boxShadow = "rgba(140,140,140) 0px 5px";
            gameBoard.checkAllAnswers(); // Check all answers in the game.
        }
        if (message == "Le Flocon" || message == "LE FLOCON" || message == "le flocon" || message == "un flocon" || message == "Un Flocon" || message == "UN FLOCON" || message == "flocon" || message == "FLOCON" || message == "Flocon") {
            gameBoard.levelElement.textContent = "Enigme - 3";
            gameBoard.typewriterElement.textContent = "Souvent associé au printemps,";
            gameBoard.typewriter2Element.textContent = "On peut aussi plonger dedans.";
            gameBoard.typewriter3Element.textContent = "Très utile en pâtisserie,";
            gameBoard.typewriter4Element.textContent = "Pour peindre on s'en sert aussi.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
            gameBoard.selectEnigme2.textContent = "Enigme - 2 (Résolue)";
            gameBoard.selectEnigme2.style.backgroundColor = "rgba(180,180,180)";
            gameBoard.selectEnigme2.style.boxShadow = "rgba(140,140,140) 0px 5px";
            gameBoard.checkAllAnswers(); // Check all answers in the game.
        }
        if (message == "Le Rouleau" || message == "LE ROULEAU" || message == "le rouleau" || message == "Une Rouleau" || message == "UNE ROULEAU" || message == "une rouleau" || message == "rouleau" || message == "ROULEAU" || message == "Rouleau") {
            gameBoard.levelElement.textContent = "Enigme - 4";
            gameBoard.typewriterElement.textContent = "On compte sur elle pour le transport,";
            gameBoard.typewriter2Element.textContent = "C'est une bête qu'il faut ménager.";
            gameBoard.typewriter3Element.textContent = "Elle peut être en or,";
            gameBoard.typewriter4Element.textContent = "Sans elle, des verres on ne pourrait porter.";
            gameBoard.typewriter5Element.textContent = "Qui est-elle?";
            gameBoard.textElement.textContent = "";
            gameBoard.selectEnigme3.textContent = "Enigme - 3 (Résolue)";
            gameBoard.selectEnigme3.style.backgroundColor = "rgba(180,180,180)";
            gameBoard.selectEnigme3.style.boxShadow = "rgba(140,140,140) 0px 5px";
            gameBoard.checkAllAnswers(); // Check all answers in the game.
        }
        if (message == "La Monture" || message == "LA MONTURE" || message == "la monture" || message == "Une Monture" || message == "UNE MONTURE" || message == "une monture" || message == "monture" || message == "MONTURE" || message == "Monture") {
            gameBoard.levelElement.textContent = "Enigme - 5";
            gameBoard.typewriterElement.textContent = "Utile pour le dessin,";
            gameBoard.typewriter2Element.textContent = "On l'imite quand on l'aime bien.";
            gameBoard.typewriter3Element.textContent = "Il adore défiler.";
            gameBoard.typewriter4Element.textContent = "Et peut-être déposer.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
            gameBoard.selectEnigme4.textContent = "Enigme - 4 (Résolue)";
            gameBoard.selectEnigme4.style.backgroundColor = "rgba(180,180,180)";
            gameBoard.selectEnigme4.style.boxShadow = "rgba(140,140,140) 0px 5px";
            gameBoard.checkAllAnswers(); // Check all answers in the game.
        }
        if (message == "Le Modele" || message == "LE MODELE" || message == "le modele" || message == "un modele" || message == "Un Modele" || message == "UN MODELE" || message == "modele" || message == "MODELE" || message == "Modele") {
            gameBoard.levelElement.textContent = "Enigme - 6";
            gameBoard.typewriterElement.textContent = "Capable de marcher sur la tête,";
            gameBoard.typewriter2Element.textContent = "Avec ses œufs on ne fait pas d'omelette.";
            gameBoard.typewriter3Element.textContent = "Souvent très laid, toujours avec fierté,";
            gameBoard.typewriter4Element.textContent = "Il gratte le cuir avec assiduité.";
            gameBoard.typewriter5Element.textContent = "Qui est-il ?";
            gameBoard.textElement.textContent = "";
            gameBoard.selectEnigme5.textContent = "Enigme - 5 (Résolue)";
            gameBoard.selectEnigme5.style.backgroundColor = "rgba(180,180,180)";
            gameBoard.selectEnigme5.style.boxShadow = "rgba(140,140,140) 0px 5px";
            gameBoard.checkAllAnswers(); // Check all answers in the game.
        }
        if (message == "Le Pou" || message == "LE POU" || message == "le pou" || message == "un pou" || message == "Un Pou" || message == "UN POU" || message == "Pou" || message == "POU" || message == "pou") {
            gameBoard.levelElement.textContent = "Enigme - 7";
            gameBoard.typewriterElement.textContent = "En équilibre sur sa pointe fine,";
            gameBoard.typewriter2Element.textContent = "C'est une chose enfantine.";
            gameBoard.typewriter3Element.textContent = "Fort utile pour le maçon,";
            gameBoard.typewriter4Element.textContent = "Elle enchaîne les rotations.";
            gameBoard.typewriter5Element.textContent = "Qui est-elle?";
            gameBoard.textElement.textContent = "";
            gameBoard.selectEnigme6.textContent = "Enigme - 6 (Résolue)";
            gameBoard.selectEnigme6.style.backgroundColor = "rgba(180,180,180)";
            gameBoard.selectEnigme6.style.boxShadow = "rgba(140,140,140) 0px 5px";
            gameBoard.checkAllAnswers(); // Check all answers in the game.
        }
        if (message == "La Toupie" || message == "LA TOUPIE" || message == "la toupie" || message == "Une Toupie" || message == "UNE TOUPIE" || message == "une toupie" || message == "toupie" || message == "TOUPIE" || message == "Toupie") {
            gameBoard.levelElement.textContent = "Terminé !";
            gameBoard.typewriterElement.textContent = "Avez-vous répondu";
            gameBoard.typewriter2Element.textContent = "À toutes les énigmes ?";
            gameBoard.typewriter3Element.textContent = "Si oui, alors Félicitations ! 🎉 ";
            gameBoard.typewriter4Element.textContent = "Si non, sélectionnez le level,";
            gameBoard.typewriter5Element.textContent = "qui n'est pas résolu 💪";
            gameBoard.textElement.textContent = "";
            gameBoard.selectEnigme7.textContent = "Enigme - 7 (Résolue)";
            gameBoard.selectEnigme7.style.backgroundColor = "rgba(180,180,180)";
            gameBoard.selectEnigme7.style.boxShadow = "rgba(140,140,140) 0px 5px";
            gameBoard.checkAllAnswers(); // Check all answers in the game.
        }

 }
}

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" advertizr
document.addEventListener('DOMContentLoaded', gameBoard.init);