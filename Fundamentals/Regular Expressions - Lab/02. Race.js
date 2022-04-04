function race(arr) {
    let theNames = arr.shift().split(", ");
    let nameMatches = /[A-Za-z]/gm
    let distanceMAtches = /\d/gm
    let matches = {};
    while (arr[0] != 'end of race') {
        let line = arr.shift();
        let flag = false;

        let letters = line.match(nameMatches).join("");

        for (let nam of theNames) {
            if (nam === letters) {
                flag = true;
            }
        }
        let numbers = line.match(distanceMAtches).map(Number);
        let totalDistance = 0;
        for (let num of numbers) {
            totalDistance += num;
        }

        if (flag) {
            if (!matches.hasOwnProperty(letters)) {
                matches[letters] = totalDistance;
            } else {
                matches[letters] += totalDistance;
            }
        }

    }

    let sorted = Object.entries(matches).sort((a, b) => b[1] - a[1]);
    if (sorted[0]) {
        console.log(`1st place: ` + sorted[0][0]);
    }

    if (sorted[1]) {
        console.log(`2nd place: ` + sorted[1][0]);
    }
    if (sorted[2]) {
        console.log(`3rd place: ` + sorted[2][0]);
    }
}


race(
['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)