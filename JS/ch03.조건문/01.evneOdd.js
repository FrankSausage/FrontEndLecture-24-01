// 홀수 / 짝수
let num = Math.ceil(Math.random() * 100);       // 1 ~ 100 사이의 정수값

if(num % 2 == 0){
    console.log(`${num} 은/는 짝수`);
}
if(num % 2 == 1){
    console.log(`${num} 은/는 홀수`);
}

if(num % 2 == 0){
    console.log(`${num} 은/는 짝수`);
}
else{
    console.log(`${num} 은/는 홀수`);
}

// 조건문 안에 실행문이 한개만 있는 경우에는 { } 생략 가능
num = Math.ceil(Math.random() * 100);
if(num % 2 == 0)
    console.log(`${num} 은/는 짝수`);
else
    console.log(`${num} 은/는 홀수`);

// 3항 연산자
num = Math.ceil(Math.random() * 100);
let result = (num % 2 == 0) ? '짝수' : '홀수';          // ? = 조건 / 참값 : 거짓값
console.log(`${num} 은/는 ${result} 입니다`);

