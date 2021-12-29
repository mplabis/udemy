let javascriptIsFun = true;
console.log(typeof true);
console.log(typeof 123);
console.log(typeof "makkow");
console.log(typeof javascriptIsFun);

javascriptIsFun = "yes";
console.log(typeof javascriptIsFun)
let makko;
console.log(makko);
console.log(typeof makko);
console.log(typeof null)
let age = 31;
age = 30;
const birthyear = 1991;
console.log(age)
let birthyear = 1990;
console.log(birthyear);
var job = "programmer";
job = "teacher";
console.log(job)
const now = 2021
const ageMakko = now - 1991;
const ageRikka = now - 1994;
console.log(ageMakko, ageRikka);
console.log(ageMakko * 2, ageRikka / 10, 2 ** 4);
console.log(typeof ageMakko + " " + ageRikka);
console.log(ageMakko < ageRikka);
const currentYear = 2021;
const ageMakko = currentYear - 1991;
const ageRikka = currentYear - 1994;
console.log(currentYear - ageMakko < currentYear - ageRikka);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)
const averageAge = (ageMakko + ageRikka) / 2;
console.log(averageAge)

let makkoMass = 70;
let makkoHeight = 1.69;
let rikkaMass = 65;
let rikkaHeight = 1.55;
let bmiMakko = makkoMass / (makkoHeight ** 2);
let bmiRikka = rikkaMass / (rikkaHeight ** 2);
if (bmiMakko > bmiRikka) {
    console.log(`Makko's BMI (${bmiMakko}) is higher than rikka's BMI (${bmiRikka})`)
} else if (bmiRikka > bmiMakko) {
    console.log(`Rikka's BMI (${bmiRikka}) is higher than Makko's BMI (${bmiMakko})`)
} else {
    console.log("they both have the same BMI")
}

const nameMakko = "Makko";
const job = "engineer";
const birthYear = 1991;
const year = 2021;
const makko = "I'm " + nameMakko + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(makko);
const makkoNew = `I'm ${nameMakko}, a ${year - birthYear} years old ${job}`
console.log(makkoNew)
console.log('string with \n\ multiple \n\ lines')
console.log(`string
with
multiple
line`)
const age = 17;
const licenseAge = 21;
const differenceAge = licenseAge - age;
if (age >= licenseAge) {
    console.log("you're allowed to take drivers license")
} else {console.log(`come back after ${differenceAge} years and get a license`)}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)

const inputYear = "1991"
console.log(Number(21) + 18)
let a = ""
if (a) {console.log("false")} else {
    console.log("true")
}

let favorite = prompt("whats your favorite number")
if (favorite != 23) {console.log("why not 1,2,3,4,5")} else if (favorite === 23) {console.log("cool 23")}
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;
console.log(hasDriversLicense && !hasGoodVision);
console.log(!hasDriversLicense || !hasGoodVision);

if (hasDriversLicense && hasGoodVision || isTired) {
    console.log("rikka can drive")
} else {console.log("someone else should drive")}

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("dolfins win!!")
} else if (scoreDolphins < scoreKoalas) {
    console.log("koalas win!!!")
} else {
    console.log("it is a draw")
}
console.log(scoreDolphins + " " + scoreKoalas)

scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("dolfins win!!")
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("koalas win!!!")
} else if (scoreKoalas === scoreDolphins) {
    console.log("it is a draw")
} else {
    console.log("no winner :(")
}
console.log(scoreDolphins + " " + scoreKoalas)

scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("dolfins win!!")
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("koalas win!!!")
} else if (scoreKoalas === scoreDolphins) {
    console.log("it is a draw")
} else {
    console.log("no winner :(")
}
console.log(scoreDolphins + " " + scoreKoalas)

const day = "saturday"

if (day === "wednesday" || day ==="thursday" || day ==="friday") {console.log("coding 4 and coding 5")} else {
    switch(day) {
        case "monday":
            console.log("coding 1");
            console.log("coding 2");
            break
        case "tuesday":
            console.log("coding 3");
            break
        case "wednesday":
        case "thursday":
        case "friday":
            console.log("coding 4")
            console.log("coding 5")
        break
        case "saturday":
        case "sunday":
            console.log("restday")
        break
    }
}

const age = 23;
age >= 18 ? console.log("i like to drink booze") : console.log("i like to drink water");

const drink = age >= 18 ? "wine": "water";
console.log(drink)
const bill = 10;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let totalBill = bill + tip;

console.log(`your bill is ${bill} and tip is ${bill * tip} your total will be ${totalBill} thank you`)

let bill = 100;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`your bill is ${bill} tip is ${tip} total will be ${bill + tip}`);

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("i can drive");

const interface = "Audio";
const if = "asdadsad";

"use strict";

function logger() {
    console.log("my name is jonas")
}

logger()
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} and ${oranges}`;
    return juice;
}

"use strict";

function calcAge(birthyear) {
    return 2021 - birthyear;
}

const age = calcAge(1991);
console.log(age)

"use strict";

function age1 (birthYear) {
    return birthYear = 2021 - birthYear;
}

const age2 = function age1 (birthYear) {
    return birthYear = 2021 - birthYear;
}

console.log(age2(1991))

const age3 = birthYear => 2021 - birthYear;

console.log(age3(1991))

const retirement = (birthYear, name) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // name = "makko";
    // return retirement, name
    return console.log(`${name} will retire after ${retirement} years `)
}
retirement(1991, "makko")

"use strict"

function fruitSlicer(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    let applePieces = fruitSlicer(apples);
    let orangePieces = fruitSlicer(oranges);
    let juice = `juice with ${applePieces} and ${orangePieces}`;
    return juice;
}

console.log(fruitProcessor(2, 2))

"use strict";

const calcAge = function(birthYear) {
    return 2021 - birthYear;
}
const retirementYear = function (birthYear, name) {
    const age = calcAge(birthYear);
    const retirement = (65 - age);
    if (age >= 65) {
        return `${name} is already retired`
    } else {
    return `${name} who is ${calcAge(birthYear)} will retire on year ${retirement} `
    }
}

console.log(retirementYear(1985, "filemon"))

const averageScore = function(score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

const averageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function winner() {
    const dolphinsAve = averageScore(85, 54, 41);
    const koalasAve = averageScore(23, 34, 27);
    if (dolphinsAve >= koalasAve * 2) {
        return `dolphins win score: ${dolphinsAve}, ${koalasAve}`
    } else if (koalasAve >= dolphinsAve * 2) {
        return `koalas win scor: ${koalasAve}, ${dolphinsAve}`
    } else {return "there is no winner"}
}

console.log(winner())

const friends = ["makko", "alvin", "bentong"]
console.log(friends[friends.length - 1])

const jonas = ["makko", "labis", 30];
console.log(jonas);

const years = [1991, 1992, 1993, 1994, 1995]
const calcAge = function() {
    for (i = 0; i < years.length; i++) {
    return 2021 - years[i];
    }
}

console.log(calcAge)

"use strict";

const friends = ["makko", "albin", "bentong"];
friends.push("rikka");
friends.pop();
friends.shift();
console.log(friends)
console.log(friends.indexOf("albin"))
console.log(friends.includes("bentong"))

const calcTip = function (bill) {
    if (bill <= 300 && bill >= 50) {
        let tip = bill * 0.15;
        tips.push(tip);
        return `your total bill will be ${bill + tip}`;
    } else {
        let tip = bill * 0.20;
        tips.push(tip);
        return `your total bill will be ${bill + tip}`;
    }
}
const tips = []
bill = [125, 555, 44];

console.log(calcTip(bill[0]))
console.log(tips)
const calcTip = bill => bill <= 300 && bill >= 300 ? bill * 0.15 : bill * 0.20;
const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(bill, tip)

const billCalc = tip => tip <= 300 && tip >= 50 ? tip * 2 : tip *8;

console.log(billCalc(1000))

"use strict";

const rikka = {
    firstName: "Rikka Kassandra",
    lastName: "Balabat",
    age: 27,
    job: "engineer",
    friends: ["sharmaine", "janine", "thessa"]
}

console.log(rikka.friends)
console.log(rikka["friends"])

const nameKey = "Name";
console.log(rikka["first" + nameKey])

rikka.locataion = ("taytay elsalvador");
rikka["twitter"] = "@rikkatandra";
console.log(rikka)

const interestedIn = prompt("What do you want to know about rikka?");
if (rikka[interestedIn]) {
    console.log(rikka[interestedIn])
} else {
    console.log("wrong request")
}

console.log(`${rikka.firstName} has ${rikka.friends.length} friends and his bestfriend is ${rikka.friends[0]}`);

console.log(rikka.friends[0])

"use strict";

const rikka = {
    firstName: "Rikka Kassandra",
    lastName: "Balabat",
    birthYear: 1991,
    hasDriversLicense: false,
    job: "engineer",
    friends: ["sharmaine", "janine", "thessa"],
    calcAge : function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    }
}

rikka.calcAge()

console.log(`${rikka.firstName} is a ${rikka.age}-year old ${rikka.job}, ${(rikka.hasDriversLicense) ? "and he has a drivers license" : "he has no drivers license"}`)

const rikka = {
    name : "rikka kassandra",
    weight : 78,
    height: 1.69,
    calcBmi : function() {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

const makko = {
    name : "makkiboi",
    weight : 92,
    height: 1.95,
    calcBmi : function() {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }
}

rikka.calcBmi();
makko.calcBmi();
// console.log(rikka)
console.log(`${rikka.bmi > makko.bmi ? `rikkas bmi ${rikka.bmi} is higher than makkos bmi ${makko.bmi}` : `makkos bmi ${makko.bmi} is higher than rikkas bmi ${rikka.bmi}`}`)

const calc = height => height < 12 ? console.log("chuhchu") : console.log("wawahs")

for (let i = 1; i <= 10; i++) {
    console.log(`lift rep 1 ${i}`)
}

const rikka = [
    "rikka",
    "kassandra",
    "balabat",
    true,
    "engineer",
    ["sharmaine", "janine", "thessa"],
    27,
]

const types = [];
for (i = 0; i < rikka.length; i++) {
    console.log(rikka[i])
    types[i] = typeof rikka[i];
}

console.log(types)

const years = [1991, 2007, 1963, 2020];
const ages = [];

for (i = 0; i < years.length; i++) {
ages.push(2021 - years[i]);
}

console.log(ages)

console.log("--- ONLY STRINGS ---")
for (let i = 0; i < rikka.length; i++) {
    if (typeof rikka[i] !== "string") continue;
    console.log(rikka[i])
    }

console.log("--- ONLY STRINGS ---")
for (let i = 0; i < rikka.length; i++) {
    if (typeof rikka[i] === "number") break;
    console.log(rikka[i])
    }

const rikka = [
    "rikka",
    "kassandra",
    "balabat",
    true,
    "engineer",
    ["sharmaine", "janine", "thessa"],
    27,
]

for(let i = rikka.length - 1; i >= 0; i--) {
    console.log(rikka[i])
}

for(let i = 1; i <= 3; i++) {
    console.log(`exercise number ${i}`)
    for(let i = 1; i <= 5; i++) {
        console.log(`repetition number ${i}`)
    }
}

let rep = 1;
while (rep <= 5) {
    console.log(`gym loops ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 5) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 5) {console.log("loop will end")}
}

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const total = [];

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

for (i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  totals.push(tip + bill[i]);
}

console.log(bill, tips, totals);

const calcAve = function () {
  let sum = 0;
  for (i = 0; i < totals.length; i++) {
    sum = sum + totals[i];
  }
  return sum / totals.length;
  // console.log(sum)
};

console.log(calcAve(totals));

let temperatures2 = [1, 2, 3, 4, 5, 6, 7, 8, -1, -2, -3, 4, -8, 6, "asadsd"];
let temperatures3 = [3, -2, -6, -1, "error", 9, 13, 18, 15, 14, 9, 5];
let temperatures = temperatures2.concat(temperatures3);
let revers = [];
const reverse = function (rev) {
  for (let i = rev.length - 1; i >= 0; i--) {
    revers.push(rev[i]);
  }
};
reverse([1, 2, 3]);
console.log(revers);

PROBLEM:
what is amplitude: difference between highest and lowest temprature
how to compute min max temp
what to do with sensor error
let max = 0;
let min = 0;
const calcTempAmplitude = function (temp) {
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== "number") continue;
    if (temp[i] > max) max = temp[i];
    if (temp[i] < min) min = temp[i];
  }
  return max - min;
};

const calcAmplitude = function (tempo) {
  for (let i = 0; i < tempo.length; i++) {
    if (typeof tempo[i] !== "number") continue;

    const max = Math.max(...tempo);
    const min = Math.min(...tempo);
  }
  return max - min;
};

BREAKING UP INTO SUB PROBLEMS:
how to ignore errors
find max value
find minimum value
difference between max and min and return

console.log(calcTempAmplitude(temperatures));
console.log(calcAmplitude(temperatures));

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: prompt("degree celsius"),
    value: 100,
  };
  const kellvin = measurement.value + 273;
  return kellvin;
};
console.log(measureKelvin());
let forcast;
const printForcast = function (arr) {
  let forcastMessage = "";
  const dot = "... ";
  for (i = 0; i < arr.length; i++) {
    forcastMessage += `${arr[i]}degrees celsius in ${[i + 1]} days ${dot}`;
  }
  console.log(forcastMessage);
};

printForcast([100, 200, 300]);
