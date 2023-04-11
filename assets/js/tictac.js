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
                debugger;
                boardState[x][y] = xFirst[i];
                console.log(boardState);
                //debugger;
                i++
                console.log(i);
                formatter(x,y,this);
                checker();
                return [x,y];
            }
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
        console.log("FUck");
    }
    else if(boardState[1][0] == boardState[1][1] && boardState[1][1]==boardState[1][2] ){
        console.log("FUck");
    }else if(boardState[2][0] == boardState[2][1] && boardState[2][1]==boardState[2][2] ){
        console.log("FUck");
    }
    else if(boardState[0][0] == boardState[1][0] && boardState[1][0]==boardState[2][0] ){
        console.log("FUck");
    }
    else if(boardState[0][1] == boardState[1][1] && boardState[1][1]==boardState[2][1] ){
        console.log("FUck");
    }
    else if(boardState[0][2] == boardState[1][2] && boardState[1][2]==boardState[2][2] ){
        console.log("FUck");
    }
    else if(boardState[0][0] == boardState[1][1] && boardState[1][1]==boardState[2][2] ){
        console.log("FUck");
    }
    else if(boardState[0][2] == boardState[1][1] && boardState[1][1]==boardState[2][0] ){
        console.log("FUck");
    }
    
}

//Create function to select first player


xPlayerA.addEventListener("click",firstPlayerSelector);
xPlayerB.addEventListener("click",firstPlayerSelector);
function firstPlayerSelector(){ 
    //debugger;
    if(this.id === "xPlayerA"){
        this.style.backgroundColor = "red";
        this.textContent = "X";
        xPlayerB.disabled = true;
        xPlayerB.style.backgroundColor = "lightgray";
        gameMessageA.textContent = namePlayerA.value + " Is First";

      
    }else if(this.id === "xPlayerB"){
        this.style.backgroundColor = "red";
        this.textContent = "X";
        xPlayerA.disabled = true;
        xPlayerA.style.backgroundColor = "lightgray";
        gameMessageB.textContent = namePlayerB.value + " Is First";
    }

    
}

function enterPlayerName(){
    if(namePlayerA.value === "" && namePlayerB.value === ""){
        xPlayerA.disabled = true;
        gameMessageA.textContent = "Player A, Enter your Name";
        xPlayerA.style.backgroundColor = "#7bda84";
        xPlayerB.disabled = true;
        gameMessageB.textContent = "Player B, Enter your Name";
        xPlayerB.style.backgroundColor = "#7bda84";
    }
    else if(namePlayerB.value === ""){
        xPlayerB.disabled = true;
        gameMessageB.textContent = "Player B, Enter your Name";
        xPlayerB.style.backgroundColor = "#7bda84";
    }
}
enterPlayerName();