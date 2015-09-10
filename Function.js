// ����������
var add = new Function("a", "b", "return a + b;");
add(5, 3); // 8

// ����������� �������-���������
var add = function add(a, b) {
    return a + b;
};

// ������� ���������, ��� �� ��������� �������
var add = function (a, b) {
    return a + b;
};

// ������� ����������
function foo(){
    // ���� �������
}

// ���������� ���������� ������� ������� �1
(function () {
    console.log('foo');
}());

// ������� �2
(function () {
    console.log('foo');
})();

// �������� ��������� � ���������� ���������� �������
(function (global) {
    console.log(global); // window
}(this));

var result = (function () {
    return 2 + 2;
}());

// ����������� ������������� �������
({}.init());
({}).init();

// ������ ����������� �������������
({
    a: 'a',
    b: 'b',
    init: function(){
        this.a = 'z';
        this.b = 'x';
    }
}).init();

// ���������� �1
var myFunc = function (param){
    if(!myFunc.cache[param]){
        var result = {};
        // ��������������� ��������
        myFunc.cache[param] = result;
    }
    return myFunc.cache[param];
};

// ��������� �����������
myFunc.cache = {};

// ���������� �2
var myFunc = function (){
    var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments)),
        result;
    if(!myFunc.cache[cacheKey]){
        result = {};
        // ��������������� ��������
        myFunc.cache[cacheKey] = result;
    }
    return myFunc.cache[cacheKey];
};

// ��������� �����������
myFunc.cache = {};

// ������������
//TODO