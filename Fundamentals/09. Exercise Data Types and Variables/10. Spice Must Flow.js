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
