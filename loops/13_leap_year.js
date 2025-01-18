// Do not rename year, use it as input for your program.
// year will be a natural number.
// While testing we will change its value.
const year = 0;
// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = year;

// if (number === 0) {
//     console.log(false);
// } else if (number % 400 === 0) {
//     console.log(true);
// } else if (number % 100 === 0) {
//     console.log(false);
// }
// else if (number % 4 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
let isLeap = (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))
console.log(isLeap);

switch (currentMonth) {
  case 1: {
    result = currentDate <= thirtyOne ? "valid" : "invalid";
    console.log(result);
    break;
  }
  case 3:
    {
      result = currentDate <= thirtyOne ? "valid" : "invalid";
      console.log(result);
      break;
    }
  case 7: {
    result = currentDate <= thirtyOne ? "valid" : "invalid";
    console.log(result);
    break;
  }
  case 5:
    {
      result = currentDate <= thirtyOne ? "valid" : "invalid";
      console.log(result);
      break;
    }
  case 8:
    {
      result = currentDate <= thirtyOne ? "valid" : "invalid";
      console.log(result);
      break;
    }
  case 10:
    {
      result = currentDate <= thirtyOne ? "valid" : "invalid";
      console.log(result);
      break;
    }
  case 12: {
    result = currentDate <= thirtyOne ? "valid" : "invalid";
    console.log(result);
    break;
  }

  case 4:
    {
      result = currentDate <= thirty ? "valid" : "invalid";
      console.log(result);
      break;
    }
  case 6: {
    currentDate <= thirtyOne ? "valid" : "invalid";
    console.log(result);
    break;
  }
  case 10:
    {
      currentDate <= thirtyOne ? "valid" : "invalid";
      console.log(result);
      break;
    }
  case 11: {
    currentDate <= thirtyOne ? "valid" : "invalid";
    console.log(result);
    break;
  }
  case 2:
    {
      if (isLeap && currentDate <= 29) {
        console.log("valid");
        break;
      } else {
        console.log("invalid");
        break;
      }
    }


}
// 0,4,1000,400,1100,2024.