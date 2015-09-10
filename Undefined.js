/*
===========
 UNDEFINED
===========
*/

var message;
console.log(message == undefined); // true

message = undefined;
console.log(message == undefined); // true

var foo; // переменна€ объ€вл€етс€

// следующа€ переменна€ не объ€вл€етс€
// var bar;

console.log(foo); // "undefined"
console.log(bar); // error

console.log(typeof foo); // "undefined"
console.log(typeof bar); // "undefined"