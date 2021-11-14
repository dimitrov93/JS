function solve(arr) {
    let partyList = {
        vip:[],
        regular:[]
    }

    let guest = arr.shift();
    while(guest !== 'PARTY') {
        let firstChar = guest[0];
        if (isNaN(firstChar)) {
            partyList.regular.push(guest)
        } else {
            partyList.vip.push(guest)
        }

        guest = arr.shift();
    }
    
    for (let line of arr) {
        if (partyList.vip.includes(line)) {
            let index = partyList.vip.indexOf(line);
            partyList.vip.splice(index,1);
        } else if (partyList.regular.includes(line)) {
            let index = partyList.regular.indexOf(line);
            partyList.regular.splice(index,1);
        }
    }

    let vipCount = partyList.vip.length;
    let regularCount = partyList.regular.length;
    console.log(vipCount + regularCount);
    console.log(partyList.vip.join(`\n`));
    console.log(partyList.regular.join(`\n`));
}

solve(
    ['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
    ]
    
)