const Ford = {
    type: "SUV",
    model: "F150",
    color: "black",
    year: 2014,
    fuel: "Gas",
    VIN: "1FTFW1ET9EKE63610",
    damage: true,
    warranry: false,
    oneHand:true,
    transmission: "Automatic",
}
console.log("Model -> ", Ford.model, "\nYear -> ", Ford.year);
if (Ford.damage){
    console.log("\nCrashed vehicle\n");
}

const Hyundai = new Object();
    Hyundai.type = "Saloon",
    Hyundai.model = "Sonata",
    Hyundai.color = "Blue",
    Hyundai.year = 2015,
    Hyundai.fuel = "Gas",
    Hyundai.VIN = "5NPE34AF6FH190678",
    Hyundai.damage = true,
    Hyundai.warranry = true,
    Hyundai.oneHand = true,
    Hyundai.transmission = "Automatic";
    console.log("Check property VIN&type -> ", Hyundai.hasOwnProperty("VIN","type"));
    console.log("Damade -> ", Hyundai.damage);

const Dodge = {
    type: "Coupe",
    model: "Challenger Sxt Plus",
    color: "Black",
    year: 2015,
    fuel: "Gas",
    VIN: "2C3CDZBG1FH706063",
    damage: false,
    warranry: true,
    oneHand:false,
    transmission: "Automatic",
}
Dodge.type = "Saloon";
console.log("changeType from Coupe ->", Dodge.type);


const Chevrolet = {
    type: "Roadster",
    model: "Camaro Ls",
    color: "Blue",
    year: 2021,
    fuel: "Gas",
    VIN: "1G1FB1RX5M0109837",
    damage: false,
    warranry: false,
    oneHand:false,
    transmission: "Automatic",
}
delete Chevrolet.warranry;
console.log("deleteWarranty -> ", Chevrolet );

const Audi = {
    type: "Estate",
    model: "A4 Allroad",
    color: "Yellow",
    year: 2022,
    fuel: "Diesel",
    VIN: "WA19AAF47MA075079",
    damage: true,
    warranry: true,
    oneHand:true,
    transmission: "Manual",
}
console.log(Object.values(Audi));
console.log(Audi.valueOf("year"));
console.log("typeOf ->", typeof ('year'));

const BMW = {
    type: "SUV",
    model: "X3 Xdrive",
    color: "White",
    year: 2022,
    fuel: "Diesel",
    VIN: "5UXTY5C06M9F91369",
    damage: true,
    warranry: false,
    oneHand:false,
    transmission: "Automatic",
}

console.log("Check property Engine  -> ", BMW.hasOwnProperty("engine"));
console.log(BMW.toString());


const Volkswagen = {
    type: "Coupe",
    model: "New Beetle S",
    color: "Yellow",
    year: 2008,
    fuel: "Diesel",
    VIN: "3VWRW31C08M526862",
    damage: true,
    warranry: false,
    oneHand:true,
    transmission: "Automatic",
}

console.log("\nK_E_Y_S -> ", Object.keys(Volkswagen));

const MercedesBenz = {
    type: "SUV",
    model: "Glk 350",
    color: "Black",
    year: 2014,
    fuel: "Gas",
    VIN: "WDCGG5HB6EG279007",
    damage: true,
    warranry: false,
    oneHand:false,
    transmission: "Automatic",
}

console.log("\nbefore________________->\n ", Volkswagen);
const copyValue = Object.assign(Volkswagen, MercedesBenz);
console.log("after________________->", copyValue);


const Fiat = {
    type: "Roadster",
    model: "124 Spider Classica",
    color: "Gray",
    year: 2017,
    fuel: "Gas",
    VIN: "JC1NFAEK4H0129100",
    damage: false,
    warranry: true,
    oneHand:true,
    transmission: "Automatic",
}

const Car = Object.create(Fiat);
Car.type = "Saloon";
Car.warranry = false;
console.log("New carFiat ->\n", Car);

delete Fiat.color;
console.log("\ndeleteColor -> ", Fiat.color, "\n");

for(const [key,value] of Object.entries(Fiat)){
    console.log(`${key}: ${value}`);
}



const Crysler = {
    type: "Saloon",
    model: "300 Limited",
    color: "Green",
    year: 2016,
    fuel: "Gas",
    VIN: "2C3CCARG7GH321344",
    damage: true,
    warranry: false,
    oneHand:false,
    transmission: "Automatic",
}

Object.freeze(Crysler);
Crysler.color = "Red";
console.log("\nFreeze ->", Crysler.color);