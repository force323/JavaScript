/*
=========
 BOOLEAN
=========
*/

var boolean = false;
if (boolean) {
    console.log("false");
}

boolean = true;
if (boolean) {
    console.log("true");
}

var string = "";
if (string) {
    console.log("false");
}

string = "asdf";
if (string) {
    console.log("true");
}

var number = 0;
if (number) {
    console.log("false");
}

number = 13;
if (number) {
    console.log("true");
}

var roo = null;
if (roo) {
    console.log("false");
}

roo = {};
if (roo) {
    console.log("true");
}

var undef;
if (undef) {
    console.log("false");
}