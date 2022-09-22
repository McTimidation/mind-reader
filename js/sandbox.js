const nxtBtn = document.getElementById('mainBtn');

let index = 0;

const state = index;

const mainTxt = document.getElementById("mainTxt");
const mainBtn = document.getElementById("mainBtn");
const subBtn = document.getElementById("subBtn"); 
const subTxt = document.getElementById("subTxt"); 



 let symbols = [" ! "," @ "," # "," $ "," % "," ^ "," & "," * "," + "];

//  let range = [];

//  function createP() {
//    para = document.createElement('p');
//     document.getElementById('mainTxt').appendChild(para);
//     para.textContent = range[0];
// }

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
    
    // function lineUp(Array) {
    //     for (i = 1; i <= Array.length; i++) {
    //         let cardtext = document.createElement('p');
    //         document.appendChild
    //     }

    // }


function update() {
    index++;
    display();
}

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
}

function reset() {
    index = 0;
    display();
}

// let getTxt = document.getElementsByClassName('pageTxt').textContent;

display();

nxtBtn.addEventListener('click', update);

subBtn.addEventListener('click', reset);



