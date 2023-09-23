const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passOne = document.getElementById("pass-three");
let passTwo = document.getElementById("pass-two");
// console.log(passOne)
let passwordOne = "";
let passwordTwo = "";
function createPassword(){
    let random = "";
    for(let i =0 ; i<16; i++){
        let index = Math.floor(Math.random() * characters.length)
        random += characters[index]
    }
    return random;
}

function generatePassword(){
    passwordOne = createPassword();
    passwordTwo = createPassword();
    
    passOne.textContent = passwordOne;
    passTwo.textContent = passwordTwo;
    // console.log(passwordOne)
    // console.log(passwordTwo)
    
}