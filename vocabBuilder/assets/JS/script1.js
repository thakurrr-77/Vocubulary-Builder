'use strict'
const wordList = [
    {
        word: "python",
        hint: "Programming language"
    },
    {
        word: "guitar",
        hint: "A musical instrument"
    },
    {
        word: "aim",
        hint: "A purpose or intention"
    },
    {
        word: "venus",
        hint: "Hottest planet of our solar system"
    },
    {
        word: "gold",
        hint: "A yellow precious metal"
    },
    {
        word: "ebay",
        hint: "Online shopping site"
    },
    {
        word: "golang",
        hint: "Programming language"
    },
    {
        word: "coding",
        hint: "Related to programming"
    },
    {
        word: "matrix",
        hint: "Science fiction movie"
    },
    {
        word: "bugs",
        hint: "Related to programming"
    },
    {
        word: "avatar",
        hint: "Epic science fiction film"
    },
    {
        word: "gif",
        hint: "A file format for image"
    },
    {
        word: "mental",
        hint: "Related to the mind"
    },
    {
        word: "map",
        hint: "Diagram represent of an area"
    },
    {
        word: "island",
        hint: "Land surrounded by water"
    },
    {
        word: "hockey",
        hint: "A famous outdoor game"
    },
    {
        word: "chess",
        hint: "Related to an indoor game"
    },
    {
        word: "viber",
        hint: "A social media app"
    },
    {
        word: "github",
        hint: "Code hosting platform"
    },
    {
        word: "png",
        hint: "A image file format"
    },
    {
        word: "silver",
        hint: "Precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "An electronic device"
    },
    {
        word: "gpu",
        hint: "Computer component"
    },
    {
        word: "java",
        hint: "Programming language"
    },
    {
        word: "google",
        hint: "Famous search engine"
    },
    {
        word: "venice",
        hint: "Famous city of waters"
    },
    {
        word: "excel",
        hint: "Microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "A relational database system"
    },
    {
        word: "nepal",
        hint: "Developing country name"
    },
    {
        word: "flute",
        hint: "A musical instrument"
    },
    {
        word: "crypto",
        hint: "Related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "Unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "Planet of our solar system"
    },
    {
        word: "proxy",
        hint: "Related to server application"
    },
    {
        word: "email",
        hint: "Related to exchanging message"
    },
    {
        word: "html",
        hint: "Markup language for the web"
    },
    {
        word: "air",
        hint: "Related to a gas"
    },
    {
        word: "idea",
        hint: "A thought or suggestion"
    },
    {
        word: "server",
        hint: "Related to computer or system"
    },
    {
        word: "svg",
        hint: "A vector image format"
    },
    {
        word: "jpeg",
        hint: "A image file format"
    },
    {
        word: "search",
        hint: "Act to find something"
    },
    {
        word: "key",
        hint: "Small piece of metal"
    },
    {
        word: "egypt",
        hint: "A country name"
    },
    {
        word: "joker",
        hint: "Psychological thriller film"
    },
    {
        word: "dubai",
        hint: "Developed country name"
    },
    {
        word: "photo",
        hint: "Representation of person or scene"
    },
    {
        word: "nile",
        hint: "Largest river in the world"
    },
    {
        word: "rain",
        hint: "Related to a water"
    },
]


console.log("run");
const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),
    typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if (correctLetters.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if (maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses");
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}
resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());