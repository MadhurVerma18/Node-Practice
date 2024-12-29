require("./xyz.js")  // one module into another

var name = "Namaste NodeJs";

var a = 20;
var b = 30;

console.log(name);

console.log(a+b);

const calcFibo = function fibo(n) {
    if (n <= 1) {
      return n;
    }
    return fibo(n - 1) + fibo(n - 2);
  };
  
  const delay = function (t, n) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Wait time:', t);
        const sum = calcFibo(n)
        resolve(sum);
      }, t);
    });
  };
  
  const fiboPromise = new Promise((resolve) => {
    resolve(calcFibo(15));
  });
  
  const delayPromise = delay(5000, 12);

  
  //Use Promise.all to wait for all promises
  Promise.all([fiboPromise, delayPromise])
    .then(([fiboResult]) => {
      console.log('Fibonacci Result:', fiboResult);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    

const person = new Object();
  
const pr1 = new Promise((resolve, rejects) => {
    // my profile 

})



// console.log(globalThis)