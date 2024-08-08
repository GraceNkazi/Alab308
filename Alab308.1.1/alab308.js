// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



  //Checked Numbers are divisible by 5.
 const isDivide5 = (n1 % 5 ==0) + (n2 % 5 ==0) + (n3 % 5 ==0) + (n4 % 5 ==0);
  console.log(isDivide5)

  //checked if the first number is larger than the last
 const larger = (n1 > n4);
  console.log(larger);

  //checked
  const isless = (n2 - n1);
  console.log(isless);


  //checked
  const ismult = (isless * 20);
  console.log(ismult); 

  //checked
  const isremain = (ismult % 5);
  console.log(isremain);

  //checked
  const isgreat25 = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;
  console.log(`The provided numbers are not greather 25 ${isgreat25}`);

/***************************
 Part 2: Practical Math             ***************************/


  //checked the gallons of fuel will I need for the entire trip
  const gallons = 
  console

  //let 
 // let
  //let
  //let 


  //let 