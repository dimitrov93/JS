function readText(input) {
    let index = 0;
    let text = input[index];

    while (text !== "Stop") {
        text = input[index];
        if (text == "Stop") {
            break;
        }
        console.log(text);
        index++
    }
    
}
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
