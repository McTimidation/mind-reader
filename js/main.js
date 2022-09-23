const nxtBtn = document.getElementById('mainBtn');

let index = 0;

let mainTxt = document.getElementById("mainTxt");
const mainBtn = document.getElementById("mainBtn");
const subBtn = document.getElementById("subBtn"); 
const subTxt = document.getElementById("subTxt"); 

let symbols = ["images/gDitsch.JPG","images/jBenson.JPG","images/Jhall.JPG","images/jMorford.JPG","images/jStewart.JPG","images/kDowning.JPG","images/nSuch.JPG","images/sRuh.JPG","images/unicorn.JPG"];

let symbolText = ["Gary!","Jacqueline!","Justin!", "Jonathon!", "Josh!", "Keith!", "Nick!", "Steven!", "Billi!"];
// array1, array2, let current
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// let symbols = [" ! "," @ "," # "," $ "," % "," ^ "," & "," * "," + "];

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

subBtn.style.visibility = "hidden";

function  numbers() {
        
    let sym = 0;
    numList = document.createElement('ul');
    numList.className = "list-group col";
    mainTxt.appendChild(numList);

    symList = document.createElement('ul');
    symList.className = "list-group col";
    mainTxt.appendChild(symList);

        for (i = 0; i <= 99; i++) {
            listItem = document.createElement('li');
            listItem.className = "numberList list-group-item";
            numList.appendChild(listItem);
            listItem.textContent = i;

            symbolItem = document.createElement('li');
            symbolItem.className = "symbolList list-group-item";
            symList.appendChild(symbolItem);

            let img = document.createElement('img');
            symbolItem.appendChild(img);
            img.src = symbols[sym];
            img.width = "30";
            // symbolItem.textContent = symbols[sym];
            sym++;
            if (sym === 9) {
                sym = 0;
            }
        } 
    }

// let answer = symbols[sym];   

function display() {
    mainTxt.textContent = pages[index].headTxt;
    mainBtn.textContent = pages[index].mainBtn;
    subBtn.textContent = pages[index].subBtn;
    subTxt.textContent = pages[index].subTxt;
    if (index === 4) {
        numbers();
    } else if (index === 5) {
        let img = document.createElement('img');
        mainTxt.appendChild(img);
        img.src = symbols[0];
        img.width = "100"
        subTxt.textContent += "Look who it is!";
        mainBtn.style.visibility = "hidden";
    } 
    let state = index;
    console.log('page' + ++state);
}

function update() {
    index++;
    display();
    subBtn.style.visibility = "visible";
}

function reset() {
    index = 0;
    display();
    shuffle(symbols);
    subBtn.style.visibility = "hidden";
    mainBtn.style.visibility = "visible";
}

display();

shuffle(symbols);

nxtBtn.addEventListener('click', update);

subBtn.addEventListener('click', reset);
