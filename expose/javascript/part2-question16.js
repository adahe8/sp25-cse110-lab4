let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const cartype in statistics) {
    if(cartype.charAt(0) == 'r' || statistics[cartype] % 2 == 1) {
        console.log(`${cartype}: ${statistics[cartype]}`)
    }
}