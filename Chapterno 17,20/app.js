// //   Write a program to initialize a 2D array with the following values: , task no:2
// // 0 1 2 3
// // 1 0 1 2
// // 2 1 0 1

// let array =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// console.log(array);

// // for loop numeric counting 1 to 10,taskno:3

// for(let i=1 ; i<=10 ; i++){
//     console.log(i);
// }
// // multiplication table of any number using for loop, task no:4

// let table = +prompt("Enter a number to show its multiplication table");
// let times = +prompt("Enter length of multiplication table");

// for(let i=1 ; i<=times; i++) {
//     console.log(table + "x" + i + "=" + table*i);
// }

// // array ,taskno:5

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log(fruits);


// // counting, task no:6
// console.log("Counting:");
// for (let i=1; i<=15; i++){
//     console.log(i);
// }
// console.log("Reverse counting:");
// for(let i=10; i>=1; i--){
//     console.log(i);
// } 

// console.log("Even:");
// for(let i=0; i<=20; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// console.log("Odd:");
// for(let i=0; i<=20; i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

// console.log("Series:");
// for(let i=1; i<=20; i++){
//     if(i%2===0){
//         console.log(i+"K");
//     }
// }


// // Searching in array, task no:7

// let A =["cake", "apple pie", "cookie", "chips", "patties"];
// let search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// let found = false;

// for(let i=0; i<A.length; i++){
//     if(A[i]===search){
//         found =true;
//         console.log(search + " is available at index " + i + " in our bakery");
//         break;
//     }
//     else{
//         found = false;
//         console.log("We are sorry. " + search + " is not available in our bakery");
//         break;
//     }
// }

let B =[24, 53, 78, 91, 12,43];
let largest =B[0];
for(let i=0; i < B.length; i++){
    if(B[i] > largest){
        largest =B[i];
        console.log("The largest number is " + largest);
    }
}

let C = [24, 53, 78, 91, 12];
let smallest = C[0]; 

for (let i = 1; i < C.length; i++) {
  if (C[i] < smallest) {
    smallest = C[i];  
console.log("The smallest number is:", smallest);
}
}



// multiples of 5 , task no:10


for(let i=5; i<=100; i+=5){
    console.log(i);
}