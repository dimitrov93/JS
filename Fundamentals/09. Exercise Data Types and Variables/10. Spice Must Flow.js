<<<<<<< HEAD
function spiceMustFlow(startingYield) {

    
        let extractedSpice  = 0;
        let days = 0;

        while (startingYield >= 100) {
            extractedSpice  += (startingYield - 26);
            days++;
            startingYield -= 10;
        }

        if (extractedSpice >= 26) {
            extractedSpice  -= 26;
        }
        console.log(days);
        console.log(extractedSpice);
}

spiceMustFlow(111)
spiceMustFlow(450)
=======
function spiceMustFlow(startingYield) {

    
        let extractedSpice  = 0;
        let days = 0;

        while (startingYield >= 100) {
            extractedSpice  += (startingYield - 26);
            days++;
            startingYield -= 10;
        }

        if (extractedSpice >= 26) {
            extractedSpice  -= 26;
        }
        console.log(days);
        console.log(extractedSpice);
}

spiceMustFlow(111)
spiceMustFlow(450)
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
