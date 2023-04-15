//Declare All Buttons (9)
const T1 = document.getElementById("T1");
const T2 = document.getElementById("T2");
const T3 = document.getElementById("T3");
const M1 = document.getElementById("M1");
const M2 = document.getElementById("M2");
const M3 = document.getElementById("M3");
const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");

const xPlayerA = document.getElementById("xPlayerA");
const xPlayerB = document.getElementById("xPlayerB");

const namePlayerA = document.getElementById("nameA");
const namePlayerB = document.getElementById("nameB");

const gameMessageA = document.getElementById("gamemessageA");
const gameMessageB = document.getElementById("gamemessageB");
const board = document.querySelector(".board");
const tictacbuttons = document.querySelectorAll(".button");

//Initial State of the Board
let boardState = [
    ["T1","T2","T3"],
    ["M1","M2","M3"],
    ["B1","B2","B3"],
]
let playCount = 0;



//Create A Function that will change Color and Text of a Button

let i = 0;
function choice(decision){
    const xFirst = ["X","O","X","O","X","O","X","O","X"];
   // const oFirst = ["O","X","O","X","O","X","O","X","O"];
    for (let x = 0; x < boardState.length; x++){
        for(let y = 0; y < boardState[1].length; y++){
            if(boardState[x][y] == this.id){
                boardState[x][y] = xFirst[i];
                let selected = xFirst[i];
                console.log(boardState);
                //debugger;
                i++
                console.log(i);
                formatter(x,y,this);
                nextTurnMessage(selected);
                checker();
                console.log(selected);
                return [x,y];
            }
        }  
    } 
}

function nextTurnMessage(selected){
    console.log(selected);
    let PlayerA = namePlayerA.value;
    let PlayerB = namePlayerB.value;
    if(xPlayerA.textContent === "O"){
        switch(selected){
            case "O":
                gameMessageB.textContent = `${PlayerB} its your turn!`;
                gameMessageA.textContent = ``;
                break;  
            case "X":
                gameMessageA.textContent = `${PlayerA} its your turn!`;
                gameMessageB.textContent = ``;
                break;    
        } 

    }else {
        switch(selected){
            case "O":
                gameMessageA.textContent = `${PlayerA} its your turn!`;
                gameMessageB.textContent = ``;
                break;  
            case "X":
                gameMessageB.textContent = `${PlayerB} its your turn!`;
                gameMessageA.textContent = ``;
                break;    
        } 
    }
}


//Function to Format the Buttons and insert textcontent
let formatter = (xAxis,yAxis,that)=> {
    if(boardState[xAxis][yAxis] == "X"){
        that.style.backgroundColor = "red";
        that.textContent = boardState[xAxis][yAxis];
    }else if(boardState[xAxis][yAxis] == "O"){
        that.style.backgroundColor = "blue";
        that.textContent = boardState[xAxis][yAxis];
    }
}

//Event Listeners for Each Button
T1.addEventListener("click",choice)
T2.addEventListener("click",choice)
T3.addEventListener("click",choice)
M1.addEventListener("click",choice)
M2.addEventListener("click",choice)
M3.addEventListener("click",choice)
B1.addEventListener("click",choice)
B2.addEventListener("click",choice)
B3.addEventListener("click",choice)

function checker(){
    if(boardState[0][0] == boardState[0][1] && boardState[0][1]==boardState[0][2] ){
        winnerMessage(boardState[0][0]);
    }
    else if(boardState[1][0] == boardState[1][1] && boardState[1][1]==boardState[1][2] ){
        winnerMessage(boardState[1][0]);
    }else if(boardState[2][0] == boardState[2][1] && boardState[2][1]==boardState[2][2] ){
        winnerMessage(boardState[2][0]);
    }
    else if(boardState[0][0] == boardState[1][0] && boardState[1][0]==boardState[2][0] ){
        winnerMessage(boardState[0][0]);
    }
    else if(boardState[0][1] == boardState[1][1] && boardState[1][1]==boardState[2][1] ){
        winnerMessage(boardState[0][1]);
    }
    else if(boardState[0][2] == boardState[1][2] && boardState[1][2]==boardState[2][2] ){
        winnerMessage(boardState[0][2]);
    }
    else if(boardState[0][0] == boardState[1][1] && boardState[1][1]==boardState[2][2] ){
        winnerMessage(boardState[0][0]);
    }
    else if(boardState[0][2] == boardState[1][1] && boardState[1][1]==boardState[2][0] ){
        winnerMessage(boardState[0][2]);
    }
    
}

//Create function to select first player
xPlayerA.addEventListener("click",firstPlayerSelector);
xPlayerB.addEventListener("click",firstPlayerSelector);
function firstPlayerSelector(){ 
    if(this.id === "xPlayerA"){
        this.style.backgroundColor = "red";
        this.textContent = "X";
        xPlayerB.disabled = true;
        xPlayerB.style.backgroundColor = "blue";
        xPlayerB.textContent = "O";
        gameMessageA.textContent = namePlayerA.value + " is first as `X`";
        gameMessageB.textContent = namePlayerB.value + " is second as `O`";// May issue ito if button sa baba is pressed
        namePlayerA.disabled = true;
        namePlayerB.disabled = true;

      
    }else if(this.id === "xPlayerB"){
        this.style.backgroundColor = "red";
        this.textContent = "X";
        xPlayerA.disabled = true;
        xPlayerA.style.backgroundColor = "blue";
        xPlayerA.textContent = "O";
        gameMessageB.textContent = namePlayerA.value + " is second as `O`";
        gameMessageA.textContent = namePlayerB.value + " is first as `X`";
        namePlayerA.disabled = true;
        namePlayerB.disabled = true;
    }
    hideTictac("initial");

    
}

function enterPlayerName(){
    switch(true){
        case (namePlayerA.value === "" || namePlayerB.value === ""):
            xPlayerA.disabled = true;
            xPlayerB.disabled = true;
            gameMessageA.textContent = "Player A, Enter your Name";
            gameMessageB.textContent = "Player B, Enter your Name";
            xPlayerA.style.backgroundColor = "black";
            xPlayerB.style.backgroundColor = "black";
            break;
        case (namePlayerA.value!== "" && namePlayerB.value!== ""):
            xPlayerA.disabled = false;
            gameMessageA.textContent = `Hi!! ${namePlayerA.value}`;
            xPlayerA.style.backgroundColor = "green";
            xPlayerB.disabled = false;
            gameMessageB.textContent = `Hi!! ${namePlayerB.value}`;
            xPlayerB.style.backgroundColor = "green"; 
            break;
 
    }
    namePlayerA.addEventListener("change",enterPlayerName);
    namePlayerB.addEventListener("change",enterPlayerName);
    hideTictac("none");

}

//Create function to hide the TicTacToe
function hideTictac(status){
    board.style.display = status;
}

// Create function to Notify Player winner
function winnerMessage(winner){
    if(xPlayerA.textContent === winner){
        //debugger;
        gameMessageA.textContent = `${namePlayerA.value} wins!🥳`;
        gameMessageB.textContent = `${namePlayerB.value} lose!🙃`;
    }else if(xPlayerB.textContent === winner){
        gameMessageA.textContent = `${namePlayerA.value} lose!🙃`;
        gameMessageB.textContent = `${namePlayerB.value} wins!🥳`;
    }
    disableButtons();
}

//Create function to disable tictac buttons
function disableButtons(){
    for(let i = 0; i < tictacbuttons.length; i++){
        tictacbuttons[i].disabled = true;
    }
}

// Create function that 

// function localStorageUtilization(){
//     const storeToDo = JSON.stringify(itemsToDo);
//     localStorage.setItem("itemsToDo",storeToDo);
// }

// function storeToDo(labelInput){
//     const toDoJSON = {
//         id:itemsToDo.length + 1,
//         value: labelInput
//     };
//     itemsToDo.push(toDoJSON);
//     localStorageUtilization();
// }



enterPlayerName();