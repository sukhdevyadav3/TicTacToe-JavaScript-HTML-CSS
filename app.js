let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const u=document.querySelector("#user-score");
const com=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
//Draw Game
const drawGame=()=>{
console.log("Game Draw");
msg.innerText="Game Draw!"
msg.style.backgroundColor="#081b31"
}

//showWinner
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin)
{
    console.log("You Win");
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="Green";
    ++userScore;
    u.innerText=userScore;
}
else{
    console.log("You Lose");
    msg.innerText= `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="Red";
    ++comScore;
    com.innerText=comScore;
}
}
//Play Game
const playGame=(userChoice)=>
{
   
    console.log("User Choice=",userChoice);
    const compChoice=genComputerChoice();
    console.log("computer Choice=",compChoice);

    if(userChoice === compChoice)
    {
        //draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
           userWin=compChoice==="scissors"? false:true;
        }
        else
        {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
 choice.addEventListener("click",()=>{
 const userChoice=choice.getAttribute("id");
 playGame(userChoice);
});
});
    
