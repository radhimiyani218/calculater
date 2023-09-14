let data = process.argv;

let o = data[2];
let a = data[3];
let b = data[4]; 

switch (o) {
  case "additon":
    console.log(`${Number(a) + Number(b)}`);
    break;
  case "substarction":
    console.log(a - b);
    break;
  case "multiplication":
    console.log(a * b);
    break;
  case "diveded":
    console.log(a / b);
    break;
  case "modulas":
    console.log(a % b);
    break;
}

