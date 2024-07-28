const userLists = [
    {id:"1",name:"MNO",age :"24",address:"Yangon",hobbies:"Basketball",gender:"Male"},
    {id:"2",name:"john",age :"25",address:"Mandalay",hobbies:"Basketball",gender:"Female"},
    {id:"3",name:"nick",age :"26",address:"Singapore",hobbies:"Basketball",gender:"Male"},
    {id:"4",name:"Willan",age :"27",address:"American",hobbies:"Basketball",gender:"Male"},
    {id:"5",name:"Jack",age :"28",address:"new-york",hobbies:"Basketball",gender:"Female"},
    {id:"6",name:"Sparrow",age :"29",address:"Yangon",hobbies:"Swimming",gender:"Male"},
    {id:"7",name:"Jonny",age :"30",address:"Yangon",hobbies:"Basketball",gender:"Male"},
]


// for (const i in userLists) {
    // console.log(i);
    // console.log(userLists[i]);

//     let user = userLists[i]
//     console.log(user.id,user.name,user.age,user.address,user.gender);
// }

// let john = userLists[1]
// for (const i in john) {
//    console.log(i);
//    console.log(john[i]);
//    console.log(`${i} is ${john[i]}`);
// }

// for (const a of userLists) {
//     // console.log(a);
//     const{id,name,age,address,gender,hobbies} = a
//     console.log(`name ${name} address ${address}`);

// }

// let all =userLists.map(a => ` ${a.name} ${a.address}`)
// console.log(all);
// console.log(all[4]);

// let name = userLists.map(a => a.name)
// console.log(name);
// console.log(name[4]);

// let age = userLists.map(a => a.age)
// console.log(age);
// console.log(age[5]);

// let address = userLists.map(a => a.address)
// console.log(address);

// let result = userLists.filter(a => a.address === "Yangon").map(a => a.name)
// console.log(result);

// let ages =userLists.filter(a=> a.age > "26").map(a => a.name)
// console.log(ages);



// let shop = [100,200,300,500,750,800]
// let total = shop.reduce((a,b) => a+b, -50 )
// console.log(total);



let shop =[100,200,300,400,500,600]
let total = shop.reduce((a,b)=> a+b ,150)
console.log(total);


// for (let i = 0; i < userLists.length; i++) {
//     const user = userLists[i];
    

    // let info =`Name is ${user.name} age is ${user.age} Address is ${user.address} Gender is ${user.gender}`
    // console.log(info);

    // const{name,email,address,gender,hobbies,age} = userLists[i]

    // if (address === "Yangon" && gender === "Male") {

    //    console.log(`Name is ${name} age is ${age} Address is ${address} Gender is ${gender}`);
        
    // }
    //   const {age,address} = userLists[i]

    //   if (age < 28 && address === "Yangon") {
    //      console.log(`Under 24 ${age} Address yangon ${address}`);
    //   }


    
   
// userLists.forEach(user => {
//     // console.log(user);

//      const{name,age,address,gender} = user;
    
//      if (gender === "Male") {
//         console.log(`Name is Mr.${name} and age is ${age}`);
//      }else{
     
//         console.log(`Name is Ms.${name} and age is${age}`);
//      }
// });





