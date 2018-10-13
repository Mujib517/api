//objects. 4 ways
// literals

var mobile = {
  width: 5,
  height: 10,

  call: function () {
    console.log("Calling");
  },
  myProperty: 'my value'
};

// mobile.color = "red";
// delete mobile.width;

// console.log(mobile);

var m1 = {
  width: 5,
  height: 10,
  color: 'red'
};

var m2={
  width: 5,
  height: 10,
  color: 'black'
};




//access
// two notation: . []
//reflection: for in

// for (var key in mobile) {
//   console.log(key,mobile[key]);
// }