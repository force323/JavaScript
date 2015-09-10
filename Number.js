/*
========
 NUMBER
========
*/

var intNum = 34;

// OCTAL
// в strict режиме использование восьмиричных значений приведет к ошибке
// восьмиричные значения начинаются на 0
var octalNum1 = 070; // 56 в восмиричном формате
var octalNum2 = 079; // недопустимое восьмиричное значение - интепретируется как 79
var octalNum3 = 08; // недопустимое восьмиричное значение - интерпретируется как 8

// HEX
// шестнадцатиричный литерал начинается на 0x (не чувствительны к регистру)
var hexNum1 = 0xA; // 10 в шестнадцатиричном формате
var hexNum2 = 0x1f; // 31 в шестнадцатиричном формате

// FLOAT
var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1; // допустимо, но не рекомендуется

var floatNum4 = 1.; // интерпретируется как 1
var floatNum5 = 10.0; // интерпретируется как 10

var floatNum6 = 3.125e7; // 31250000
var floatNum7 = 0.0000003; // преобразуется в 3e-7

var sum = 0.1 + 0.2; // sum = 0.30000000000000004

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE - 1); // -Infinity
console.log(Number.MAX_VALUE + 1); // Infinity
console.log(isFinite(Number.MAX_VALUE)); // true
console.log(isFinite(Number.MAX_VALUE + 1)); // false