// task no:1

// let firstname = prompt("Enter your name");
// let lastname = prompt("Enter your last name");

// let fullname = firstname + " " + lastname;

// fullname = fullname.toUpperCase();
// alert("welcome! " + fullname);

// task no:2

// let favphone = prompt("Enter your favorite phone model");
// alert("My favorite phone is: " + favphone);
// favphone = favphone.length;

// alert("My favorite phone is: " + favphone );

// task no:3

// let name = "pakistani";
// let index = name.indexOf("p");
// alert("String: " + name + "\nIndex of 'p': " + index);

// task no:4


// let program = "Hello World";
// let index = program.lastIndexOf("H");
// alert("String: " + program + "\nLast index of 'l': " + index);

// task no:5

// let country = "Pakistani";
// let index = country.charAt(3);
// alert("String: " + country + "\nCharacter at index 7: " + index);


// task no:6

// let firstname = prompt("Enter your first name");
// let lastname = prompt("Enter your last name");
// let fullname = firstname.concat(" & " , lastname);
// alert("Welcome! " + fullname);

// task no:7
 
// let  city = "Hyderabad";
// let replace = city.replace("Hydera", "Faisla");
// alert("City: " + city + "\nAfter replacement: " + replace);

// task no:8


// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replace1 = message.replace(/and/g, "&");
// alert(replace1);
    
//  task no:9

// let no = "472";
// alert("Value: " + no + "\nType: " + typeof(no));
// let no1 = Number(no);
// alert("Value: " + no1 + "\nType: " + typeof(no1));

// task no:10

// let userinput1  = prompt("Enter any word");
// let upper = userinput1.toUpperCase();
// alert("User input: " + userinput1 + "\nUpper case: " + upper);

// task no:11

// let userinput  = prompt("Enter any word");
// let title = userinput.charAt(0).toUpperCase() + userinput.slice(1).toLowerCase();
// alert("User input: " + userinput + "\nTitle case: " + title);

// task no:12

// let num = 35.36;
// let str = num.toString().replace("." , "");
// alert("Number: " + num + "\nResult: " + str);

// task no:13

// let username = prompt("Enter your username");
// for(let i =0; i < username.length; i++) {
//  if(username.charCodeAt(i) === 33 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 46 || username.charCodeAt(i) === 64 ) {                                                                            
//     alert("Please enter a valid username");
//  }
// }

// task no:14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userinput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// userinput = A.indexOf(userinput);

// if (userinput !== -1) {
//    alert( userinput + " is available at index " + userinput + " in our bakery");
// }
// else{
//    alert("We are sorry. " + userinput + " is not available in our bakery");
// }

// task no:15
//let password = prompt("Enter your password");
// if (password.length >= 6) {
//    if (!isNaN(password.charAt(0))) {
//       alert("Password can not begin with a number\nPlease enter a valid password"); 
//     }
// }



// task no:16
// let university = "University of Karachi";
// let arr = university.split("");
// for (let i=0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// } 

// task no:17
// let userinput = prompt("Enter any word");
// let lastchar = userinput.charAt(userinput.length - 1);
// alert("User input: " + userinput + "\nLast character of input: " + lastchar);

// task no:18

let text = "The quick brown fox jumps over the lazy dog, the fox is very quick, the fox is very quick,  the fox is very quick";
let count = text.match(/dog/g).length;
alert("Text: " + text + "\nThere are " + count + " occurrence(s) of word 'the'");
