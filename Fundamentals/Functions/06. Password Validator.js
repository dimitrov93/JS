function passValidator(input) {
    let pass = input;

    let passLengthValidator = (pass) => {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            counter++;
        }

        if (counter >= 6 && counter <= 10) {
            return true;
        } else {
            return false;
        }
    }

    let passSignValidator = (pass) => {
        let checker = true;
        for (let i = 0; i < pass.length; i++) {
            let currentDigit = pass[i].charCodeAt();

            if (currentDigit >= 33 && currentDigit <= 47) {
                checker = false;
            } else if (currentDigit >= 58 && currentDigit <= 64) {
                checker = false;
            } else if (currentDigit >= 91 && currentDigit <= 96) {
                checker = false;
            }  else if (currentDigit >= 123 && currentDigit <= 126) {
                checker = false;
            }
        }

        if (checker) {
            return true;
        } else {
            return false;
        }
    }

    let passNumberValidator = (pass) => {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            let currentDig = pass[i].charCodeAt(0);
            if (currentDig >= 48 && currentDig <= 57) {
                counter++;
            }          
        }

        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    if (passLengthValidator(pass) === false) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (passSignValidator(pass) === false) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (passNumberValidator(pass) === false) {
        console.log(`Password must have at least 2 digits`);
    }

    if (passLengthValidator(pass) && passSignValidator(pass) && passNumberValidator(pass)) {
        console.log('Password is valid');
    }

}

passValidator('Pa$s$s')
