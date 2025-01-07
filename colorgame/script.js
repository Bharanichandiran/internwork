const colors=[
   " rgb(255, 0, 0)",
   " rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 165, 0)",
    "rgb(128, 0, 128)",
    "rgb(0, 255, 255)",
    
]
let winningcolor="rgb(255, 0, 0)";
const squares=document.querySelectorAll(".square");
let displaycolor=document.getElementById("displayColor");
for(let i=0; i<squares.length; i++)
    {
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        
displaycolor.innerText=winningcolor;
        if(this.style.backgroundColor===winningcolor){
            alert("You won");
        }
        else{
            alert("You lost");
        }
    })
}
