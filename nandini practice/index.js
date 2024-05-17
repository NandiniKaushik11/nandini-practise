// // // // // // VARIABLES
// // // // // // let age = 25;
// // // // // // let price = 34;
// // // // // // console.log(`The price of the cloth: ${price} rs`);
// // // // // // console.log(typeof age);

// // // // // // let fullName = "Nandini Kaushik";
// // // // // // let age = "23";
// // // // // // let isWorking = False;
// // // // // // document.getElementById("p1").textContent = `My name is  ${fullName}`;

// // // // // // ARTITHMATICS OPERATORS
// // // // // // let students = 30;
// // // // // // students += 1;
// // // // // // students -= 1;
// // // // // // students *= 1;
// // // // // // students /= 1;
// // // // // // students %= 1;
// // // // // // students **= 2;
// // // // // // students++ ;
// // // // // // students--;

// // // // // // console.log(students);

// // // // // // operator precedence
// // // // // // let result = 6/2 **(2+7);
// // // // // // console.log(result);

// // // // // // HOW TO ACCEPT USER INPUT

// // // // // // let username;
// // // // // // username = window.prompt("whta's your name");

// // // // // // // TYPE OF CONVERSION
// // // // // // let age = window.prompt("how old are you");
// // // // // // age = Number(age);

// // // // // // age+=1;
// // // // // // console.log(age);
// // // // // //  let x = "pizza";
// // // // // //  let y = "pizza";
// // // // // //  let z = "pizza";

// // // // // //  x = Number(x);
// // // // // //  y = String(y);
// // // // // //  z= Boolean(z);

// // // // // //  console.log(x, typeof x);
// // // // // //  console.log(y, typeof y);
// // // // // //  console.log(z, typeof z);

// // // // // // CONSTANTS:
// // // // // // const PI = 3.14;
// // // // // // let radius;
// // // // // // let circumference;

// // // // // // pi = 32.1;

// // // // // // radius = window.prompt("Enter the raduis");
// // // // // // radius = Number(radius);

// // // // // // circumference = 2 * pi * radius;
// // // // // // console.log(circumference);
// // // // // // document.getElementById("mysubmit").onclick = function(){
// // // // // //     radius = document.getElementById("mytext").value;
// // // // // //     radius = Number(radius);
// // // // // //     circumference = 2 * PI * radius;
// // // // // //     document.getElementById("myh3").textContent = circumference + "cm";
// // // // // // }

// // // // // // RANDOM NUMBER GENERATOR:
// // // // // // let randomNum = Math.floor(Math.random ()* 6);
// // // // // // console.log(randomNum);

// // // // // // let min = 50;
// // // // // // let max = 100;
// // // // // // let randomNum = Math.floor(Math.random ()* (max-min))+ min;
// // // // // // console.log(randomNum);

// // // // // // const mybutton = document.getElementById("mybutton");
// // // // // // const mylabel = document.getElementById("mylabel");
// // // // // // const min = 1;
// // // // // // const max = 6;
// // // // // // let randomNum;
// // // // // // mybutton.onclick = function(){
// // // // // // randomNum = Math.floor(Math.random()* max) + min;
// // // // // // mylabel.textContent = randomNum;
// // // // // // }

// // // // // // IF ELSE STATEMENT
// // // // // // let age = 23;
// // // // // // if( age > 18){
// // // // // //     console.log("You are an Adult!");
// // // // // // }
// // // // // // else( "You are a Teen");
// // // // // // else if
// // // // // // let age = 0 ;
// // // // // // if (age>=18){
// // // // // //     console.log ("You are ready to get licence..");
// // // // // // }
// // // // // // else if(age<=16){
// // // // // //     console.log("You are under age..");
// // // // // // }
// // // // // // else if ( age == 0){
// // // // // //     console.log("You are infant");
// // // // // // }
// // // // // // else if(age>=100){
// // // // // //     console.log("You are over age to get the licence..");
// // // // // // }
// // // // // // else {
// // // // // //     console.log ("You do not get licence..");
// // // // // // }

// // // // // const mytext = document.getElementById("mytext");
// // // // // const mysubmit = document.getElementById("mysubmit");
// // // // // const resultelement = document.getElementById("resultelement");
// // // // // let age;
// // // // // mysubmit.onclick = function(){
// // // // //     age = mytext.value;
// // // // //     age = Number(age);

    
// // // // // if (age>=100){
// // // // //     resultelement.textContent= `You are ready to get licence..`;
// // // // // }
// // // // // // else if(age<=16){
// // // // // //     resultelement.textContent=`You are under age..`;
// // // // // // }
// // // // // else if ( age == 0){
// // // // //     resultelement.textContent=`You are infant`;
// // // // // }
// // // // // else if(age>=18){
// // // // //     resultelement.textContent=`You are over age to get the licence..`;
// // // // // }
// // // // // else if(age<0){
// // // // //     resultelement.textContent=`You are below the age`;
// // // // // }

// // // // // else {
// // // // //     resultelement.textContent=`You do not get licence..`;
// // // // // }


// // // // // };

// // // // // CHECKBOX STATEMENTS
// // // // const mycheckbox = document.getElementById("mycheckbox");
// // // // const visabtn = document.getElementById("visabtn");
// // // // const mastercardbtn = document.getElementById("mastercardbtn");
// // // // const paypalbtn = document.getElementById("paypalbtn");
// // // // const mysubmit = document.getElementById("mysubmit");
// // // // const subresult= document.getElementById("subresult");
// // // // const paymentresult = document.getElementById("paymentresult");

// // // // mysubmit.onclick = function(){
// // // //     if(mycheckbox.checked){
// // // //     subresult.textContent = `You are subscribed`;
// // // //     }
// // // //     else{
// // // //         subresult.textContent=`You are not subscribed`;
// // // //     }
// // // //     if(visabtn.checked){
// // // //         paymentresult.textContent=`You are paying with visa`;

// // // //     }
// // // //     else if(mastercardbtn.checked) {
// // // //         paymentresult.textContent=`You are paying with mastercard`;
// // // //     }
// // // //     else if(paypalbtn.checked) {
// // // //         paymentresult.textContent=`You are paying with paypal`;
// // // //     }
// // // //     else  {
// // // //         paymentresult.textContent=`You have to select first`;
// // // //     }
// // // // }

// // // // TERNARY OPERATOR : a shortcut to if and else statements help to assign a variable based on condition condition? codeIFtrue : codeIFfalse;
// // // let age = 10;
// // // let message = age >=18 ? "You are an adult" : "You are not an adult";
// // // console.log(message);

// // // let isStudent = true;
// // // let message1 = isStudent ? "You are a student" : "You are not a student";
// // // console.log(message1);

// // // // SWITCH STATEMENTS
// // // let day = pizza;
// // // switch(day){
// // //     case 1:
// // //     console.log(`It is Monday`);
// // //     break;
// // //     case 2 :
// // //         console.log("It is Tuesday");
// // //         break;
// // //         case 3 :
// // //         console.log("It is Wednesday");
// // //         break;
// // //         case 4 :
// // //         console.log("It is Thursday");
// // //         break;
// // //         case 5 :
// // //         console.log("It is Friday");
// // //         break;
// // //         case 6 :
// // //         console.log("It is saturday");
// // //         break;
// // //         case 7:
// // //         console.log("It is Sunday");
// // //         break;
// // //         default:
// // //             console.log(`${day} is  not a day`);
        
// // // }

// // // // STRING METHODS
// // // 1. charAT(): ye find krta hai ki konsa humne konsa number diya h jo hume us number ka aplabet dikahyega for e.g jaise nandini me phle number pe a h to a output diya ye shuru 0 se hota hai.

// // // let userName = "Nandini";
// // // console.log(userName.charAt(1));

// // // 2. indexOf method : find the first occrance means vo alphabet ka number btayega ki konse number pe h vo aplabet

// // // let userName = "Nandini";
// // // console.log(userName.indexOf("i"));

// // // 3.lastIndexOf : hume last se konse( number pe h alphabet vo show krega

// // // let userName = "Nandini";
// // // console.log(userName.lastIndexOf("d"));

// // // 4. length : string ki overall length btayega

// // // let userName = "NandiniKaushik";
// // // console.log(userName.length);

// // // 5.trim : used to remove the white space between the strings
// // // let userName = "Nandini           ";
// // // userName = userName.trim();
// // // console.log(userName);

// // // 6. toUpperCase and 7.toLowerCase

// // // let userName = "Nandini       ";
// // // userName = userName.toUpperCase();
// // // console.log(userName);   

// // // 8. repeat : how many times we want to repeat
// // // let userName = "Nandini       ";
// // // userName = userName.repeat(5);
// // // console.log(userName);

// // // 9.startsWith: it returns with a bollean if string starts with a white space
// // // let userName = "Nandini";
// // // let result = userName.startsWith(" ");
// // // if (result){
// // //     console.log("Your username cannot begin with ' '");
// // // }
// // // else{
// // //     console.log(userName);
// // // }
// // // 10.endswith : ends with white space
// // // let userName = "Nandini    ";
// // // let result = userName.endsWith(" ");
// // // if (result){
// // //     console.log("Your username cannot end with ' '");
// // // }
// // // else{
// // //     console.log(userName);
// // // }
// // // 11. includes : does not include the empty space between the strins
// // // let userName = "Nand  ini";
// // // let result = userName.includes(" ");
// // // if (result){
// // //     console.log("Your username cannot include with ' '");
// // // }
// // // else{
// // //     console.log(userName);
// // // }
// // // 12.replaceAll
// // // let phoneNumber = "1234-4567-7890";
// // // phoneNumber = phoneNumber.replaceAll("-","");
// // // console.log(phoneNumber);

// // // 13.pandstarts:jab hum koi number asign krde to us number tak pochne k liye value starting me lgti hai jaise 20 tak pochne k liye 1 add hota rhega jab tak humare total number 20 nhi hojate.
// // // let phoneNumber = "1234-4567-7890";
// // //  phoneNumber = phoneNumber.padStart("20","1");
// // //  console.log(phoneNumber);

// // // 14.padend : iske last me number add hote rhenge./

// // // let phoneNumber = "1234-4567-7890";
// // //  phoneNumber = phoneNumber.padEnd("20","1");
// // //  console.log(phoneNumber);

// // //  STRING SPLICING: creating a substring from a portion of another string.
// // // we can take this method to declare the splicing string.slice(start,end)

// // // const fullName = "Nandini Kaushik";
// // // // let firstName = fullName.slice(0,6);
// // // // let lastName = fullName.slice(0,7);
// // // // let firstChar = fullName.slice(6);
// // // // let lastChar = fullName.slice(-3);

// // // let firstName = fullName.slice( 0 ,fullName.indexOf(""));
// // // let lastName  = fullName.slice( fullName.indexOf("") +1);
// // // console.log(firstName);
// // // console.log(lastName);
// // //  console.log(firstChar);
// // // console.log(lastChar);

// // // const email = "nandinikaushik894@gmail.com";
// // // let userName = email.slice(0 ,email.indexOf("@"));
// // // let extension = email.slice(email.indexOf("@"));
// // // console.log(userName);
// // // console.log(extension);

// // // METHOD CHAINING : calling one method after another in one continuous line of code.
// // // No method chaining 
// // // let username = window.prompt("Enter Your Name");
// // // username = username.trim();
// // // let letter = username.charAt(0);
// // // letter = letter.toUpperCase();

// // // let extraChar = username.slice(1);
// // // extraChar = extraChar.toLowerCase();
// // // userName = letter + extraChar;
// // // console.log(userName);

// // // Method chaining
// // // username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLoweCase();
// // // console.log(username);


// // // LOGICAL OPERATORS
// // // AND  &&
// // // OR   || 
// // // NOT  !
// // // const temp = 25;
// // // if(temp > 0 && temp <= 30){
// // // console.log("The weather is good");
// // // }
// // // else {
// // //     console.log("The weather is bad");
// // // }

// // // STRICT EQUALITY OPERATORS
// // // = assignment operator
// // // == comparison operator(compare if values are equal)
// // // === strict equality operator (compare if values and data types are equal)
// // // != enquality operator
// // // !== strict inequality operator

// // // const PI = 3.14;
// // // if( PI != "3.14"){
// // // console.log("this is a pie");
// // // }
// // // else{
// // // console.log("this is not a pie");
// // // }

// // // WHILE LOOP : repeat the some code WHILE some condition is true
// // // if the condition is true while loop run infinity until it get crashed 

// // // let username = "";
// // // while(username === ""||username===null){
// // //     username = window.prompt(`Enter your name`);
// // // }
// // // console.log(`hello ${username}`);
// // // do while 
// // // let username ;
// // // do {
// // //     username = window.prompt(`Enter your name`);
// // // } while(username === ""||username===null)

// // // console.log(`hello ${username}`);

// // // let loggedin = false;
// // // let username;
// // // let password;
// // //  do {
// // //     username = window.prompt(`Enter Your username`);
// // //     password = window.prompt(`Enter your password`);

// // //     if(username === "myusername"&& password==="mypassword"){
// // //      loggedin = true;
// // //      console.log("You are loggedin")
// // //     }else{
// // //         console.log("You are not loggedin")
// // //     }
// // //  }while(!loggedin);

// // // FOR LOOP:repeat a code some limited amount of time
// // // for( i=1;  i<=20;  i++){
// // //     if(i==13){
// // //         //break;
// // //         continue;
        
// // //     }else{
// // //         console.log(i);
// // //     }
    

// // // }

// // // GUESS A NUMBER
// // const minNum = 1;
// // const maxNum = 100;
// // const answer = Math.floor(Math.random()*(maxNum - minNum +1))+ minNum

// // let attempts = 0;
// // let guess;
// // let running = true;

// // while(running){
// //     guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
// //     guess = Number(guess);

// //     if(isNaN(guess)){
// //         window.alert("Please enter a valid number");
// //     }else{
// //         attempts++;
// //         if(guess<answer){
// //             window.alert("TOO HIGH! TRY AGAIN");
// //         }else{
// //             window.alert(`\correct the answer was ${answer}.it took you too long`);
// //             running = false;
// //         }
// //     }
// // }

// // FUNCTIONS
// function happybirthday(username,age){

//     console.log("Happy birthday to you")
//     console.log("Happy birthday to you")
//     console.log("Happy birthday to you")
//     console.log(`Happy birth ${username} you`)
//     console.log(`Happy birthday to you ${age} years old`)

// }
// happybirthday("nandini",23);
       
// function add(x,y){
//      return add = x +y;
// }
// console.log(add(2,3));

// VARIABLE SCOPE 
// let x = 3;
// function2();
// function function1(){
//     let x = 1;
//     console.log(x);

// }
// function function2(){
//     let x = 2;
//     console.log(x);

// }

// ARRAYS

// let fruits = ["Apple","Orange","Banana"];
// fruits.push("coconut");
//  fruits.pop("coconut");
//  fruits.shift("coconut");
// fruits.unshift("coconut");
// console.log(fruits);

// // let numof = fruits.length;
// let index = fruits.indexOf("Apple");
// // IF THERE IS NO NAME IN ARRAY IT GIVES US NEGATIVE VALUE
// let index1 = fruits.indexOf("MANGO");

// // console.log(numof)
// console.log(index1);

let fruits = ["Apple","Orange","Banana","Coconut"];
// for(let i = 1;i<fruits.length;i+=2 ){
//     console.log(fruits[i]);
// }
fruits.sort();
for(let fruit of fruits){
    console.log(fruits);


}

















