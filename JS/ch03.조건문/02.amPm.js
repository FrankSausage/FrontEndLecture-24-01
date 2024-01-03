let today = new Date();
console.log(today);                 // 그리니치 표준시 형태로 출력

let hour = today.getHours();
console.log(hour);                  // Timzone 적용된 현재 시각

console.log(today.getMonth());      // +1 을 해주어야 현재 월의 값이 제대로 나옴

if (hour < 12){
    console.log(`오전 ${hour} 시 입니다`);
}
if (hour >= 12){
    console.log(`오후 ${hour - 12} 시 입니다`);
}

//
if (hour < 12){
    console.log(`오전 ${hour} 시 입니다`);
}
else{
    console.log(`오후 ${hour - 12} 시 입니다`);
}