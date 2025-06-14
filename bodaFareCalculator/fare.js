const prompt = require('prompt-sync')();

function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;
    const tripCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + tripCharge;

    const totalFormatted = totalFare.toFixed(2);

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${tripCharge}`);
    console.log(`Total: KES ${totalFormatted}`);
    console.log("Panda Pikipiki!");
}

const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?: ");
calculateBodaFare(Number(distanceInput));
