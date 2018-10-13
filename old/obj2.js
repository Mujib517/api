// Object.create
//Property descriptor
// 'use strict';
//sloppy

var mobile = {
  call: function () {
    console.log("calling");
  }
};


var m1 = Object.create(mobile, {
  width: { value: 10, enumerable: true },
  height: {
    value: 10, enumerable: true, writable: false,
    configurable: false
  },
  color: { value: 10, enumerable: false }
});

console.log(m1.__proto__);


m1.call();
m1.toString();
// m1.toString2();