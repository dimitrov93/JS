function sumPrime(input) {
    let index = 0;
    let search = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (search !== `stop`) {
        let n = Number(search);

        if (n < 0) {
            console.log(`Number is negative.`);
            index++;
            search = input[index];
            continue;
        }

        if (n === 1) {
            sumPrime += n;
            search = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrime += n;
        } else {
            sumNonPrime += n;
        }

        index++;
        search = input[index];
    }
        console.log(`Sum of all prime numbers is: ${sumPrime}`);
        console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}

sumPrime(["0",
"-9",
"0",
"stop"])


