// const user = {
//     name : "Min Naing Oo",
//     age : "24",
//     email :"example@gmail.com",
//     phone :"09*********",
// hobbies:["Footbll","Swimming","basketball"],
// skill :["Java","Python","C++"],
// address :{
//     street : "152",
//     city :"Yangon",
//     dev:"Develloper",
// },
// getInfo(){
//     return `name: ${this.name.toUpperCase()},Age is:${this.age},email is:${this.email},and phone is:${this.phone},hobbies:${this.hobbies},skill:${this.skill},address:${this.address},he is:${dev}`
// }
// }
// // console.log(user);
// // console.log(user['name']);
// // console.log(user['hobbies']['2']);
// // console.log(user['address']['city']);
// // console.log(user.address.street);

// // let usera = user;
// // usera.name = "Aye Aye";
// // usera.isMarried = false;
// // console.log(usera);
// // console.log(usera.getInfo());


// // const {name,age,hobbies,skill,address,email} = user 
// // console.log(`name is ${name} age is ${age} and hobbies ${hobbies} live at ${address.city} akill is${skill}`);


const userLists = [
    {id:"1",name:"MNO",age :"24",address:"Yangon",hobbies:"Basketball",gender:"Male"},
    {id:"2",name:"john",age :"25",address:"Mandalay",hobbies:"Basketball",gender:"Male"},
    {id:"3",name:"nick",age :"26",address:"Singapore",hobbies:"Basketball",gender:"Male"},
    {id:"4",name:"Willan",age :"27",address:"American",hobbies:"Basketball",gender:"Male"},
    {id:"5",name:"Jack",age :"28",address:"new-york",hobbies:"Basketball",gender:"Male"},
    {id:"6",name:"Sparrow",age :"29",address:"Yangon",hobbies:"Swimming",gender:"Male"},
    {id:"7",name:"Jonny",age :"30",address:"Yangon",hobbies:"Basketball",gender:"Male"},
]


// console.log(userLists);
// console.log(userLists[0].name);
// console.log(userLists[1].hobbies);
// console.log(userLists[3].id);

// const[user1,user2,user3,user4,user5,user6] = userLists
// console.log(user1);
// console.log(user1.name,user1.age,user1.gender,user1.address,user1.id);
// console.log(user2.name,user2.age,user2.hobbies);

// const {name,age,hobbies,address,gender} = user1
// console.log(name);
// console.log(address);
// console.log(hobbies);

let str = JSON.stringify(userLists)
console.log(str);

let arr = JSON.parse(str)
console.log(arr);
console.log(userLists[2].name);



