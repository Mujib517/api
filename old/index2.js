//1. JSRE
//2. 
// loosely typed lang
//int x=10;
// x=" akdjfkdajfk";
// Desktop, mobile, web, ML AI, IOT
// types: Number, string, boolean, object, undefined, function
//refactor


//void methods
function add(a, b) {

  function calc(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) sum = sum + calc(arr[i]);
      else sum = sum + arr[i];
    }
    return sum;
  }

  if (typeof a === 'function') a = a();
  if (typeof b === 'function') b = b();

  if (Array.isArray(a)) a = calc(a);
  if (Array.isArray(b)) b = calc(b);


  var c = a + b;
  console.log(c);
}

//underscore.js
add(10, 20);
add("Mujib ", "Rahman");
add([1, 2, 3], [4, 5, 6]);
add([1, 2, [1, 2, 3], 3], [4, [1, 3, [1, 3, 4], [1, 2, 3]], 5, 6]);

function first() {
  return 100;
}

function second() {
  return 200;
}

//function is value
add(first, second);
