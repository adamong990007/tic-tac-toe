// //Declare All Buttons (9)
// const T1 = document.getElementById("T1");
// const T2 = document.getElementById("T2");
// const T3 = document.getElementById("T3");
// const M1 = document.getElementById("M1");
// const M2 = document.getElementById("M2");
// const M3 = document.getElementById("M3");
// const B1 = document.getElementById("B1");
// const B2 = document.getElementById("B2");
// const B3 = document.getElementById("B3");

// //Make 2 Orders of the Game (O First, X First)
// //Note will create reverse of this
// const oFirst = [
//     {text: "O", color: "blue"},
//     {text: "X", color: "red"},
//     {text: "O", color: "blue"},
//     {text: "X", color: "red"},
//     {text: "O", color: "blue"},
//     {text: "X", color: "red"},
//     {text: "O", color: "blue"},
//     {text: "X", color: "red"},
//     {text: "O", color: "blue"},
// ];
// console.log(oFirst[1].text);//returns X


// //Create A Function that will change Color and Text of a Button

// let i = 0;
// function choice(text,color){
   
//     this.style.backgroundColor = oFirst[i].color;
//     this.textContent = oFirst[i].text;
//     checker();
//     console.log("hello");
//     i++
// }

// //Event Listeners for Each Button
// T1.addEventListener("click",choice)
// T2.addEventListener("click",choice)
// T3.addEventListener("click",choice)
// M1.addEventListener("click",choice)
// M2.addEventListener("click",choice)
// M3.addEventListener("click",choice)
// B1.addEventListener("click",choice)
// B2.addEventListener("click",choice)
// B3.addEventListener("click",choice)
    

// function checker(){
//     const t1 = T1.textContent;
//     const t2 = T2.textContent;
//     const t3 = T3.textContent;
//     const m1 = M1.textContent;
//     const m2 = M2.textContent;
//     const m3 = M3.textContent;
//     const b1 = B1.textContent;
//     const b2 = B2.textContent;
//     const b3 = B3.textContent;

//     if(t1 == "X" && t2 == "X" && t3 == "X"){
//         console.log("fuckyea")
//     }
//     else if(m1 == "X" && m2 == "X" && m3 == "X"){
//         console.log("fuckyea")
//     }
//     else if(b1 == "X" && b2 == "X" && b3 == "X"){
//         console.log("fuckyea")
//     }
//     else if(t1 == "X" && m1 == "X" && b1 == "X"){
//         console.log("fuckyea")
//     }
//     else if(t2 == "X" && m2 == "X" && b2 == "X"){
//         console.log("fuckyea")
//     }
//     else if(t3 == "X" && m3 == "X" && b3 == "X"){
//         console.log("fuckyea")
//     }
//     else if(t1 == "X" && m2 == "X" && b3 == "X"){
//         console.log("fuckyea")
//     }
//     else if(t3 == "X" && m2 == "X" && b1 == "X"){
//         console.log("fuckyea")
//     }
// }