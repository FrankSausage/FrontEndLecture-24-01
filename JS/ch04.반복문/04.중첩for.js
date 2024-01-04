// 중첩 반복문
// 1. 별 다섯개를 다섯줄 그리기
/* 
for (let i = 0; i < 5; i++){
    let star = '';
    for(let y = 0; y < 5; y++){
        star += '*';
    }
    console.log(star);
} 
*/

/* 
// 2. 다이아몬드 그리기 (1사분면)
for (let i = 0; i < 5; i++){
    let star = '';
    for(let y = i+1; y <= 5; y++){
        star += '*';
    }
    console.log(star);
}
*/

// 4사분면
/* 
for (let i = 0; i < 5; i++){
    let star = '';
    for(let y = 0; y <= 4-i; y++){
        star += '*';
    }
    console.log(star);
}
*/

// 2사분면
/* for (let i = 0; i < 5; i++){
    let star = '';
    for(let x = 0; x <= 4-i; x++){
        star += ' ';
    }

    for(let y = 0; y < i+1; y++){
        star += '*';
    }
    console.log(star);
}   
*/

// 3사분면
/*
for (let i = 0; i < 5; i++){
    let star = '';
    for(let x = 0; x <= i; x++){
        star += ' ';
    }

    for(let y = 0; y <= 4-i; y++){
        star += '*';
    }
    console.log(star);
} 
*/

for (let i = 0; i < 5; i++){
    let star ='';

    for (let x = 0; x <= 5-i; x++){
        star += '2';
    }
    
    for (let y = 0; y <= (i*2); y++){
        star += '*';
    }
    console.log(star);
}

for (let i = 6; i > 0; i--){
    let star ='';

    for (let x = i; x <= 6; x++){
        star += '1';
    }
    for (let y = 0; y <= ((i-1)*2); y++){
        star += '*';
    }
    console.log(star);
}
