// 1. 완전수(Perfect number)
// 자기 자신을 제외한 약수의 합과 자기 자신이 같은 수 
// 6 = 1 + 2 + 3
// 28 = 1 + 2 + 4 + 7 + 14
// 10000 이하의 수 중에서 완전수 4개 찾기
let sum = 0;
let pn = [];

for (let i = 2; i <= 10000; i++){ // 횟수 체크
    for (let y = 1; y < i; y++){ //약수 체크
        if (i % y == 0){ // 약수 확인
            sum += y;
        }
    }
    if(sum == i){ // 완전수
        pn.push(sum);  
    }
    sum = 0;
}
console.log(pn, pn.length);



// 2. a + b + c = 1000 을 만족하는 피타고라스 수 (단, a < b < c)
// a * a + b * b = c * c
let flag = false;

for(let a = 1; a < 1000; a++){  
    if(flag == true){
        console.log("종료");
        break;
    }
    
    for(let b = 1; b < 1000; b++){
        for(let c = 1; c < 1000; c++){
            let re = a+b+c;
            
            if(re == 1000){
                if((a*a)+(b*b) == (c*c) && a<b){
                    console.log(`${a},${b},${c} : ${re}`)
                    flag = true;
                }
            }
        }
    }
}