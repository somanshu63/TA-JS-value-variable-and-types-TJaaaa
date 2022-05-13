// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = prompt(`enter a number`);
if (num = (num % 2 == 0))
{
  alert("number is even");
}else
{
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = prompt("enter first number");
let numB = prompt("enter second number");
if (numA && numB < 100)
{}
else
{
  alert("max valus is 100");
}

// 3. Convert the above code using`?` terniary operator
let numA = prompt("enter first number");
let numB = prompt("enter second number");
(numA && numB) < 100 ?
 console.log
 : 
 alert("max value is 100");

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let housename = prompt("enter house name");
if(housename == "stark")
{
  alert("winter is coming")
}
else if(housename == "lannister")
{
  alert("a lannister always pays his debt")
}
else{
  alert("all men must die")
}

// 5. Convert the above code using`?` terniary operator
let housename = prompt("enter house name");
housename == "stark" ?
  alert("winter is coming")
  :
  housename == "lannister" ?
  alert("lannister always pays his debt")
  :
  alert("all men must die");  

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = prompt("enter any month");
switch (true) {
  case month == 1:
    alert("number of days = 31");
    break;
    case month == 2:
    alert("number of days = 28");
    break;
    case month == 3:
    alert("number of days = 31");
    break;
    case month == 4:
    alert("number of days = 30");
    break;
    case month == 5:
    alert("number of days = 31");
    break;
    case month == 6:
    alert("number of days = 30");
    break;
    case month == 7:
    alert("number of days = 31");
    break;
    case month == 8:
    alert("number of days = 31");
    break;
    case month == 9:
    alert("number of days = 30");
    break;
    case month == 10:
    alert("number of days = 31");
    break;
  case month == 11:
  alert("number of days = 30");
  break;
  case month == 12:
  alert("number of days = 31");
  break;
  default:
    alert("not a month number");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = prompt("enter salary amount");
switch (true) {
  case salary <=20000:
    salary = salary - ((salary * 10) / 100);
    alert(`in hand salary is ${salary}`);
    break;
    case salary <=40000:
      salary = salary - ((salary * 20) / 100);
      alert(`in hand salary is ${salary}`);
      break;
      case salary >50000:
        salary = salary - ((salary * 30) / 100);
        alert(`in hand salary is ${salary}`);
        break;
  default:
    break;
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt("enter marks");
if(marks > 100)
{
  alert("marks can't be greater than 100");
}
else if(marks > 80 && marks < 100)
{
  alert("grade A");
}
else if(marks > 50 && marks < 80)
{
  alert("grade B");
}
else if(marks > 30 && marks < 50)
{
  alert("grade C");
}
else{
  alert("grade D");
}

let marks = prompt("enter marks");
switch (true) {
  case marks > 100:
    alert("marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("grade A");
    break;
    case marks > 50 && marks < 80:
    alert("grade B");
    break;
    case marks > 30 && marks < 50:
    alert("grade C");
    break;
    case marks < 30:
    alert("grade D");
    break;
  default:
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");
if(weather == "sunny")
{
  alert("wear a T-shirt");
}
else if(weather == "rainy")
{
  alert("Don't forget to take your raincoat");
}
else if(weather == "hot")
{
  alert("Get a hanky");
}
else if(weather == "freezing")
{
  alert("Get your sweeter on");
}
else{
  alert("Not a valid input");
}

let weather = prompt("What is the weather like outside?");
switch (true) {
  case weather == "sunny":
    alert("wear a T-shirt");
    break;
    case weather == "rainy":
      alert("Don't forget to take your raincoat");
      break;
    case weather == "hot":
      alert("Get a hanky");
      break;
    case weather == "freezing":
      alert("Get your sweeter on");
      break;
  default:
    alert("Not a valid input");
    break;
}