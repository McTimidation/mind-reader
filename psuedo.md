# Mind Reader

The mind reader will cycle through 6 "pages" of different text to "read the mind" of the user. 

Each page will consist of large font at the top explaining the game and giving instructions.

There will be a button on the first page to begin the game, then once the game moves to the 2nd page, a refresh button will appear.

The game will have a list of 9 symbols that it will assign to a range of integers from 0-99.

There will be an answer symbol that will be assigned to 0 and all integers that are a multiple of 9.



### Variables, Objects, and Arrays

Each page (6 total) will be an object, and the object pages will be stored in an array.

page1 = {
    headText: "I can read your mind",
    subText: null,
};

page2 = {
    headText: "Pick a number from 01-99",
    subText: "when you have your number click next"
};

page3 = {
    headText: "Add both digits together to get a new number",
    subText: "Ex: 14 is 1 + 4 = 5 
            click next to proceed"
};

page4 = {
    headText: "Subtract your new number from the original number"
    subText: "Ex: 14 - 5 = 9
            click next to proceed"
};

page5 = {
    headText: list number array matched up to symbol array
    subText: "Find your new number."
            Note the symbol beside the number"
};

page6 = {
    headText: Answer Symbol
    subText: "Your symbol is: Answer Symbol"
};

pages = [page1, page2, page3, page4, page5, page6];

goBtn = button to start game, only on page1

nextBtn = button to transition to next slide, on pages 2 - 4

resetBtn = button to reset game, on pages 2 - 6

revealBtn = button to reveal the answer on page5

symbols = [symbol1, symbol2, symbol4, symbol5, symbol6, symbol7, symbol8, symbol9] (Each symbol will be an image or icon, so the array may need to be an object, or the symbols themselves may need to be objects.)

numbers = [0-99]




### Functionality

init() {
    display(pages[0]);
    resetBtn.style = hidden; - <button class="btn" id="subBtn"></button>
    


}

