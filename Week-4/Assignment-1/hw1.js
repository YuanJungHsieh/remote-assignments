function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  setTimeout((callback) => {
    console.log(n1 + n2);
  }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {});
// 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {});
// 5 (-5+10) will be shown in the console after 2 seconds
