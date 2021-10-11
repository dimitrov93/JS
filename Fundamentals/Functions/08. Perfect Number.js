function perfectNum(num) {

    let makeArrayFromNum = (num) => {
        let emptyArr = [];
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum = i;
                emptyArr.push(sum)
            }
        }
        let sumAgain = 0;
        for (let i = 0; i < emptyArr.length; i++) {
            sumAgain += emptyArr[i];
        }
        return sumAgain;
    }

    if (makeArrayFromNum(num) % 2 === 0 && makeArrayFromNum(num) === num) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNum(6)
perfectNum(28)
perfectNum(1236498)