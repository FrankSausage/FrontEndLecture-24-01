//배열(Array)
let person = ['James', 27, '남자', '프로그래머', 175.3];

console.log(person);
console.log(typeof(person));
console.log(person.length);
console.log(person[0], person[1], person[person.length-1]);

// 배열을 효율적으로 사용하려면 반복문을 사용해야 함
// while 반복문 - 갯수가 정해지지 않은 경우
// for 반복문 - 갯수가 정해져 있을 경우

for(let i=0; i < person.length; i++) {
    console.log("출력 " + person[i]);
}
for(let i=person.length-1; i >= 0; i--) {
    console.log("역출력 " + person[i]);
}

// Enhanced for-loop
console.log('Enhanced for-loop');
for (let item of person);
    console.log(item);
