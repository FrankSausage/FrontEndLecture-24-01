// 완전수 구하기

// 자기 자신을 제외한 약수의 합 구하는 함수
function sumOfDivisors(num) {
    let divSum = 0;
    for(let i = 1; i < num; i++){
        if(num % i == 0){
            divSum += i;
        }
    }
    return divSum;
}

// console.log(sumOfDivisors(12));


// 2에서 부터 10000 사이의 완전수 구하기
let sumArry = [];

for (let i = 2; i <= 10000; i++){ // 횟수 체크
    if(sumOfDivisors(i) == i){ // 완전수
        sumArry.push(i);  
    }
}
console.log(sumArry);