//  Template literal

/* Do the following:
- Define a variable named `username` using `const` keyword and assign your name as a value.
- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.
*/
const username = `somanshu`;
let bio = `learning to code`;

let firstName = "Arya";
let lastName = "Stark";

/* Do the following using `+` operator
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/
alert("I am somanshu and my bio is learning to code");
alert("I'm arya stark of winterfall")

/* Do the following using string template literal
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/

alert("I am somanshu and my bio is learning to code");
alert("I'm arya stark of winterfall")



let amount = 200;
const taxPercent = 10;

/* Use string template literal:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/

alert("the total amount is" amount \n "the tax amount is" [(amount * taxPercent ) / 10] );

/* Use double quote and escape character:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/

alert("the total amount is" amount \n "the tax amount is" [(amount * taxPercent ) / 10] );
