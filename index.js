//Arthmetic operation 
// let a=5;
// let b=2;

// console.log("a = ",a," & b= ",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a/b=",a/b);
// console.log("a*b=",a*b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);



//uniary operator
// let a=5;
// let b=2;

// console.log("a = ",a," & b= ",b);
//a=a+1;//6
//a++;//6

//console.log("++a=",++a)//6
// console.log("a++=",a++);
// console.log(" a= " ,a);

// console.log(" --a =",--a);
// console.log(" a = " ,a);



//Assignment operator
// let a=5;
// let b=2;

//a=a+4=9
//a -=4;//a=a-4=1
//a/=4;//a=a/4=1.25
//a%=4//a=a%4=1
// a**=4//a=a**4=625
// console.log("a = ", a)




//Comparision operator
// let a=5;
// let b=5;

//console.log("5==2",a==b);//false
// console.log("a!=b",a!=b)//true
//console.log("a==b",a==b)
//console.log("a===b",a===b)//false
// console.log("a!==b",a!==b)
// console.log("a>4",a>4)//true
// console.log("a<4",a<4)//false
// console.log("a<=b",a<=b)//true
// console.log("a>=b",a>=b)//true


// logical operator
// let a =6;
// let b =5;

// let cond1 = a>b;//true
// let cond2 = a===b;//false
// console.log("cond1 && cond2 = " , cond1 && cond2);//false
// console.log("cond1 || cond2 = " , cond1 || cond2);//true
// console.log("cond1 != cond2 = " , cond1 != cond2 );//true
// console.log("cond1 && cond2 = ",a>b && a===b) 



//Conditional Statement

//if ke andr if
// let age = 19;
// if(age>18){
//     console.log("you can vote")
// }
// if(age>19){
//     console.log("you can't vote")
// }
// let mode = "dark";// is question me if ke baad bhi if use kiye hai , ye bhi kr skte hai lekin if ke sath elif or else zada logical rhega
// let color;
// if(mode==="dark"){
//     color = 'black';
// }
// if(mode === "white"){
//     color = 'white'
// }
// console.log(color)

//if -else statement
// let mode = "light";
// let color;
// if(mode==="black"){
//     color = "black";
// }else{
//     color = "white";

// }
// console.log(color)

// let num = 11;
// // if(num%2===0){
// //     console.log("Even");
// // }else{
// //     console.log("odd");
// // }
// if(num%2===0){
//     console.log(num , "Even");
// }else{
//     console.log(num , "odd"); 
// }

//else-if statement
// let mode = "white";
// let color;

// if(mode==="black"){
//     color = "dark";
// }else if(mode==="pink"){
//     color = "bright";
// }else if(mode==="white"){
//     color = "white";
// }else{
//     color ='blue';
// }console.log(color)


// Ternary operators
// let age = 19;
// let result = age >=18 ? "adult" : "not adult";
// console.log(result)
// let result = age >=18 ? "console.log(adult)" : "console.log(not adult)";


// Switch statement
// const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const m = "hello";
//     console.log(m);
//     break;
//   case "say_hi":
//     const message = "hi";
//     console.log(message);
//     break;
//   default:
//     console.log("Empty action received.");
// }


//prompt and alert
// window.alert("hey my name is ayaz");
// let num = prompt("");
// if (num % 5 === 0) {
//     alert(num + "is a multiple of 5");
// } else {
//     alert(num + "is not a multiple of 5");
// }


// let age = prompt("Enter Your Age For Marriage");
// if(age >= 18){
//     alert("Elligible for marriage");
// }else{
//     alert("Not Ellible");
// }

// let age = prompt("Enter Your Age For Marriage");
// if(age >= 18){
//     document.write("Elligible for marriage");
// }else{
//     document.write("Not Ellible");
// }
// / let num = prompt("enter a number")

// if (num % 5 ===0 ){
//     console.log(num," is a multiple of 5 ")
// }else{
//     console.log(num,"is not multiple of 5")
// }

let score = prompt("enter your score(0-100")
let grade;

if(score>=90 && score <=100){
    grade = "A";
}else if(score >=70 && score<=89){
    grade="B"
}else if (score>=60 && score<=69){
    grade = "C"
}else if (score>+50 && score <=59){
    grade = "D"
}
console.log("according to your scores ,your grade was; " ,grade)











































// console.log(5+5.8 == 10.8)
// console.log(0.2+0.1 == 0.3)//false kyuki decimal point 0.3 infinite tk ja rha hai

// console.log(0.3+0.2==0.5)
// console.log(2+1 == 3)
