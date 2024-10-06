const btns = document.querySelectorAll(".btn");
const newGame = document.querySelector(".game-btn");
const winnerTable = document.querySelector(".winnerMsg");
const winCountX = document.querySelector(".winCountX");
const winCountY = document.querySelector(".winCountY");

let currentPlayer = true;
let X = 0;
let O = 0;
const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const disabling = () => {
    for(btn of btns){
        btn.disabled = true
    }
}

const winnerMsg = (winner) =>  {
    winnerTable.innerHTML = `${winner} is won`,
    winnerTable.style.display = "flex";
    if(winner === "X"){
        X = X + 1;
        winCountX.innerText = `X : ${X}`
    }else{
        O = O + 1;
        winCountY.innerText = `${O} : O`
    }
    

    disabling();
}
newGame.addEventListener('click', () => {
    for(btn of btns){
        btn.disabled = false
        btn.innerHTML = "";
    }
    winnerTable.style.display = "none";
}) 

btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        btn.innerHTML = currentPlayer ? "O" : "X";
        currentPlayer = !currentPlayer;
        btn.disabled = true;
        
        for(pattren of winningArray){
            let posVal1 = btns[pattren[0]].innerHTML;
            let posVal2 = btns[pattren[1]].innerHTML;
            let posVal3 = btns[pattren[2]].innerHTML;

            if(posVal1 !== "", posVal2 !== "", posVal3 !== ""){
                if(posVal1 === posVal2 && posVal2 === posVal3){
                    winnerMsg(posVal1);
                }
            }
        }
    })
})