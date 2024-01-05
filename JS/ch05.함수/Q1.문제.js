// 배열에 대한 함수 만들어 보기
let sampleArray = [43, 17, 25, 36, 98, 73];

// 1. 배열을 인수로 받아서 합을 반환하는 함수
function sumArray(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// 2. 배열을 최대값을 찾아서 반환해주는 함수
function maxArray(arr){
    let maxNum = 0;

    // for (let i = 0; i < arr.length; i++){
    //     if (arr[i] > maxNum){
    //         maxNum = arr[i];
    //     }
    // }

    for (let max of arr){
        // if(max > maxNum){
        //     maxNum = max;
        // }
        max > maxNum ? maxNum = max : maxNum = maxNum;
    }
    return maxNum;
}

console.log(sumArray(sampleArray));
console.log(maxArray(sampleArray));

// 평균
console.log(sumArray(sampleArray) / sampleArray.length);

console.log()

// 3. 배열 원소의 제곱의 합
function sumOfSquare(arr){
    let sum = 0;
    for (let squ of arr){
        sum += squ*squ;
    }
    return sum;
}

console.log(sumOfSquare(sampleArray));