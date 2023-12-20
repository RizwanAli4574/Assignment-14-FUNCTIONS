document.write("<b> Q NO 1 Write a function that displays current date & time in your browser. </b>");
document.write("<br>")
document.write("<br>")

// Creat a function for current date and time 
function displayTime() {
     // Create a new Date object
    let currentDate = new Date();

      // Get date and time components
      let date = currentDate.toLocaleDateString();
      let time = currentDate.toLocaleTimeString();

        // Display date and time in the browser
       
        document.write( " Current Date " + " " + date + "<br>"  + "And time" + " " + time)
       
    
}
// Call the function to display date and time 
displayTime();

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 2 Write a function that takes first & last name and then it greets the user using his full name. </b>");
document.write("<br>")
document.write("<br>")

// Creat a function for user full name
function userName() {
    let firstName = prompt("Please enter your first name");
    let lastName = prompt("Please enter your last name");

    if (firstName && lastName){
        let fullName = `${firstName}  ${lastName}`;
        document.write(`Hello  ${fullName} Welcome`);
    }else {
        alert("Invalid input! please enter first and last name")
    }
    
}
// call the function for display in the browser
userName();

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 3 Write a function that adds two numbers (input by user) and returns the sum of two numbers. </b>");
document.write("<br>")
document.write("<br>")

// Creat a function for add two numbers 
function addTwoNumbers() {
    let num1 = parseFloat(prompt("Enter the first number"))
    let num2 = parseFloat(prompt("Enter the second number"))

    if (!isNaN(num1) && !isNaN(num2)){
        let sum = num1 + num2
        return sum;
    }else {
        return "Invalid input. Please enter valid numbers.";
    }
   
}

// call the function
let result = addTwoNumbers();

document.write(` Total is ${result}`)

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 4 Write a function that creat a calculater </b>");
document.write("<br>")
document.write("<br>")

// Craeat a function for calculater
function calculater() {
    let num3 = parseFloat(prompt("Enter the first number"));
    let num4 = parseFloat(prompt("Enter the second number"));
    let opr = prompt("Enter the operator (+, -, *, /):");

    let result1;

     switch (opr) {
        case '+':
            result1 = num3 + num4
            break;
        case '-':
            result1 = num3 - num4
            break;
        case '*':
            result1 = num3 * num4
            break;
        case '/':
            if (num3 !== 0) {
                result1 = num3 / num4
            }else {
                document.write("<p>Error: Division by zero is not allowed.</p>");
                return;
            }
            break;
        default:
            document.write("<p>Error: Invalid operator. Please use '+', '-', '*', or '/'.</p>");
            break;
     }

     document.write(`<p>The result of ${num3} ${opr} ${num4} is: ${result1}</p>`);
   
}

// Call the function
calculater();

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 5 Write a function that squares its argument. </b>");
document.write("<br>")
document.write("<br>")

  function squareNmuber(number) {
    return number * number 
    
  }
  let num = parseFloat(prompt("Enter any number"));
  let squaredNum = squareNmuber(num)
  document.write(`The square of ${num} is: ${squaredNum}`);

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 6 Write a function that computes factorial of a number. </b>");
document.write("<br>")
document.write("<br>")

  function calculateFactorial(){
    let userInput = prompt("Enter a number:");
    let number = parseInt(userInput);

    if (!isNaN(number) && number >= 0){
        let factorial = 1;

    if (number === 0 || number === 1) {
      document.write(`<p>The factorial of ${number} is: 1</p>`);
      return;
    }

    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }

    document.write(`<p>The factorial of ${number} is: ${factorial}</p>`);
  } else {
    document.write("<p>Please enter a valid non-negative number.</p>");
  }
  }

 calculateFactorial();

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 7 Write a function that take start and end number as inputs & display counting in your browser. </b>");
document.write("<br>")
document.write("<br>")

// Creat function for counting 
function counting() {
    let start = parseInt(prompt("Enter the start number:"));
    let end = parseInt(prompt("Enter the end number:"));
    
    if (!isNaN(start) && !isNaN(end) && start <= end ){
        document.write("<p>Counting:</p>")
        for (let i = start; i <= end; i++){
            document.write( i + " ")
        }
    }else {
        document.write("<p>Please enter valid start and end numbers where start is less than or equal to end.</p>");
    }
}

// Call the function 
counting();

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 8 Write a nested function that computes hypotenuse of a right angle triangle. </b>");
document.write("<br>")
document.write("<br>")

  function calculateHypo(base , perpendicular) {
    function calculateSquare(side) {
        return side * side;
        
    }
    let baseSquare = calculateSquare(base);
    let perpendicularSquare = calculateSquare(perpendicular);

    let hypoSquare = baseSquare + perpendicularSquare;
    let hypotenuse = Math.sqrt(hypoSquare);

    return hypotenuse;

  }
 
   // usage:
   let baseInput = parseFloat(prompt("Enter the length of the base:"));
  let perpendicularInput = parseFloat(prompt("Enter the length of the perpendicular:"));

  if (!isNaN(baseInput) && !isNaN(perpendicularInput) && baseInput > 0 && perpendicularInput > 0){
    let result = calculateHypo(baseInput , perpendicularInput);
    document.write(`The hypotenuse of the right-angle triangle is: ${result}`);
  }else {
    document.write("Please enter valid positive numbers for base and perpendicular.");
  }

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 9 Write a function that calculates the area of a rectangle. </b>");
document.write("<br>")
document.write("<br>")

// Function with arguments as values
function calculateAreaWithValue(widh , height) {
    let area = widh * height
    return area;
    
}
//  usage with values passed as arguments
let areaWithValue = calculateAreaWithValue(5 , 8)

document.write(`Area of the rectangle with value 5 , 8 passed as arguments : ${areaWithValue}`);

document.write("<br>")
document.write("<br>")

// Function with arguments as variables
function calculateAreaWithVariables() {
    let width = parseFloat(prompt("Enter the width:"));
    let height = parseFloat(prompt("Enter the height:"));
  
    if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
      let area = width * height;
      return area;
    } else {
      return "Please enter valid positive numbers for width and height.";
    }
  }
  
  // Example usage with variables for width and height
  let areaWithVariables = calculateAreaWithVariables();
document.write(`Area of the rectangle with variables as inputs: ${areaWithVariables}`);
  
document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 10 Write a JavaScript function that checks whether a passed string is palindrome or not? </b>");
document.write("<br>")
document.write("<br>")

// program to check if the string is palindrome or not

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are equal
    return cleanedStr === reversedStr;
  }
  
  // Function to check palindrome using prompt
  function checkPalindrome() {
    let userInput = prompt("Enter a string to check for palindrome:");
    
    if (userInput !== null) {
      if (userInput.trim() === '') {
        document.write("Please provide a valid value.");
        return; // Exit function if input is empty
      }
      
      let result = isPalindrome(userInput);
      if (result) {
        document.write(`"${userInput}" is a palindrome.`);
      } else {
        document.write(`"${userInput}" is not a palindrome.`);
      }
    } else {
      document.write("No input provided.");
    }
  }
  
  // Call the function to prompt the user and check for palindrome
  checkPalindrome();

document.write("<br>")
document.write("<br>")
  
document.write("<b> Q NO 11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. </b>");
document.write("<br>")
document.write("<br>")

function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    let words = str.split(' ');
  
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // Capitalize the first letter of each word and concatenate it with the rest of the word
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    // Join the words back into a single string and return
    return words.join(' ');
  }
  
  // Function to accept string using prompt and convert its first letters to uppercase
  function convertFirstLettersToUppercase() {
    let userInput = prompt("Enter a string:");
  
    if (userInput !== null && userInput.trim() !== '') {
      let result = capitalizeFirstLetter(userInput);
      document.write(`Modified string: ${result}`);
    } else {
      document.write("Please provide a valid non-empty string.");
    }
  }
  
  // Call the function to prompt the user for input and display the result
  convertFirstLettersToUppercase();
  
document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. </b>");
document.write("<br>")
document.write("<br>")

function findLongestWord(str) {
  // Split the string into an array of words
  const wordsArray = str.split(' ');

  // Initialize a variable to hold the longest word
  let longestWord = '';

  // Loop through each word in the array
  for (let i = 0; i < wordsArray.length; i++) {
    // Check if the current word's length is greater than the length of the longest word found so far
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  
  return longestWord;
}

// Example usage:
let inputString = "Web and app Development is the best field";
let longestWord = findLongestWord(inputString);

// Display the input string and the longest word in the document
document.write(inputString + "<br><br>");
document.write("The longest word in the string is: " + longestWord);


document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 13 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count </b>");
document.write("<br>")
document.write("<br>")

function countOccurrences(str1, letter) {
  // Convert both the string and the letter to lowercase for case-insensitive comparison
  let lowercaseStr = str1.toLowerCase();
  let lowercaseLetter = letter.toLowerCase();

  // Initialize a variable to count occurrences
  let count = 0;

  // Loop through each character in the string
  for (let i = 0; i < lowercaseStr.length; i++) {
    // Check if the current character matches the specified letter
    if (lowercaseStr[i] === lowercaseLetter) {
      count++; // Increment the count if there is a match
    }
  }

  return count; // Return the total count of occurrences
}

// Example usage:
let inputString1 = "JavaScript is a programming language used for web development";
let specifiedLetter = "a";
let occurrences = countOccurrences(inputString1, specifiedLetter);
document.write(`The letter '${specifiedLetter}' occurs ${occurrences} times in the string.`);

document.write("<br>")
document.write("<br>")

document.write("<b> Q NO 14 Create 2 functions that calculate properties of a circle, using the definitions here. </b>");
document.write("<br>")
document.write("<br>")

// Function to calculate the circumference of a circle
function calcCircumference(radius) {
  // Calculate the circumference using the formula: 2 * π * radius
  const circumference = 2 * Math.PI * radius;

  // Output the calculated circumference
  document.write(`The circumference ${radius} is ${circumference.toFixed(2)}` + "<br>");
}

// Function to calculate the area of a circle
function calcArea(radius) {
  // Calculate the area using the formula: π * radius^2
  const area = Math.PI * Math.pow(radius, 2);

  // Output the calculated area
  document.write(`The area ${radius} is ${area.toFixed(2)} `);
}

// Example usage:
const radius = 5; // Replace 5 with your desired radius

// Calculate and output the circumference
calcCircumference(radius);

// Calculate and output the area
calcArea(radius);
