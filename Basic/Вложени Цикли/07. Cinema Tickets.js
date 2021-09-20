function cinemaTickets(input) {
    let studentTicket = 0;
    let standartTicket = 0;
    let kidTicket = 0;
    let index = 1;
    let looking = input[0];
    let places = Number(input[1]);
    let movie = input[0];
    let counter = 0;

    while (looking !== `Finish`) {
        index++;
        let tickets = input[index];

        switch (tickets) {
            case `standard`: standartTicket++; counter++; break;
            case `student`: studentTicket++; counter++; break;
            case `kid`: kidTicket++; counter++; break;
        }
        if (tickets == `End` || places === counter) {
            console.log(`${movie} - ${((counter) / places * 100).toFixed(2)}% full.`);
            movie = input[index + 1];
            looking = input[index + 1];
            places = Number(input[index + 2]);
            counter = 0;
        } else {
            looking = input[index];
        }

    }
    let sum = standartTicket + studentTicket + kidTicket;

    if (looking == `Finish`) {
        console.log(`Total tickets: ${sum}`);
        console.log(`${(studentTicket / sum * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standartTicket / sum * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidTicket / sum * 100).toFixed(2)}% kids tickets.`);
    }
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
