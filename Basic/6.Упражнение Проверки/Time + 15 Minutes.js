function timeMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let converted = hours * 60 + minutes + 15;
    let convertedHours = Math.floor(converted / 60) ;
    let convertedMinutes = Math.floor(converted % 60) ;

   
    if (convertedHours > 23) {
        convertedHours = 0;
    }

    if (convertedMinutes < 10) {
        console.log(`${convertedHours}:0${convertedMinutes}`);
    } else {
        console.log(`${convertedHours}:${convertedMinutes}`);
    }

}

timeMinutes
(["12", "49"])