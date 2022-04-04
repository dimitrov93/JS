function palindrome(arr) {


    let reversedNum = (num) => {
        let firstNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join(''));
        if (firstNum === reversedNum) {
            return true
        } else {
            return false
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        console.log(        reversedNum(num)        );        
    }
}


palindrome([123,323,421,121])