function dayOfWeek(input) {
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if (input >= 1 && input <= 7) {
        console.log(day[input-1]);
    } else {
        console.log("Invalid day!");
    }
}

dayOfWeek([3])
dayOfWeek([6])
dayOfWeek([11])