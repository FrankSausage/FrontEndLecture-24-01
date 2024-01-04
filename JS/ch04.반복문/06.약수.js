// 양의 정수 구하기
// num = 12
let plus = [];

for (let i = 1; i <= 12; i++){
    if(12 % i == 0){
        plus.push(i);
    }
}
console.log(plus); 

// 음의 정수 구하기
let minus = [];

for (let i = 0; i >= -12; i--){
    if(12 % i == 0){
        minus.push(i);
    }
}
console.log(minus);

// 두 수의 공약수 구하기
// num1 = 24, num2 = 60;
let num1 = 24;
let num2 = 60;
let commonDiv = [];

for (let i = 0; i <= Math.min(num1, num2); i++){
    if(num1 % i == 0 && num2 % i == 0){
        commonDiv.push(i);
    }
}
console.log(`${num1}, ${num2}의 공약수는 ${commonDiv}`);
