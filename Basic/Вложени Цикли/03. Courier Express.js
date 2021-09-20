function Courier(input) {
    let price = 0;
    let packageInKg = Number(input[0]);
    let serviceType = input[1];
    let routeInKM = Number(input[2]);
    let upSoldKG = 0;
    let upSoldKM = 0;
    let totalUpSold = 0;

    switch (serviceType) {
        case `standard`:
            if (packageInKg > 0 && packageInKg < 1) {
                price = routeInKM * 0.03;
            } else if (packageInKg >= 1 && packageInKg < 10) {
                price = routeInKM * 0.05;
            } else if (packageInKg >= 10 && packageInKg < 40) {
                price = routeInKM * 0.1;
            } else if (packageInKg >= 40 && packageInKg < 90) {
                price = routeInKM * 0.15;
            } else if (packageInKg >= 90 && packageInKg < 150) {
                price = routeInKM * 0.2;
            }
            break;
        case `express`:
            if (packageInKg > 0 && packageInKg < 1) {
                price = routeInKM * 0.03;
                upSoldKG = 0.02 * 0.03;
                upSoldKM = packageInKg * upSoldKG;
                totalUpSold = routeInKM * upSoldKM;
                price += totalUpSold;
            } else if (packageInKg >= 1 && packageInKg < 10) {
                price = routeInKM * 0.05;
                upSoldKG = 0.02 * 0.05;
                upSoldKM = packageInKg * upSoldKG;
                totalUpSold = routeInKM * upSoldKM;
                price += totalUpSold;
            } else if (packageInKg >= 10 && packageInKg < 40) {
                price = routeInKM * 0.1;
                upSoldKG = 0.02 * 0.1;
                upSoldKM = packageInKg * upSoldKG;
                totalUpSold = routeInKM * upSoldKM;
                price += totalUpSold;
            } else if (packageInKg >= 40 && packageInKg < 90) {
                price = routeInKM * 0.15;
                upSoldKG = 0.02 * 0.15;
                upSoldKM = packageInKg * upSoldKG;
                totalUpSold = routeInKM * upSoldKM;
                price += totalUpSold;
            } else if (packageInKg >= 90 && packageInKg < 150) {
                price = routeInKM * 0.2;
                upSoldKG = 0.02 * 0.2;
                upSoldKM = packageInKg * upSoldKG;
                totalUpSold = routeInKM * upSoldKM;
                price += totalUpSold;
            }
            break;
        default:
            console.log(`The delivery of your shipment with weight of ${packageInKg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
            break;
    }
    console.log(`The delivery of your shipment with weight of ${packageInKg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);

}
Courier(["87",
    "express",
    "130"])
