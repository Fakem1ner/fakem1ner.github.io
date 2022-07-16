count = document.querySelector('#count');
useletters = document.querySelector('#useletters');
usecapitalletters = document.querySelector('#usecapitalletters');
usenumbers = document.querySelector('#usenumbers');
usespecialsymbols = document.querySelector('#usespecialsymbols');
button = document.querySelector('#run')

let letters = [
    'a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'g', 
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y',
              'z'
]
let capitalLetters = [
    'A', 'B', 'C', 'D', 'E', 
    'F', 'G', 'H', 'I', 'G', 
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y',
              'Z'
]
let numbers = [
    '0', '1', '2', '3', '4', 
    '5', '6', '7', '8', '9'
]
let specialSymbols = [
    '!', '@', '#', '$', '%',
    '^', '&', '*', "(", ")", 
    "-", "+", "_", "=", "<", 
    ">", "/", "\\", '[', ']', 
            '{', '}'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

button.addEventListener('click', function() {
    using = [];
    if(useletters.checked) {
        using = using.concat(letters);
    }
    if(usecapitalletters.checked) {
        using = using.concat(capitalLetters);
    }
    if(usenumbers.checked) {
        using = using.concat(numbers);
    }
    if(usespecialsymbols.checked) {
        using = using.concat(specialSymbols);
    }

    let password;
    
    for (let i = 0; i < count.value; i++) {
        password = `${password}${using[getRandomInt(using.length)]}`
    }

    password = password.split('undefined').join('')
    document.querySelector('#result').innerHTML = password;
});