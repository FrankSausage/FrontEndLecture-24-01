let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let dice3 = Math.floor(Math.random() * 6) + 1;

console.log(dice1, dice2, dice3);

if(dice1 === dice2 && dice1 == dice3){
    console.log((dice1 * 1000)+ (dice2 * 1000) + (dice3 * 1000) + 10000);
}
else if(dice1 === dice2){
    console.log((dice1 * 100)+ (dice2 * 100) + 1000);
}
else if(dice2 === dice3){
    console.log((dice2 * 100)+ (dice3 * 100) + 1000);
}
else if(dice1 === dice3){
    console.log((dice1 * 100)+ (dice3 * 100) + 1000);
}
else{
    console.log(Math.max(dice1,dice2,dice3) * 100);
    console.log("예외");
}
