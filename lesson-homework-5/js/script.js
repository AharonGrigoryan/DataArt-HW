function showEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function alertFun(random, value) {
  let evenNumbers;
  let text = "Is this your random number :";
  if (value) {
    evenNumbers = bubbleSort(Array.from({ length: random }, (_, i) => i + 1));
  } else {
    evenNumbers = showEvenNumbers(
      Array.from({ length: random }, (_, i) => i + 1)
    );
  }
  if (confirm(`${text} ${random}`) !== true) {
    alert("You pressed Cancel!");
  } else {
    alert("Even numbers: " + evenNumbers);
  }
}

function randomNumberPrompt(arg) {
  let randomNum = parseInt(prompt("Enter a random number:"));
  if (randomNum === randomNum) {
    alertFun(randomNum, arg);
  } else {
    alert("Please enter only numbers");
  }
}

function generateRandomNumber(arg) {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  alertFun(randomNum, arg);
}
