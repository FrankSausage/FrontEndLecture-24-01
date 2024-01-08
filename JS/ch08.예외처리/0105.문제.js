/* 
1. 만 나이를 계산하세요.
   생년, 월, 일을 변수로 설정해서 풀어보세요.*/
console.log("1번")
function getAge(year, month, day){
    let today = new Date().getDate();
    let thisMonth = new Date().getMonth()+1;
    let age = (new Date().getFullYear() - year)
    
    if(thisMonth == month || thisMonth < month){
        if(today < day){
            age--;
            console.log(`만 나이 입니다.`)
            return age;
        }
        console.log(`만 나이가 아닙니다.`)
        return age;
    }  
}
console.log(getAge(1995,1,6));
console.log();
console.log("2번")
console.log("--------------------------------------------------")

/* 
2. 백준도장 31090 참조
다음의 사례에 대해서 Good/Bye를 출력하세요.
2023, 2024, ..., 2040
단, 조건에 맞는를 확인해주는 함수 isDivisible(year)를 만들어서 해결하세요.*/
let y = 2023;

function isDivisible (year){    
    let result = '';
    if((year+1) % (year-2000) == 0){
        result += year + " Good";
    }
    else{
        result += year + " Bye";
    }
    return result;
}

while(y <= 2040){
    console.log(isDivisible(y));
    y++ 
}
console.log();
console.log("3번")
console.log("--------------------------------------------------")

/*  3. 어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를
   구하는 함수를 만들고, [24, 67, 45, 97, 43] 의 결과를 출력하세요. */
let array = [24, 67, 45, 97, 43];

function sumSquare(arr){
    let arrSum1 = 0;
    let arrSum2 = 0;
    for (let i of arr){
        arrSum1 += i;
    }
    for (let y of arr){
        arrSum2 += y*y;
    }
    console.log(`합의 제곱:${arrSum1*arrSum1}, 제곱의 합: ${arrSum2}`)
    return `합의 제곱과 제곱 합의 차이 : ${((arrSum1*arrSum1) - arrSum2)}`
}
console.log(sumSquare(array));
