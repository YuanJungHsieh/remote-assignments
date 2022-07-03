function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  return new Promise((resolve, reject) => {
    setTimeout(resolve(n1 + n2), delayTime);
  });
}

async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  let answer = await delayedResultPromise(4, 5, 3000);
  console.log(answer);
}
main(); // result will be shown in the console after <delayTime>seconds
