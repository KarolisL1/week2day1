function d6(max) {
    var roll = Math.random();
    // your code here
    roll =  Math.floor(Math.random() * max) + 1;
    return roll;
}
for ( var i=0; i<100; i++) {  
    var playerRoll = d6(6);
    console.log("The player rolled: " + playerRoll);
}


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function random(){
    var randomNumber = Math.floor(Math.random() * lifesAnswers.length);
    return randomNumber;
}

console.log(lifesAnswers[random()]);


