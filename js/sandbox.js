const nxtBtn = document.getElementById('mainBtn');

let index = 0;

const mainTxt = document.getElementById("mainTxt");
const mainBtn = document.getElementById("mainBtn");
const subBtn = document.getElementById("subBtn"); 
const subTxt = document.getElementById("subTxt"); 



function update() {
    index++;
    display();
}

function display() {
    mainTxt.textContent = pages[index].headTxt;
    mainBtn.textContent = pages[index].mainBtn;
    subBtn.textContent = pages[index].subBtn;
    subTxt.textContent = pages[index].subTxt;
}

let getTxt = document.getElementsByClassName('pageTxt').textContent;

display();

nxtBtn.addEventListener('click', update);

