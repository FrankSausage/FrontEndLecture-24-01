// 주사위를 던져서 합이 21을 초과하면 탈출
let sum = 0;
/* 
while (sum <= 21){
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum += dice;
}
console.log(sum);
*/

// break로 탈출
/* while (true){
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum += dice;
    if (sum > 21){
        break;
    }
}
console.log(sum);
 */
// break는 loop의 한 단계만 벗어날 수 있음
for (let i=0; i < 3; i++){
    for(let y = 0; y < 3; y++){
        if (y == 1){
            console.log('point A');
            break;
        }
        console.log('point B');
    }
    console.log('point C');
}
console.log('point D');