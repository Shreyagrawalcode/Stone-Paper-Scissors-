let userscore = 0;
let computerscore = 0;
const button = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const computerscorepara= document.querySelector("#computerscore");

const showWinner = (userWin , compchoice , choiceId) => {
    if (userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = " You Win";
    } else {
        computerscore++;
        computerscorepara.innerText = computerscore;
        msg.innerText = " You Lost";
    }
};

const getcompchoice = () => {
    const options= ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game Draw";
}

const playgame = (choiceId) => {
    console.log ("score is " , choiceId );
    const compchoice = getcompchoice();
    console.log ("compchoice" ,compchoice);


    if (choiceId === compchoice){
        drawGame();
    }
    else {
        let userWin = true;
        if (choiceId === "rock"){
            userWin = compchoice === "paper" ? false : true ;
            // console.log("win");
        }
        else if (choiceId === "paper"){
            userWin = compchoice === "scissor" ? false : true ;
            // console.log("win");
        }
        // else if(choiceId === "scissor"){
        else{
            userWin = compchoice === "rock" ? false : true ;
            // console.log("win");
        }
        showWinner(userWin);

        
    }
};

button.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId = choice.getAttribute("id");
        playgame(choiceId);
    });
});

