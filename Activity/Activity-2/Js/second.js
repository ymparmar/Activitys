// ECMA SCREPT ES
// _______________________________________________________

// const CAN NOT CHANGE

// var is globle(like a .window)  and let is not globle

// _______________________________________________________

// default parameter

// _______________________________________________________

// ...   <=(REST) parameter 

// function sum(...argu)
// {
//     let result = 0;

//     for (let i = 0 ; i <argu.concat.length ; i++)
//     { result += argu[i]; }
//     console.log(result);
// }

// sum(5,5,3,5,2);



// _______________________________________________________


// spread operator

// ... <= also define as spread operator

// let array1=[1,2,3,4,5];

// let array2 = [...array1,6,7,8,9,10,...array1 ];

// console.log(array2);


// _______________________________________________________

// for ... of 

// let score = [82,113,122,82];

// for(let x of score){console.log(x);}

// _______________________________________________________

// templlate literals

// `` <=  is use in template literals

// let str = `                     hello

// good morning`;
// console.log(str);
 
// _______________________________________________________


// array destructuring

// let book = ["js" , "500" , "999" , "xyz"]

// let[name,pages,mrp,writtenby] = book

// console.log(name,mrp, writtenby );


// _______________________________________________________

//  object destructuring;

// same as Array {}/


// _______________________________________________________


// MODULES

// import

// export

// _______________________________________________________

// prototype

// function creature(ls){let lifespan = ls;}

// creature.prototype.breath = function(){console.log("breathing..");}



// let creature1 = new creature(70);   

// console.log(creature1);

// function person(first,last,a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;

//     // this.fullName = function(){console.log(this.firstName + ""+ this.lastName);}
// }

// person.prototype.fullName = function(){console.log(this.firstName + "sinh " + this.lastName);}

// person.prototype.__proto__ = Object.create(creature.prototype);

// let person1 = new person("yashraj","parmar", 21);
// let person2 = new person("yash","parmar",22);

// console.log(person1.breath());
// console.log(person2);


// _______________________________________________________


// class in js  
// class emp{ constructor(){  console.log("emp constructor called..");}}

// class manager extends emp{ }

// let mng1 =  new manager();

// console.log(mng1);

// _______________________________________________________

// ARROW function

// function sum(a, b){return a+b;}

// Arrow function

// let sum = (a, b) =>  a+b
// console.log(sum(5,5));

// --------------------------

// let double = a => 2*a;
// console.log(double(20));

//  --------------------------

// let ren = () => Math.random();
// console.log(ren());

// --------------------------

// document.addEventListener('click' , function(){console.log("clicked");});

// _______________________________________________________

// map function 

// let arr = [2,3,4,5,6,7];

// // let arr1 = [];

// // for (let i = 0; i < arr.length ; i++){arr1[i] = arr[i] * 2;}
// // console.log(arr1);

// let arr1 = arr.map(function(val){return (val) * 5;});

// console.log(arr1);


// _______________________________________________________

// filter function

// let arr = [1,2,3,11,22,33,0 ,0,100]

// let arr1= arr.filter( val => val < 10);

// console.log(arr1);

// _______________________________________________________

// let Student = {}

