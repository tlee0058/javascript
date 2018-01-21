/* 
Random Chance
Let's play the slots!

Make a function that takes a number of quarters (1 quarter = 1 game).

There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).

While the user still has quarters, use Math.random to determine if they won.

If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).

Return 0 if all the quarters were wasted.

Bonus (Only If You Have Time):

Let the user pass the number they are willing to leave
(ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins)*/

function playSlots(numOfQuarters){
    while(numOfQuarters > 0){
        var win = Math.floor(Math.random()*100);
        if(win == 1){
            var amountWon = Math.random()*50 + 50
            return amountWon + numOfQuarters
        }
    }
    return 0
}

function playSlotsBonus(numOfQuarters, goal){
    while(numOfQuarters > 0){
        var win = Math.floor(Math.random()*100);
        if(win == 1){
            var amountWon = Math.floor(Math.random()*50 + 50)
            if(amountWon + numOfQuarters > goal){
                return amountWon + numOfQuarters 
            }else{
                numOfQuarters += amountWon;
                console.log("won:", numOfQuarters)
            }
        }
    }
    console.log("lossed")
    return 0
}
playSlotsBonus(100, 200);