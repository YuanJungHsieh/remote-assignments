function countAandB(input) {
  // your code here
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "b") {
      answer += 1;
    }
  }
  return answer;
}
function toNumber(input) {
  // your code here
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    let item = input[i];
    switch (item) {
      case "a":
        answer.push(1);
        break;
      case "b":
        answer.push(2);
        break;
      case "c":
        answer.push(3);
        break;
      case "d":
        answer.push(4);
        break;
      case "e":
        answer.push(5);
        break;
    }
  }
  return answer;
}
let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ lettersand 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
