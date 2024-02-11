function game(difficulty)
{

    let min, max, tries;
    switch(difficulty)
    {
        case "easy":
            min=0;
            max=15;
            tries=10;
            break;
        case "moderate":
            min=0;
            max=30;
            tries=5;
            break;
        case "hard":
            min=0;
            max=50;
            tries=3;
            break;
        default:
            console.error('Invalid difficulty level');
        return;  
    }

 const target=Math.floor(Math.random()*(max-min));
 for(let i=0;i<tries;i++)
 {
    const guess=parseInt(prompt("Guess the number. It's between " +min+" and "+ max));
    if (guess===target)
    {
        alert("Congrats! You've won");
        return;
    }
    else{
        alert("Wrong answer. Remaining tries: "+(tries-(i+1)));
    }
 }
 alert("Sorry, no more tries remaining. The correct answer was "+target);


}

const diff=document.querySelector("#difflist");
diff.addEventListener('click', function(event)
{
    if(event.target.id==="easy" || event.target.id==="mod" || event.target.id==="hard")
    {
        const difficulty=event.target.getAttribute("value");
        game(difficulty)
    }

}


)




