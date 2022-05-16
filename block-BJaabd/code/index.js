// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = Number(prompt("enter age"));
switch (true) {
  case age < 55 && age > 11:
    alert("you can participate");
    break;
  case age < 11 && age > 4:
    alert("you are too young to participate in the marathon");
    break;
  case age < 4:
    alert("hey kiddo! can you walk ?");
    break;  
  case age > 55:
    alert("you are too old to participate in the marathon");
    break;    
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let count = +prompt("enter the number of e");
const start = "h";
const end = "llo";
let middle = "";
for(let i = 0; i < count; i++){
  middle += "e";
}
alert(start + middle + end);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let sum = 0;
let number = prompt("enter a number");
for (let i = 1; i <= number; i++ )
{
  sum += i;
}
alert("the value of sum is "sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let value = Number(prompt("enter value"));
switch (number) {
  case value == 1:
    alert(" ONE");
    break;
    case value == 2:
    alert(" TWO");
    break;
    case value == 3:
    alert(" THREE");
    break;
    case value == 4:
    alert(" FOUR");
    break;
    case value == 5:
    alert(" FIVE");
    break;
    case value == 6:
    alert(" SIX");
    break;
    case value == 7:
    alert(" SEVEN");
    break;
    case value == 8:
    alert(" EIGHT");
    break;
    case value == 9:
    alert(" NINE");
    break;
  default:
    alert("PLEASE TRY AGAIN");
    break;
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let value = Number(prompt("enter value"));
switch (true) {
  case value > 90 && vlue <= 100:
    alert("YOUR GRADE IS AA");
    break;
    case value > 80 && value <= 90:
      alert("YOUR GRADE IS AB");
      break;
      case value > 70 && value <= 80:
        alert("YOUR GRADE IS BB");
        break;
        case value > 60 && value <= 70:
          alert("YOUR GRADE IS BC");
          break;
          case value > 50 && value <= 60:
            alert("YOUR GRADE IS CC");
            break;
            case value > 40 && value <= 50:
              alert("YOUR GRADE IS CD");
              break;
              case value > 30 && value <= 40:
                alert("YOUR GRADE IS DD");
                break;
                case value < 30:
                  alert("YOUR GRADE IS FF");
                  break;
  default:
    alert("invalid marks");
    break;
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let numA = Number(prompt("enter first number"));
let numB = Number(prompt("enter second number"));
if(numA > numB){
  alert(`larger number is ${numA}`);
}else{
  alert(`larger number is ${numB}`);
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let numA = Number(prompt("enter first number"));
let numB = Number(prompt("enter second number"));
let numC = Number(prompt("enter third number"));
if(numA > 0 && numB > 0 && numC > 0)
{
  alert("the sign is '+' ");
}
else if(numA < 0 && numB < 0 && numC < 0)
{
  alert("the sign is '-' ");
}
else if(numA < 0 && numB > 0 && numC > 0)
{
  alert("the sign is '-' ");
}
else if(numA > 0 && numB < 0 && numC > 0)
{
  alert("the sign is '-' ");
}
else if(numA > 0 && numB > 0 && numC < 0)
{
  alert("the sign is '-' ");
}
else{}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let numA = Number(prompt("enter first number"));
let sign = prompt("enter the function");
let numB = Number(prompt("enter second number"));
let result;
if(sign == "add")
{
  result = numA + numB;
  alert(`the result is ${result}`);
}
else if(sign == "sub")
{
  result = numA - numB;
  alert(`the result is ${result}`);
}
else if(sign == "mul")
{
  if(numA > numB){
    result = numA * numB;
  alert(`the result is ${result}`);
  }
  else{
    alert("numA is smaller, cannot proceed");
  }
}
else if(sign == "div")
{
  if(numA > numB){
    result = numA / numB;
  alert(`the result is ${result}`);
  }
  else{
    alert("numA is smaller, cannot proceed");
  }
}
else{
  alert("invalid number");
}