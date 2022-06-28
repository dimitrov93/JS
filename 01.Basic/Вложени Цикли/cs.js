function cs(input) {
    let kgs = Number(input[0]);
    let service = input[1];
    let kms = Number(input[2]);
    let nadcenka = 0;
    let nadcenkaKM = 0;
    let finalNadcenka = 0;
    let sum = 0;

    switch (service) {
        case `standard`:
            if (kgs > 0 && kgs < 1) {
                sum = kms * 0.03;
            } else if (kgs >= 1 && kgs < 10) {
                sum = kms * 0.05;
            } else if (kgs >= 10 && kgs < 40) {
                sum = kms * 0.10;
            } else if (kgs >= 40 && kgs < 90) {
                sum = kms * 0.15;
            } else if (kgs >= 90 && kgs < 150) {
                sum = kms * 0.20;
            }
            break;
        case `express`:
            if (kgs > 0 && kgs < 1) {
                sum = kms * 0.03;
                nadcenka = 0.8 * 0.03;
                nadcenkaKM = kgs * nadcenka;
                finalNadcenka = kms * nadcenkaKM;
            } else if (kgs >= 1 && kgs < 10) {
                sum = kms * 0.05;
                nadcenka = 0.4 * 0.05;
                nadcenkaKM = kgs * nadcenka;
                finalNadcenka = kms * nadcenkaKM;
            } else if (kgs >= 10 && kgs < 40) {
                sum = kms * 0.10;
                nadcenka = 0.05 * 0.1;
                nadcenkaKM = kgs * nadcenka;
                finalNadcenka = kms * nadcenkaKM;
            } else if (kgs >= 40 && kgs < 90) {
                sum = kms * 0.15;
                nadcenka = 0.02 * 0.15;
                nadcenkaKM = kgs * nadcenka;
                finalNadcenka = kms * nadcenkaKM;
            } else if (kgs >= 90 && kgs < 150) {
                sum = kms * 0.20;
                nadcenka = 0.01 * 0.2;
                nadcenkaKM = kgs * nadcenka;
                finalNadcenka = kms * nadcenkaKM;
            }
            break;
        default: break;
    }

    console.log(`The delivery of your shipment with weight of ${kgs.toFixed(3)} kg. would cost ${(sum + finalNadcenka).toFixed(2)} lv.`);
}




cs(["20",
"standard",
"349"])
