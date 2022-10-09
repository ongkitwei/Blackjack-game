/*let firstCard = 5;
let secondCard = 7;

const sum = firstCard + secondCard ;


if (sum > 21)
{
    console.log ("BURST! 😓") ; 
}



else if (sum === 21)
{
    console.log("congrats.. you won! 😁");
}



else if ( sum < 21)
{
    console.log("Do you wanna draw a new card? 😠");
} */



/*let age = 100;

if (age < 100)
{
    console.log("not elegible");
}


else if (age === 100)
{
    console.log("here is your brithday card from the king")
}



else
{
    console.log("not elegible, you have already gotten one")
}*/


 
let firstCard = 10;
let secondCard = 7;
let card = 7;


let sum = firstCard + secondCard ;


let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el") ;
let cardsEl = document.querySelector("#cards-el") ;

//if use document.querySelector must be more specific
//eg: document.queySelector("#sum-el")


//let hasBlackJack = false;     //boolean useful to check for state
//let isAlive = true;


//console.log(hasBlackJack) ;
//console.log(isAlive) ;

//console.log(4===3) ;


function startGame()
{
        if (sum <= 20)
        {
            message = "do you wanna draw a new card?"
            console.log("still in the game");
        }




        else if (sum === 21)
        {
            message ="wohoo! you got a blackjack"
            //hasBlackJack = true;
            console.log("nice card");
        }




        else
        {
            message="you are out of the game"
            //isAlive = false;
            console.log("out of the game");
        }


        messageEl.textContent = message ;
        sumEl.textContent = "sum: " + sum ;   //or can do it this way `sum: ${sum}`
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard ;
    }




    function newCard()
    {
        console.log("drawing a new card from the deck")
        sum = sum + card ;
        sumEl.textContent = "sum: " + sum ;
        console.log("new sum: " + sum) ;
        startGame();
    }
