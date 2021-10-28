function carWash(arr) {

    function findTheSum(arr) {
        let sum = 10;
        for (let i = 1; i < arr.length; i++) {
            let currentOrder = arr[i];
            if (currentOrder === 'soap') {
                sum += 10;
            } else if (currentOrder === 'water') {
                sum *= 1.2;
            } else if (currentOrder === 'vacuum cleaner') {
                sum *= 1.25;
            } else if (currentOrder === 'mud') {
                sum *= 0.9;
            }
        }
        return sum
    }

    console.log(`The car is ${findTheSum(arr).toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])