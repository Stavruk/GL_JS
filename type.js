//let's practice
const a = 5;
let b = 3;
const c = 2;
const sum = a ** b;
const D = b ** 2 - 4 * a * c;
b -= a;
console.log("b-a =", b);
console.log("SUM =", a + b, "\nELE =", sum);
/*
    quadratic equation
*/
console.log("____________________________");
console.info("ax^2+bx+c=0\n", "5x^2+3x+2=0");
console.log("D =", D);
if (D < 0) {
    console.error("Sorry, D<0");
}
console.log("____________________________");

//intersection of the graph
const $first_con = "c_Passes through the origin";
const $second_con = "c_Passes not through the origin";
const c_Passes = -4;
if (c_Passes > 0) {
    console.log("c_Passes Oy positive values");
}
else if (c_Passes < 0) {
    console.log("c_Passes Oy negative values");
}
const graph = c_Passes === 0
    ? $first_con
    : $second_con;
console.log("\n", graph);
console.log("____________________________");

let one = -25;
let two = 55;
const con1 = "True";
const con2 = "F_a_l_s_e";
const res = "Vovka";
console.log("nameCheck ->", res !== "Lolik");
const check = one !== 0 && one > 0
    ? con1
    : con2;
console.log("numCheck ->", check);
console.log("____________________________");

//vehicle kw, hp power *kilowatts, horsepower
const power = '135kw (184hp)';
switch (power) {
  case '135kw (184hp)': { 
    let message = 'In this vehicle 184HP';
    console.log(message);
    break;
  } 
  case '156kw (209hp)': { 
    let message = 'In this car 156HP';
    console.log(message);
    break;
  } 
  case '176kw (236hp)': { 
    let message = 'In this car 176HP';
    console.log(message);
    break;
  } 
  case '341kw (457hp)': { 
    let message = 'In this car 341HP';
    console.log(message);
    break;
  } 
  default: { 
    console.error('No data!');
    break;
  } 
}