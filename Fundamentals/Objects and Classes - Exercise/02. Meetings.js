function solve(input) {
//   let schedule = {};
//
//   for (let line of input) {
//       let currentLine = line.split(" ");
//       let day = currentLine[0];
//       let name = currentLine[1];
//       if (schedule.hasOwnProperty(day) ) {
//           console.log(`Conflict on ${day}!`);
//       } else {
//           console.log(`Scheduled for ${day}`);
//           schedule[day] = name;
//       }
//   }
//
//   for (let key in schedule) {
//       console.log(`${key} -> ${schedule[key]}`);
//   }

    let schedule = new Map();

    for (let line of input) {
        let currentLine = line.split(" ");
        let day = currentLine[0];
        let name = currentLine[1];

        if (schedule.has(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            schedule.set(day,name);
        }
    }

    for (let line of schedule) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

)