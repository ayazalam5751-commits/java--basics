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

// let score = prompt("enter your score(0-100")
// let grade;

// if(score>=90 && score <=100){
//     grade = "A";
// }else if(score >=70 && score<=89){
//     grade="B"
// }else if (score>=60 && score<=69){
//     grade = "C"
// }else if (score>+50 && score <=59){
//     grade = "D"
// }
// console.log("according to your scores ,your grade was; " ,grade)

//for loops
//print 1 to 5
// for(let i = 1; i<=5; i++){
//     console.log("i=",i);
// } 
// }//calculate sum of 1 to n
// let sum = 0;
// let n = 100;
// for(let i = 1 ; i<=n ; i++){
//     sum+=i;
// }
// console.log("sum = ", sum )

//while loop
// let i = 1;//print apna college 10 times
// while(i<=10){
//     console.log("Apna college ");
//     i++;
// }

//do while loop
// let i =1;
// do{
//     console.group("Aapna college");
//     i++;
// }while(i<=10)

// do{
//     console.group("i = ",i);
//     i++;
// }while(i<=5)

//for of loops 
// let str ="java script";
// let len = 0;
// for(let i of str ){
//     //iterator --> characters
//     console.log("i=",i);
//     len++;
// }
// console.log("string len =",len)

// for in loops 
// let student = {
//     name : "ayaz",
//     age : 18,
//     cgpa : 9.5,
//     ispass : true
// };
// for (let key in student){
//     console.log("key = ", key , "value=",student[key])
// }

//que 1 print 10 100 number
// for(let i=0;i<+100;i++){
//     console.log(i)
// }
//que 2 
// for(let num = 0; num <=100; num++){
//     if(num % 2 ===0) {
//          console.log("num=",num )
// }

// }
//que 3
// for(let num = 0; num <=100; num++){
//     if(num % 2 !==0) {//odd number
//          console.log("num=",num )
// }

// }

//que4
// let gameNum =25;
// let userNum = prompt("Guess the game number :");
// document.write(userNum);


//que5
// let gameNum  = 25;
// let userNum = prompt("guess the game number: ");
// while (userNum != gameNum){
//     userNum = prompt("you entered wrong number")
// }
// document.write("congratulation")

//Strings
// let str = "ayaz alam "
// let str2 ="quadai"
// console.log(str.length)
// console.log(str2.length)
// console.log(str[3]);//z


//template literals 
// let obj = {//normal form 
//     item: "pen",
//     price : 10,
// };
//console.log("the cost of ", obj.item, "is",obj.price,"rupees");

// let obj = {//template form
//     item: "pen",
//     price : 10,
// };
// let output = ` the cost of ${obj.item} is ${obj.price} rupees `;//template string ke andr daal do
// console.log(output)

// let specialStrings = `This is template literals ${1 + 2 +5 } `
// console.log(specialStrings)

//escape characters
// let str = "apna\tcollege"//tab space a jata hai \t se
// let str = "apna\tcollege"
// console.log(str.length)// \t dono milakr 1 character count hoonge 
// console.log("apna \ncollege")// \n next line ho jata hai

//string methods 
// str = "apnaCollege";
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// document.write("loop has ended")

/ let str = "        quad patna    "// trim console.log(str.trim())
// console.log(str.trim())

// let college = "joinmyquad"// slicing concept end wala include nhi hota hai 
// console.log(college.slice(0,5))

// let str1 = "quad"
// let str2 = "ai"
// let result = str1.concat(str2);//concat method 2 strings ko joorne ka kaam krta hai
// let result = "ayaz join " + str1 + str2// ek method ye bhi hai stings ko joorne ka 
// console.log(result)

// let str = "hellololo";
// console.log(str.replaceAll("lo","y"))//replace method

// let str = "ilovejs";
// console.log(str.charAt(3));//v  

//ques7 create a username 
// let fullName = prompt("enter your full name without space");

// let userName = "@" + fullName + fullName.length
// document.write(userName)



// document.write("loop has ended")

//Array methods 
// let array = [1,2,3,4,5,]
// array.push(6)
// console.log(array)




//15/09/2026---class notes 
// let arr = [2,3,4,5,5,6,7,8,9];
// let res = []

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]%2===0){
//         res.push(arr[i])

//     }
// }
// console.log(res)

// let arr = [1,2,3,4,5];
// arr.pop();//last se one digit hat jayega [1,2,3,4]
// console.log(arr)
// arr.shift();//starting se one shift hat jayega [2,3,4,5]
// console.log(arr)
// let arr = [1,2,3,4,5,6];  
// console.log(arr.indexOf(5))//4 , isse jo value hai wo konse index pr hai
// console.log(arr.indexOf(7))
// let result = arr.join(',');//isse array ki bracket hategi
// let result = arr.join('');//isse array ki bracket comma hat jayega 
// console.log(result);

// let arr = ["bat","ball","badminton","football","hockey"]
// console.log(arr.includes("ball"));
// console.log(arr.join(","));
// console.log(arr.join(""));

// let arr2 = [1 , 2 ,3 ,4 ,5]
// console.log(arr2.toString());

// console.log(arr2.slice(1,4))//(1,4 )me 4 th wala consider nhi hoga // returns portion (non distructive)
// console.log(arr2)

// let arr = [1,2,3,4]
// console.log(arr.splice(1,3))//add remove destractive // isme last wala part consider hoga 
// arr.splice(1,3)
// console.log(arr)



// let str3 = "quad";
// let str4 = "ai";
// let result = str3.concat(str4);
// console.log(result)

// let arr5 = [1,2,3,"ayaz",9];
// console.log(arr5.reverse());
// console.log(arr5.sort())


// for(let i = 1; i<=10 ; i++){
//     console.log(i)
// }
// / for(let i = 1 ; i<=10 ; i++){
//     for(j = 1 ; j<=10 ;j++){
//         console.log(j)
//     }
// }
// for(let i = 1; i<=10;i++){
//     console.log(20*i)
// }
// for(let i =1 ; i<=5; i++){
//     let star = ""
//     for(let j=1 ; j<=5; j++){
//         star+="*"
//     }
//     console.log(star)
// }
// for(let i =1 ; i<=5 ; i++){
//     num = ""
//     for(let j =1 ; j<=5 ; j++){
//         num += j

//     }
//     console.log(num)
// }
// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));

// let sum = a + b;

// document.write("Sum = " + sum);
//Arrys

// let marks = [ 97 ,34,67,89];
// console.log(marks)
// console.log(marks.length);//property
// let heroes = [ "iron man", "spider man ","hulk","lucky", "shinchan"];
// console.log(heroes);
// console.log(heroes.length)
// console.log(marks[0])
// console.log(marks[4])
// console.log(marks[0]=77)
// console.log(marks)

//for loop
// let heroes = [ "iron man", "spider man ","hulk","lucky", "shinchan"];
// for(let idx=0; idx<heroes.length;idx++){
//     console.log(heroes[idx]);
// }
//for of loop
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities = ["patna ", "pune", "delhi","mumbai "]
// for(let city of cities){
//     console.log(city)
//     console.log(city.toUpperCase())
// }

//que7
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks ){
//     sum+=val;
// }
// let avg = sum /marks.length;
// console.log(`avrg marks of the class = ${avg}`);

//que8
//for of loop 
// let items =[250,645,300,900,50];
// let i = 0;
// for(let val of items){
//     let offer = val/10;
//     items[i]=items[i]-offer;
//     console.log(`value of offer =${items[i]}`);
//     i++;
// }
//for loop 
// for(let i =0;i<items.length ; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;

// }
// console.log(items);

//slice 
// let marvel = [ "thor","iron man ", "spider man ","ant man "];
// console.log(marvel.slice(1,2))

//splice method //splice(startidx,delcount,new)
// let arr = [ 1,2,3,4,5,6,7 ];
// console.log(arr.splice(2,2));
// console.log(arr.splice(2,2,101,102,103));
// console.log(arr)

//add elements 
// arr.splice(2,0,101);
// console.log(arr)

//delete elements 
// arr.splice(3,1)
// arr.splice(2,2)

// replace elements 
// arr.splice(2,1,109);
// console.log(arr)

// let company = ["bloomberg ","microsoft","uber","google","ibm","netflix"];
// company.splice(0,1)
// console.log(company)
// company.splice(2,1,"ola")
// console.log(company)
// company.splice(6,0,"amazon")
// console.log(company)











































// console.log(5+5.8 == 10.8)
// console.log(0.2+0.1 == 0.3)//false kyuki decimal point 0.3 infinite tk ja rha hai

// console.log(0.3+0.2==0.5)
// console.log(2+1 == 3)
