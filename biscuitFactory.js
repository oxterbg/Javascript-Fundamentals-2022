function biscuitFactory(input){

    let biscuitPerDay = input[0];
    let workers = input[1];
    let otherFactoryProduction = input[2];

    let montlyProduction = 0;
    for(i = 0; i < 30; i++){
        let productionPerDay = biscuitPerDay * workers;
        if (i % 3 == 0) {
            montlyProduction += productionPerDay * 0.75;
        } else {
            montlyProduction += productionPerDay;
        }
    }

    let moreOrLess = "less";
    if(otherFactoryProduction < montlyProduction){
        moreOrLess = "more";
    }
    let percentage = Math.abs((otherFactoryProduction - montlyProduction) / otherFactoryProduction * 100);
    var multiplier = Math.pow(10, 2 || 0);
    percentage = Math.round(percentage * multiplier) / multiplier;
    percentage = percentage.toFixed(2);

    console.log("You have produced " + montlyProduction + " biscuits for the past month." );
    console.log("You produce " + percentage + " percent " + moreOrLess +" biscuits." );
}
biscuitFactory(
    // ["65", "12","26000"]
    // ["78", "8","16000"]
    ["163", "16","67020"]
)
