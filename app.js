let userScore=0;
let compScore=0;
let marqueess=10;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const marquees = document.querySelector("#marques")
const hel=document.querySelector(".hello")

const genComputerChoice = () =>
{
    let option = ["rock","paper","scissors"];
    const randIdX=Math.floor(Math.random()*3);
    return option[randIdX];
}

const drawGames = () =>
{
    msg.innerText="game was draw . play again"
    msg.style.backgroundColor=" #081b31";
}
const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you win your ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
        if(userScore>10)
        {
            marqueess++;
            marquees.innerText=marqueess;
            marquees.innerText=`New Highest Score-${marqueess} !;`
            marquees.style.backgroundColor="red";
        }
    }
    else{
        
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`you lose. ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
    }

}

const playGames = (userChoice) =>
{
const compchoice = genComputerChoice();
if(userChoice === compchoice)
{
    drawGames(); 
}
else{
    let userWin = true;
    if(userChoice === "rock")
    {
        userWin=compchoice ==="paper" ? false :true
    }
    else if(userChoice === "paper")
    {
        userWin=compchoice ==="scissors" ? false : true;
    }
    else{
        userWin=compchoice ==="rock" ? false:true;
    }
    showWinner(userWin,userChoice,compchoice)
}
}

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGames(userChoice);
    });
});