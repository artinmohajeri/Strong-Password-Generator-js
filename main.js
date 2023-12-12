// let $ = document.querySelector.bind(document)
const passwordInput = document.querySelector("input[id='pass']");
const copyIcon = document.querySelector("i");
const rangeInput = document.querySelector("input[type='range']");
const rangeNum = document.querySelector(".slider-number");
const generateButton = document.querySelector("button");
const status = document.querySelector(".status");

const charactersList = [
    // English capital letters
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

    // English small letters
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

    // Special characters on the keyboard
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '//',
    // Numbers:
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];

let defaultPass = "";
for (let i = 0; i < 10; i++) {
    let defaultRandomNum = Math.round(Math.random() * 99);
    let defaultChr = charactersList[defaultRandomNum];
    defaultPass += defaultChr;
}
passwordInput.value = defaultPass;

rangeInput.addEventListener("input", function () {
    rangeNum.textContent = rangeInput.value;
    value = parseInt(rangeInput.value)
    console.log(value)
    if (value<= 10) {
        status.textContent = "normal";
    }else if(10 < value && value <= 14){
        status.textContent = "strong";
    }else if (value >= 15 && value <= 18){
        status.textContent = "verry strong!";
    }else{
        status.textContent = "unbeatable!!!";
    }
});

generateButton.addEventListener("click", function () {
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy")
    copyIcon.style.cursor = "pointer"
    let password = "";
    for (let i = 0; i < rangeNum.textContent; i++) {
        let randomNum = Math.round(Math.random() * 99);
        let chr = charactersList[randomNum];
        password += chr
    };
    passwordInput.value = password
});

copyIcon.addEventListener("click", function () {
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt")
    copyIcon.style.cursor = "auto"
    navigator.clipboard.writeText(passwordInput.value)
})

