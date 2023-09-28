// alert();
// document.getElementById("h").innerHTML = "yashraj";

// document.write("yash");

// document.write("yasharj");

// console.log("yashraj")

// var a;
// a = 10;
// alert(a);


// var x = 2;
// var y = 3;
// var a = x+y;
// alert(a);

//         var x = 2;
//         var y = 3;
//         var a = x+y;
//         console.log(a);

//         let x = 2;
//         let y = 3;
//         let a = x+y;
//         console.log(a);

//         const x = 2;
//         const y = 3;
//         const a = x+y;
//         console.log(a);

//         var x = 2;
//         let y = 3;
//         const a = x+y;
//         console.log(a);



//         const isnt change
//         let x=5;
//         const y=5;



//         x=10;
//         y=10;

//         alert(x+y);

//         case sensi...
//         empty can also declare;

//          operator
//         "=" = is assign operator

//          % is a modular reminder


//         let x;
//         let y;
//         let z;

//         x=10 ;
//         y=10;

//         x += 2;

//         console.log(x);  

//          x = x+2; == x += 2;

//         let x=5;
//         let y = 10;
//         let z;

//         z = x ** 2;
//         console.log(z);

//         ** = power  x=5; x**5 ; 5*5*5


//         let x=5;  its a number 
//         let x='5'; its a String

//         + join string   +" "+ join also(space);



//          let x=5;
//          x++;
//         x = x + 1 ; is same as x++;
//         console.log(x);
//         -- also - 



//          Data types in js


//         => Boolean : true or false
//         let x= 2>3;
//         console.log(x);

//         => array 
//         let x = ["yash","raj","sinh"];
//         console.log(x);


//         => object
//         let man = {name:"yashraj", age:"21"};
//         console.log(man);

//         undefined is a data type


//         typeof is a oprator

//         let x = typeof "yashraj";
//         console.log(x);

//        let  x = "yash"
//        alert(`raj ${x}`);





//     comparison and logical operator
//     == equal to 
//     === equal value and equal type chek the data type    

//      =>  != not equalto

//     8 != 5 = true;
//     5 != 5 = false;

//      !== not equal to value or type


//     > , < , >= , >= , 



//     logical operator

//     && and operator

//     || or operator
//    ( 5 == 5  || 5 ==6 ) true
//    ( 5 == 7  || 5 ==6 ) false

// ! not operator 
// let x = 5;
// let y = 5;

// console.log(!(x == y))


//  condition if , else , else if ,nested if = if(){if(){} else{}};

// let age = 19;
// let haveLicense = 'yes'
// let expire = 'yes'

// if (age > 18 && haveLicense == 'yes')
// {


//     if(age > 18 && expire == 'yes')
//     {
//         alert("plz upgrade it");
//     }else
//     {
//         alert("you can drrive");
//     }

// } else if(age > 18 && haveLicense != 'yes')
// {
//     alert("apply to the license");
// }
// else if(age == 18 && haveLicense != 'yes')
// {
//     alert("apply to the license");
// }

// else 
//   {
//     alert("you can not drive");
//   }
//     {} block





// turnury operator

// let y; //if 0 loggedout if 1 login
//  y= 0;
// if(y == 1)
// {
//     document.write('login');
// }else
// {
//     document.write('logout');
// }
// ? : is like to ef else

// => turnury operator
// let isLoggin = 0;
// let option = isLoggin == 1 ? "logout" : "login" ;
// document.write(option);



//  ?? is used like else{}
// let user ;
// // user = "YASHRAJ";
// alert(user ?? "guest");


// -----------------------------------------------------

// swithch in js

// let input ;
// input= 0;

// if(input === 1 || input === "y" ||input === "yes"){document.write("continue");}
// // else if(input === "y"input === "yes"){document.write("continue");}
// // else if(input === "yes"){document.write("continue");}
// // else if(input === "0"){document.write("end...");}
// // else if(input === "n"){document.write("end...");}
// // else if(input === "no"){document.write("end...");}
// else{document.write("wronginput");}

//  also

// if(input === 1 || input === "y" ||input === "yes"){document.write("continue");} we can write like this use to || or operator


// === comparison

// switch use
// let input ;
// input= "yes";

// switch(input)
// {
//         case 1:
//         case "y":
//         case "yes":
//         document.write("continue...");
//         break;
//         case 0:
//         case "n":
//         case "no":
//         document.write("end...");
//         break;

//         default :
//         document.write("wrong input");
// }


// ------------------------------------------------------------------------------------------

//  loop in js
//  basic loop of js while , do while , for  work like repeat

// 1.while loop


// let counter = 12;

// do  {
//     document.write('yashraj');
//     counter++;
// }while
// (counter <= 10);        

// let counter = 1;
// let sum = 0;

// do(counter < 10){
//     if (counter % 2 == 0){
//     sum = sum + counter;
// }
// counter++;
// }

// document.write(sum)



// for loop
// let counter = 10;

// for loop takes all in one
// for (let counter = 1; counter <= 10; counter++)
// {
//         document.write('yashraj');

//     }


// => break, continue and nested loop
// break break hear
// if (x==5) continue ; then skip the 5 and continue 

// for (let counter = 1; counter <= 20; counter++){
// if(counter==10)
// // break;                                        <= break
// continue;                                        <=continue

//     document.write(counter)
//     document.write('<br></br>')
// }


// => nested loop

// for (let counter = 1; counter <= 20; counter++){ 
//     if (counter == 5){break;}

//         document.write(counter);
//         document.write('<br>');

//    outer: for (let counter2 = 1 ; counter2 < 6; counter2++ ){

//         if (counter2 == 5){break;}
//         document.write('yashraj');
//         document.write('<br>');
//         continue outer; // anme of loop
//     }
//     }



// ---------------------------------------------------------------------------------------------------

//  alert , prompt and confirm

// let name =prompt("enter you name" , enter your name);
// if(name != null){document.write(name);}
// else{
//     document.write("enter your name")
// }



// let responce = confirm ('are you sure to enter');

// if(responce){ document.write("enterd")}
// else{ document.write("notenterd")}


// --------------------------------------------------------------------------------------------------------

//  type conversion  (data type conversion)
// string()

// let type = true;
// document.write(typeof type);
// let type2 = String(type);
// document.write("<br>")
// document.write(typeof type2)

// number()

// let type = true;
// document.write(typeof type);
// let type2 = Number(type);
// document.write("<br>")
// document.write(typeof type2)


// boolean()

// let type = 1;
// document.write(typeof type);
// let type2 = Boolean(type);
// document.write("<br>")
// document.write(typeof type2)


// --------------------------------------------------------


// string manipulation

// let str = "yashraj"
// let  str1 = `hello ${str}`

// document.write(str1);            <= use one var to another var `${var}`

// \n skip var

// let string = "yashraj \\  parmar";
// document.write(string);
// console.log(string);

// /t giv a tab


// .length show a length ,
// let string = "yashraj parmar";
// document.write(string.length);
// console.log(string.length);


// position // fetch
// let string = "yashraj parmar";
// document.write(string[3]);
// console.log(string[3]);

// join String +

// let string = "yashraj";
// let String2 = "PARMAR";
// document.write(string + "  SINH "  +String2);    

// compar string ==


// => concat

// let str = "yashraj";
// let str1 = "parmar";
// let str2 = str.concat(" ",str1);
// document.write(str2)

// => substr remove part of string

// let str = "this is a javascript programming.and this a is a ";
// let substr = str.substr(8,15);

// document.write(substr)

// => substring

// let str = "this is a javascript programming.and this a is a ";
// let substr = str.substring(8,15);

// document.write(substr)

// position  indexof  if search from last then use lastindexof

// let str = "this is a javascript programming.and this a is a ";
// let substr = str.indexOf('and');

// document.write(substr)


// remove wider space; space have from strat and and  (trim)(trimStart)(trimEnd)

// let str = "  this is a javascript pr   ogramming  .and this a is a   ";
// let substr = str.trim();

// document.write(substr);
// document.write("<br>")
// document.write(str);

// => toUpperCse();      ------
// => toLowercase();     ------ = to change lovw    er and uppr case


// replace func
// let str = "this is a javascript programming.and this a is a ";
// let substr = str.replace('and' , 'or');

// document.write(substr)

// includes have or not


// ----------------------------------------------------------------------------------------------------\

// => ARRAY [] , create new arry = new Array,

// let number= [1,2,3,4,5];

// document.write(number[3]);

// let number= [1,2,3,4,5];
// number[4] = "0";

// document.write(number[3]);

// -----------------------------------------------

// OPERATion on array
// .length show length


// let car = ["aa","bb","cc","dd"];
// car.push("ee");

// document.write(car);

// .push add element on last
// .unshift elements add on first
// .pop remove element from last 
// shift can remove element from first
// splice(position from, toposition)
// []; blank the Array || or .length = 0; this for empty array
// indexof to chek position in num..
// arrayis.array to chek array or var
// split('') split the word , , ,...
// .join is a join a array
//  join two or more arrey  = concat

// let text = "this is a random text";

// let word = alpha.join(' | ')




// let car = ["aa","bb","cc","dd"];
// car.unshift("ff");

// document.write(car);

// -----



// let alpha = ["aa","bb","cc","dd"];
// let number= [1,2,3,4,5];

// let newarr = alpha.concat(number);



// document.write(newarr);


// ---------------------------------------------------------------------

// => multi dimantional array create 


// let alpha = ["aa","bb","cc","dd"];
// let number= [["aa","1"],["bb","2"],["cc","3"],["dd","4"]]    // arry`s array

// document.write(number[0]);

// ---------------------------------------------------------------------------------------

// let alpha = ["aa","bb","cc","dd"];  
// let length = alpha.length;
// for (i = 0; i < length; i++);

// {
//     document.write(`element ${i} is ${alpha[i]}`);
// }    

// ----------------------------------------------------------------------------------------------


//  ======>

//          FUNCTION
//         alert();

//         two types os function

//         predefine
//         userdefine

// table


// function table (){
//     for (i = 1; i<=10; i++)
// { document.write(`11 x ${i} = ${11*i}` );
// document.write("<br>")
// }
// }
//     table(); 
//     table();
//     table();
//     table();
//     table();

// ------------------------------------------------------------->



//  paraeaters and arguments

// function table (num){
//     console.log('hello');
//         for (i = 1; i<=10; i++) 
//     { 
//         document.write(`${num} x ${i} = ${num*i}` );
//     document.write("<br>");

//     }
//     document.write("<br>");
//     }
//         table(1); 

//         document.write("<br>");
//         table(2); 

//         document.write("<br>");
//         table(3); 

//         document.write("<br>");
//         table(4); 

//         document.write("<br>");


//  also we can use two perameaters ex.
// //  function  add (num1,num2){}  
// document.write(num1+num2;)
//  }
//   add (5,6);                     

// ----------------------------------------------------------------------------------------------



// the arguments objecs


// the arguments object

// function add (){
//             document.write(arguments[2]);
// }

// add(1,3);
// add(1,1,1);
// add(1,2,34,455,6778);



// // =>   
// function add() {
//     if (arguments.length == 0) {
//         document.write("peraemater not passed ");
//     }
//     else {
//         let sum = 0;
//         for (let i = 0; i < arguments.length; i++) {
//             sum += arguments[i];
            
//             document.write("i arguments ", arguments[i]);
//         }
//         // console.log("sum ", sum)
//     }
// }

// add(10, 23, 354, 41, 5);


// function mul(){
//     if (arguments.length == 0){
//         document.write("enter the number");
//     }
//     else{
//         let mul = 0;
//         for (let i = 1; i < arguments.length ; i++);{
//             mul = mul * arguments[i];
//         }
//         document.write(mul);
//     }
// }
// mul(1,2);   

// ---------------------------------------------------------------------------------


// return


// function add(a,b){ (a+b); return 100;}
     

// let c=add(5,5);
// document.write(c)


//  ==> compare with return


// function  compare(a,b){
//             if(a < b){return "a is small then b"}
//             if(a>b){return " a is bigger then b"}
//             else{ return "a == b"}
// }
// let c = compare(4,2);
// document.write(c)


// ------------------------------------------------------------------------------------------




// variables ====>

// let //globle var....        // 

// function(){ let 1= 2};     // local var.....  declared in function  // not working out of function

// -----------------------------------------------------------


// function (){}; // anonymous ufnction


// ____________________________________________________

// expression function // declare in variable 
// let xyz = function(){};  show();

// _____________________


// set time out with anonymous function


// setTimeout(function (){ document.write("hello...")},3000);



// -------------------------------------------------------------------------------------------



// immediately invoked function

// (function (){document.write("hello...")})();    // use function in () after call (); 





// to use .innerHTML to get  A data ex <li>list 1<= (use .innerHTML to see this)</li> also change the data

// ----------------------------------------------------------------------------------------------------------------------




// ==>Object in js

// properties in js


//  {} is a Object

// let info = {firstname:  'yahsraj', lastname:'parmar'};
// document.write(info);
// console.log(info);

// let info = {firstname:  'yahsraj', lastname:'parmar'};
// info.age= 21;
// for(let key in info){document.write(key+""+info[key])}
// // document.write(info);
// console.log(info);


//  delete = delete info.lastname to delete
// find with true or false = document.write('age' in info) false
//  add = info.age = 21  to add ne data in object

















// ----------------------------------------------------------------------------------------------

//  action || function || methods in object

// let info = {firstname:  'yahsraj', lastname:'parmar' ,// method== sayHello :(function (){document.write("hello")})};
// // document.write(info);
// // console.log(info);

// info.sayHello();
// info.firstname();
// info.lastname();


// ___________________________________________________________

// ==> 'this' in Object
// __________________________

// ==> math in Object

//  math.round if 5.8 = 6
//  trunk remove point

// document.write(Math.PI);

//  ===> power;

// max
// let x= Math.max(5,7,99,82,113) 
// document.write(x);

// min

// let x= Math.min(5,7,99,82,113) 
// document.write(x);

// random print 0 to 1 

// let x= Math.random();
// document.write(x);


// let x= Math.floor(Math.random () * (20 - 10)) + 10;
// document.write(x);


// date object
//  (function(){let x = Date(); document.write(x); document.write("<br><br>")} )();

//  let x = new Date(2003,0,1,4,30,55,7);
//  document.write(x);

// (function(){let x =new Date(2003,0,1,4,30,55); document.write(x); document.write("<br><br>")} )();

// setdate;

// ----------------------------------------------------------------------------------


//  "new"  

// let person = new Object();

// person.name="yashraj"
// person.lastname="parmar"
// person.age="21"

// // document.write(person);
// console.log(person.name.toUpperCase());


// new key word


// let person = {firstname:"yashraj" , lastname:"parmar" , age:"21"}

// document.write(person.age);                                           -------------------> without new keyword

// let person = new Object();

// person.name = "yashraj";
// person.age="21";

// document.write(person.age);
// console.log(person.age);

// getter and satter


// let  person = {firstname:"yashraj" , lastname:"parmar" , age:"21" , get getName(){ ----------------getter
//     return this.firstname.toUpperCase();
// }};
// // document.write(person.firstname.toUpperCase());
// console.log(person.getName());

// satter 
// var person = {firstname:"yashraj" , lastname:"parmar" , age:"21",

// set setName(n){ 
//         this.firstname = n.toUpperCase();
// }};

// person.setName = "yash";

// document.write(person);
// console.log(person);




// -------------------------------------------------------------------------------------------------------------------------------------------




//  object constroctun method   

// function Student(first,last,age,cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
//     // this.num ="1";    -------------------------------------------------> //added after
    
//     Student.prototype.netionality = "indian";
//     }


//     let studend1 = new Student("yashraj","parmar","21","10")
//     let studend2 = new Student("xyz","abc","11","11")
//     // studend1.num ="1"  -------------------------------------------------> add new

//     document.write(studend1);
//     console.log(studend1);

//     //proto type
//     Student.prototype.netionality = "indian";

//  hoist move declaration to top
//  "use strict" is not allowed without declaratoion else js is allow to run without declaration


// ____________________________________________________________________________________________________________________________________________


//   DOM (DOCUMENT OBJECT MODEL)    

// -----------------------------------------------------------------------------------------------------------------------------------


// change attributr

// .getAttribute to use this add attribute

// .removeAttribute to use this we can removeAttribute

// .hasAttribute  to use this we can check have or not in true or false

// --------------------------------------------------------------------------------------------------------------------------------


// inline style

// let btn = document.getElementById("#btn");   

// btn.style.background = "red";

//  use with setaAttributes in inlinecss


// let btn = document.getElementById("btn");   

// btn.setAttribute('style' ,'color:red');

// alert();


// -----------------------------------------------------

// getComputedStyle to use this chek a all style of css 

// ---------------------------------------------------------

// let box = document.getElementById("box");

// box.className += " dim";

// console.log(box.classList);

// ----------------------------------------------------------

// offsetHight to know hight

// offsetWeight to know Weight


 
// let box = document.getElementById("box");

// let height = box.offsetHeight;
// let Weight = box.offsetWidth;

// console.log(height);
// console.log(width);
// ---------------------------------------------------------------


// DOM events

// function btnclick(){alert("button clicked");};

// let btn = document.getElementById("btn");   

// btn.addEventListener('click', btnclick);

// event listener

//     let  btn = document.getElementById("btn");

//     btn.addEventListener('mouseover' , function(){console.log("mouse over");});

//     btn.addEventListener('mouseout' , function(){console.log("mouse outs");});
    
//     btn.addEventListener('click' , function(){console.log("clickd");});

    
// ---------------------------------------------------------------------------------------- 

// window.addEventListener('keydown', chekkey);
// function chekkey(e){console.log(e.key);}

// -------------------------------------------------------

// window.addEventListener('scroll' , function(){})
// -----------------------------------------------------------------------------------------------.

// let btn = document.getElementById("btn");   

// btn.style.background = "red";

// -------------------------------------------

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// -----------------------------------------------

// let button1 = document.getElementById("btn");
// let URL = "https://www.google.com";
// let features = "height=100, width=100"


// button1.addEventListener('click' , function(){window.open(URL , 'google', features );})
    
// -------------------------------------------------

// let s1 =   setInterval(fun , 5000);

// function fun(){alert("hello");}
// let btn = document.getElementById("btn");

// btn.addEventListener('click' ,function(){clearInterval(s1)})

// -------------------------------------------------------------

// console.log(screen.colorDepth);