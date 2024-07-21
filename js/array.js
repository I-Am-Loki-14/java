// // let data = new Array(100,200,'Apple','Orange','Strawberry')

// // let arr = [100,200,true,false,'apple','orange','strawberry','pineapple',[1,2,3],{name:'js'}]

// // arr[0]= 250
// // console.log(arr[0]);
// // console.log(arr[3]);
// // console.log(arr[8]);
// // console.log(arr.length);
// // console.log(arr[arr.length-1]);




// // let fe =['html','python','java',[100,200,300,['a','b','c']],'python','vuejs'];
// // let be = ['hello','welcome','myanmar',[12,13,14,['aa','bb','cc']],'thailand','vietnam'];

// // let fs = [fe,be]
// // console.log('index 0',fs[0])
// // console.log(fs[0][3]);
// // console.log(fs);
// // console.log(fs[1][3][2]);
// // console.log(fs);
// // console.log(fs[1][1][3]);
// // console.log(fs[1][3][3][2]);
// // console.log(fs[1][3][2]);
// // console.log(fs[1]);


// // let fe =['html','python','java',...[100,200,300,...['a','b','c']],'python','vuejs'];
// // let be = ['hello','welcome','myanmar',...[12,13,14,...['aa','bb','cc']],'thailand','vietnam'];

// // let lemon = [...fe,...be]
// // console.log('all', lemon);
// // console.log(lemon[13]);
// // console.log(lemon[20]);
// // console.log('Print--->',lemon[9]);

// // let fe =['myanmar','thailand','indonesia','combodia','vietnam','american','austrila','japan']

// // const [one,two,three,...four] = fe

// // console.log('print-->',one);
// // console.log('print',four[1]);
// // console.log('print-austrila-->',four[3]);


// // let userLists = [];
// // userLists.push("myanmar")
// // userLists.push("thailand")
// // userLists.push("England")
// // userLists.push("american")
// // userLists.unshift("mg mg")
// // userLists.shift("zaw zaw")
// // userLists.pop()

// // console.log(userLists);

// // let data =[1,2,100,300,'a','b','c','minnaing@gmail.com','apple','orange','carrot']
// // let a = "apple"
// // console.log(Array.isArray(data));
// // console.log(Array.isArray(a));
// // console.log(data.indexOf("minnaing@gmail.com"));
// // console.log(data.splice(7,1));
// // console.log(data.splice(7,2));
// // console.log(data.splice(7,1,"maungmaung@gmail.com"));
// // console.log(data.includes(300));
// // console.log(data);


// let arr =[3,5,6,8]
// let res = arr.find((n) => n % 2 === 0); //6

// let index = [2,4,30,5].findIndex((n) => n % 2 !== 0);// index 3
// console.log(index);

// let every = [2,3,4,5].every((x) => x < 6);//true
// console.log(every); 

// let Every = [2,3,4,5].every((y) =>y < 6 )
// console.log(("====>"),every);

// let some = [4,5,6,7].some((n) => n > 6)
// console.log('find-some',some);

// let reverse = [1,2,3,4].reverse();
// console.log('reverse-->',reverse);

// let negative = [3,5,7,8].at[-1]
// console.log('negative-->',negative);


// let names = ['mg mg','zaw zaw','kyaw kyaw','coconut','strawberry']
// console.log(names.sort());

// let Number = [100,500,200,400,600,300,700,1200,1250,1350]

// console.log(Number.sort((a,b)=>a-b));
// console.log(Number.sort((a,b)=>b-a)  );
