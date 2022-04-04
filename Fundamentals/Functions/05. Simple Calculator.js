function calc(numOne, numTwo, operator) {
    let result = 0;
    let multiply = () => numOne * numTwo;
    let divide = () => numOne / numTwo;
    let add = () => numOne + numTwo;
    let subtract = () => numOne - numTwo;

    switch (operator) {
        case "multiply":
            result = multiply();
            break;
         case "divide":
            result = divide();
            break;
            case "add":
                result = add();
                break;
                case "subtract":
                    result = subtract();
                    break;   
        default:
            break;
    }

    console.log(result);
}
calc(5,5, 'multiply')
