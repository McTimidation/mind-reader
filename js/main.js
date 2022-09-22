const nxtBtn = document.getElementById('mainBtn');

let index = 0;


const mainTxt = document.getElementById("mainTxt");
const mainBtn = document.getElementById("mainBtn");
const subBtn = document.getElementById("subBtn"); 
const subTxt = document.getElementById("subTxt"); 

let symbols = [" ! "," @ "," # "," $ "," % "," ^ "," & "," * "," + "];

let pages = [
    {
    headTxt: "I can read your mind",
    subTxt: '',
    mainBtn: "Go",
    subBtn: ''
    },

    {
    headTxt: "Pick a number from 01-99",
    subTxt: "when you have your number click next",
    mainBtn: "Next",
    subBtn: "Reset"
    },

    {
    headTxt: "Add both digits together to get a new number",
    subTxt: "Ex: 14 is 1 + 4 = 5 click next to proceed",
    mainBtn: "Next",
    subBtn: "Reset"
    },

    {
    headTxt: "Subtract your new number from the original number",
    subTxt: "Ex: 14 - 5 = 9 click next to proceed",
    mainBtn: "Next",
    subBtn: "Reset"
    },

    {
    headTxt: '',
    subTxt: "Find your new number. Note the symbol beside the number",
    mainBtn: "Reveal",
    subBtn: "Reset",
    },

    {
    headTxt: '',
    subTxt: "Your symbol is: ",
    mainBtn: '',
    subBtn: "Reset"
    } 
]

function  numbers() {
        
    let sym = 0;
        for (i = 0; i <= 99; i++) {
            para = document.createElement('p');
            document.getElementById('mainTxt').appendChild(para);
            para.textContent = i + symbols[sym];
            sym++;
            if (sym === 9) {
                sym = 0;
            }
        } 
    }

let answer = symbols[0];   

function display() {
    mainTxt.textContent = pages[index].headTxt;
    mainBtn.textContent = pages[index].mainBtn;
    subBtn.textContent = pages[index].subBtn;
    subTxt.textContent = pages[index].subTxt;
    if (index === 4) {
        numbers();
    } else if (index === 5) {
        mainTxt.textContent = answer;
        subTxt.textContent += answer;
    } 
    let state = index;
    console.log('page' + ++state);
}

function update() {
    index++;
    display();
}

function reset() {
    index = 0;
    display();
}

display();

nxtBtn.addEventListener('click', update);

subBtn.addEventListener('click', reset);
