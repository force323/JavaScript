/*
========
 NUMBER
========
*/

var intNum = 34;

// OCTAL
// � strict ������ ������������� ������������ �������� �������� � ������
// ������������ �������� ���������� �� 0
var octalNum1 = 070; // 56 � ����������� �������
var octalNum2 = 079; // ������������ ������������ �������� - ��������������� ��� 79
var octalNum3 = 08; // ������������ ������������ �������� - ���������������� ��� 8

// HEX
// ����������������� ������� ���������� �� 0x (�� ������������� � ��������)
var hexNum1 = 0xA; // 10 � ����������������� �������
var hexNum2 = 0x1f; // 31 � ����������������� �������

// FLOAT
var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1; // ���������, �� �� �������������

var floatNum4 = 1.; // ���������������� ��� 1
var floatNum5 = 10.0; // ���������������� ��� 10

var floatNum6 = 3.125e7; // 31250000
var floatNum7 = 0.0000003; // ������������� � 3e-7

var sum = 0.1 + 0.2; // sum = 0.30000000000000004

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE - 1); // -Infinity
console.log(Number.MAX_VALUE + 1); // Infinity
console.log(isFinite(Number.MAX_VALUE)); // true
console.log(isFinite(Number.MAX_VALUE + 1)); // false