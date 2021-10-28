function bonusScoringSystem(arr) {
    let studentsCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let additionalBonus = Number(arr.shift());
    
    let studentsAttendance = arr.map(Number);

    let maxBonus = 0;
    let maxLectures = 0;

    for (let i = 0; i < studentsAttendance.length; i++) {
        let current = studentsAttendance[i];
        let currentBonus = (current / lecturesCount) * (5 + additionalBonus)
        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxLectures = current;

        }
    }


    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '28', '5',
    '18'
  ]
  
  )