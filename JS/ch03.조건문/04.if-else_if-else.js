// ~ 90 : A
// 89 ~ 80 : B
// 79 ~ 70 : C
// 69 ~ 60 : D
// 59 ~ 50 : E
// 49 ~  : F

/* let score = Math.ceil((Math.random() * 60)) + 40        //41 ~ 100 사이의 정수
let grade = '';

if(score >= 90)
    grade = "A";
else if(score >= 80)
    grade = "B";
else if(score >= 70)
    grade = "C";
else if(score >= 60)
    grade = "D";
else if(score >= 50)
    grade = "E";
else
    grade = "F";

console.log("점수: " + score + " 학점: " + grade); */


//FizzBuzz
let num = Math.ceil((Math.random() * 60)) + 40
let chr = "";

if (num % 5 == 0 && num % 7 == 0)
    chr = "FizzBuzz";
else if(num % 5 == 0)
    chr = "Fizz";
else if (num % 7 == 0)
    chr = "Buzz";
else
    chr = "Num";

console.log("값: " + num + " " + chr);