// 중첩 조건문(Nested If)
// 윤년
// 4로 나누어지면 윤년, 100으로 나누어지면 평년, 400으로 나누어지면 윤년

let year = 2100;

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log(`${year}년은 윤년`);        
        }
        else{
            console.log(`${year}년은 평년`);
        }
    }
    else{
        console.log(`${year}년은 윤년`);
    }
}
else{
    console.log(`${year}년은 평년`);
}

if (year % 4 == 0 && year % 400 == 0 || year % 100 != 0)
{
    console.log(`${year}년은 윤년`);
}
else{
    console.log(`${year}년은 평년`);
}
