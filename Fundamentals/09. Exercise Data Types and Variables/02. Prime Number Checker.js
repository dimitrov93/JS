function prime(num) {
    let prime = true;

   if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
    }

    if (prime) {
        console.log(true);
    } else {
        console.log(false);
    }

}
prime(7)
prime(8)
prime(81)