//1. JSRE
//2. single threaded
//3. Asynchronous. Synchrounous
// async: db calls, timers, web svc calls, file i/0



function addAsync(a, b, cb) {
  a++;
  b++;
  //time delay
  console.log("execution started");
  setTimeout(function () {
    var c = a + b;
    console.log("calculation completed");

    cb(c);
  }, 2000);
  console.log("execution stopped");

}

function callback(res) {
  console.log(res);
}
//higher order functions
addAsync(10, 20, callback);

// function add(a, b) {
//   a++;
//   b++;
//   a += 2;

//   return a + b;
// }

// var res = add(10, 20);
// console.log(res);

