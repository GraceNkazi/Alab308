/**********PRACTICAL LOOP********/


/***********Part 1: Fizz Buzz*******/
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0)
// 	    console.log("Fizz Buzz");

 
//     else if (i % 5 === 0){
//      console.log("Buzz");
//     }
//     else if (i % 3 === 0){
//     console.log("Fizz");
// } else {
//     console.log(i);
    
// }
          
// }



/****************Part 2: Prime Time***************/

// const n = 30

// function isprime(n) {
//     for (let i = 2; i <= n; i++) {
//         if (n % i === 0) return false
//     }
//    return n > 1
// }


// for (let i = 0; i <= n; i++) {
//     if (isprime(i)) {
//     console.log(i)
//     break
//     }

// }

// function nextprime (n) {
//     let x = n + 1
//     while (isprime(x)) {
//         x++
//     }
//     return x
// }

// for (let i = 0; i<= n; i++) {
//     if (isprime(i)) {
//         console.log(`prime ${j}, next prime ${nextprime(i)}`);
        
//     }
// }

/****************Part 3: Feeling Loopy ****************/

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.


const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

function parseCSV(csv) {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  
  return result;
}

console.log(parseCSV(csv));

