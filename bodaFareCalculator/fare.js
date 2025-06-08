function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;
    const tripCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + tripCharge;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${tripCharge}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

// Prompt user input
const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(distanceInput));
