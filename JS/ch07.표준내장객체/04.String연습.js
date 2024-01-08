// 연습문제
// 1. 1에서 1000사이에 0은 몇 번, 1은 몇 번, ... 9는 몇 번 사용되었는가?
// let numString = '';

// for (let i = 1; i <= 1000; i++){
//     numString += i;
// }
// // 1이 몇 번 사용되었나?
// console.log(numString.replace(/[^1]/g, '').length);

// for (let i= 0; i<=9; i++){
//     let pattern = new RegExp('[^'+i+']', 'g');
//     console.log(pattern);
//     count = numString.replace(pattern, '').length;
//     console.log(`${i}: ${count}`);
// }

// //cout 배열을 만들어 일일이 체크
// let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// for (let i = 0; i < numString.length; i++){
//     let num = Number(numString[i]);
//     countArr[num]++;
// }
// console.log(countArr);

// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
function digitalClock(){
    let timeSum = 0;
    for (let i = 0; i <= 23; i++){
        for(let y = 0; y <=59; y++){
            if(Math.floor(i / 10) == 3 || i % 10 == 3 || Math.floor(y / 10) == 3 || y % 10 == 3){
                timeSum += 60;
            }
        }
    }
    return timeSum;
}
console.log(digitalClock());

//3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일 때
// 가장 큰 plaindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(num1, num2){
    let value = num1*num2
    let reversStr = value.toString().split('').reverse().join('');
    return value == reversStr;
}

function resultPalindrom(){
    let palSum = 100;
    let palNum1 = 100;
    let palNum2 = 100;
    
    for(let i = 100; i <= 999; i++){
        for(let y = 100; y <= 999; y++){
            if(isPalindrome(i,y) == true && (i*y) >= palSum){
                palSum = i*y; palNum1 = i; palNum2 = y;
            }
        }
    }
    return console.log(`${palNum1} * ${palNum2} : ${palSum}`);
}
resultPalindrom();

// 4. C:/Users/human-18/Desktop/WebProject/JS/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요.
let locationText = 'C:/Users/human-18/Desktop/WebProject/JS/ch07.표준내장객체/04.String연습.js';
console.log(locationText.split("체/").pop());
console.log(locationText.substring(locationText.length-14, locationText.length));

