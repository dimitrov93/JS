 function solve(input) {
    let obj = {};
    
    for (let line of input) {
        let currentLine = line.split(" ");
        let name = currentLine.shift();
        let grades = currentLine.map(Number);

        if (obj.hasOwnProperty(name)) {
            let currentGrades = obj[name];
            for (let i = 0; i < grades.length; i++) {
                currentGrades.push(grades[i])
                
            }
            obj[name] = currentGrades;
        } else {
            obj[name] = grades
        }
    }

    let entries = Object.entries(obj);
        entries.sort((a,b) => {
            let first = a[1];
            let second = b[1];
            sumA = 0;
            sumB = 0;
            for (let i = 0; i < first.length; i++) {
                sumA += first[i];
            }
            for (let i = 0; i < second.length; i++) {
                sumB += second[i];
            }

            let averageA = sumA / a[1].length;
            let averageB = sumB / b[1].length
            return averageA - averageB
        })
    for (let line of entries) {
        console.log(`${line[0]}: ${line[1].join(", ")}`);
    }

//    let schoolGrades = new Map();
//
//    for (let line of input) {
//        let currentLine = line.split(" ");
//        let name = currentLine.shift();
//        let grades = currentLine.map(Number);
//
//        if (schoolGrades.has(name)) {
//            schoolGrades.set(name, schoolGrades.get(name).concat(grades))
//        } else {
//            schoolGrades.set(name,grades)
//        }
//    }
//
//    let sorted = Array.from(schoolGrades).sort((a,b) => average(a,b))
//
//    
//
//    for (let line of sorted) {
//        console.log(`${line[0]}: ${line[1].join(", ")}`);
//    }
//
//
//    function average(a,b) {
//        let first = a[1];
//        let second = b[1];
//        sumA = 0;
//        sumB = 0;
//        for (let i = 0; i < first.length; i++) {
//            sumA += first[i];
//        }
//        for (let i = 0; i < second.length; i++) {
//            sumB += second[i];
//        }
//    
//        let averageA = sumA / a[1].length;
//        let averageB = sumB / b[1].length;
//        return averageA - averageB
//    }
}

solve(
['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)