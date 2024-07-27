// let a = 10
// a =  a+1
// a += 1
// let b = a++
// let c = ++a
// c = --a
// c = a--
// console.log(a);
// console.log("b is ",b);
// console.log("c is ", c);

// let num1 = 100
// let num2 ="100"
// let num3 = "a"

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);

// console.log(typeof Number("200"));
// console.log(typeof String(100));
// console.log(typeof Boolean(100));


// if(num1 === num3){
//     console.log("True");
// }
// else
// {
//     console.log("false");
// }


// let num1 =100
// let num2 ="100"
// let num3 = "a"
// let num4 = 400

// let res2 = "True" ? "True-A" : "false-A"
// let res3 = "False" ? "True-B": "Fales-B"

// console.log(res2);
// console.log(res3);


// let result = num1 > num4 ? "OK" : "No" 

// console.log(result);

// let photo;
// let name = photo ?? "Example=png"
// console.log(name);


let num1 =100
let num2 ="100"
let num3 = "a"
let num4 = 400

let a = 1

if (a===1){
console.log("One")
}
else if(a===2){
    console.log("Two");
}
else if(a===3){
    console.log("Three");
}
else if(a===4){
    console.log("Four");
}
else if(a===5){
    console.log("Five");
}
else {
    console.log("Wrong number brother");
}

switch (a) {
    case 1:
        console.log("One");
        break;

        case 2:
        console.log("Two");
        break;

        case 3:
        console.log("Three");
        break;

        case 4:
        console.log("Four");
        break;

    default:
        console.log("No math number brother");
        break;
}



let calendar = new Date().getDay()

switch (calendar) {
    case 0:
        console.log("Sunday");
        break;

        case 1:
        console.log("Monday");
        break;

        case 2:
        console.log("Tuesday");
        break;

        case 3:
        console.log("Wednesday");
        break;

        case 4:
        console.log("Thursday");
        break;

        case 5:
        console.log("Friday");
        break;

        case 6:
        console.log("Saturday");
        break;

    default:
        console.log("This calendar is wrong");
        break;
}

let cal = new Date().getMonth

switch (cal) {
    case 0:
        console.log("January");
        
        break;

    default:
        console.log("No have");
        break;
}

for (let i = 0; i < 10; i++) {
  if(i === 5) continue
//   if (i === 8) break

    console.log("Hello",i);
   
    
}