function solve(km,area) {
    
    switch (area) {
        case "motorway":motorway();break;
        case "city": city();break;
        case "residential": residential(); break;
        case "interstate": interstate();break;
        default: 
            break;
    }

    function city() {
        let speedLimit = 50;
        if (km > 0 && km <= speedLimit) {
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
        } else {
            let status;
            let statusKM = km - speedLimit;
            if (statusKM <= 20) {
                status = "speeding";
            } else if (statusKM > 20 && statusKM <= 40) {
                status = "excessive speeding";
            } else if (statusKM > 40) {
                status = "reckless driving";
            }
            console.log(`The speed is ${km - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

    function residential() {
        let speedLimit = 20;
        if (km > 0 && km <= speedLimit) {
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
        } else {
            let status;
            let statusKM = km - speedLimit;
            if (statusKM <= 20) {
                status = "speeding";
            } else if (statusKM > 20 && statusKM <= 40) {
                status = "excessive speeding";
            } else if (statusKM > 40) {
                status = "reckless driving";
            }
            console.log(`The speed is ${km - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

    function interstate() {
        let speedLimit = 90;
        if (km > 0 && km <= speedLimit) {
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
        } else {
            let status;
            let statusKM = km - speedLimit;
            if (statusKM <= 20) {
                status = "speeding";
            } else if (statusKM > 20 && statusKM <= 40) {
                status = "excessive speeding";
            } else if (statusKM > 40) {
                status = "reckless driving";
            }
            console.log(`The speed is ${km - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

    function motorway() {
        let speedLimit = 130;
        if (km > 0 && km <= speedLimit) {
            console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
        } else {
            let status;
            let statusKM = km - speedLimit;
            if (statusKM <= 20) {
                status = "speeding";
            } else if (statusKM > 20 && statusKM <= 40) {
                status = "excessive speeding";
            } else if (statusKM > 40) {
                status = "reckless driving";
            }
            console.log(`The speed is ${km - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')