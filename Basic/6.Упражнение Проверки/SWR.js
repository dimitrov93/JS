function SWR(input) {
    let record = Number(input[0]);
    let lenght = Number(input[1]);
    let time = Number(input[2]);

    let swimInSeconds = lenght * time;
    let swimDelaySeconds = Math.floor(lenght / 15) * 12.5;
    let totalSwimSeconds = swimInSeconds + swimDelaySeconds;

    if (record > totalSwimSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalSwimSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalSwimSeconds - record).toFixed(2)} seconds slower.`);
    }
 

}



// Функцията получава: рекордът в секунди,  който Иван трябва да подобри
// разстоянието в метри, което трябва да преплува 
//времето в секунди, за което плува разстояние от 1 м.


SWR
(["10464",
"1500",
"20"])




