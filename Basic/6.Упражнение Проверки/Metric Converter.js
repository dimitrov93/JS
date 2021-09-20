function metricConverter(input) {
    let number = Number(input[0]);
    let inputUnit = input[1];
    let outputUnit = input[2];
    let result = 0;

    if (inputUnit === "mm" && outputUnit === "m") {
        result = number / 1000
    } else if (inputUnit === "mm" && outputUnit === "cm") {
        result = number / 10;
    } else if (inputUnit === "m" && outputUnit === "cm") {
        result = number * 100;
    } else if (inputUnit === "m" && outputUnit === "mm") {
        result = number * 1000
    } else if (inputUnit === "cm" && outputUnit === "mm") {
        result = number * 10;
    } else if (inputUnit === "cm" && outputUnit === "m") {
        result = number / 100;
    }

    console.log(result.toFixed(3));

}

metricConverter
(["45","cm","mm"])


