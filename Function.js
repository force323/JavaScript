// антишаблон
var add = new Function("a", "b", "return a + b;");
add(5, 3); // 8

// именованная функция-выражение
var add = function add(a, b) {
    return a + b;
};

// функция выражение, она же анонимная функция
var add = function (a, b) {
    return a + b;
};

// функция объявление
function foo(){
    // тело функции
}

// немедленно вызываемая функция вариант №1
(function () {
    console.log('foo');
}());

// вариант №2
(function () {
    console.log('foo');
})();

// передача параметра в немедленно вызываемую функцию
(function (global) {
    console.log(global); // window
}(this));

var result = (function () {
    return 2 + 2;
}());

// немедленная инициализация объекта
({}.init());
({}).init();

// пример немедленной инициализации
({
    a: 'a',
    b: 'b',
    init: function(){
        this.a = 'z';
        this.b = 'x';
    }
}).init();

// мемоизация №1
var myFunc = function (param){
    if(!myFunc.cache[param]){
        var result = {};
        // продолжительные операции
        myFunc.cache[param] = result;
    }
    return myFunc.cache[param];
};

// хранилище результатов
myFunc.cache = {};

// мемоизация №2
var myFunc = function (){
    var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments)),
        result;
    if(!myFunc.cache[cacheKey]){
        result = {};
        // продолжительные операции
        myFunc.cache[cacheKey] = result;
    }
    return myFunc.cache[cacheKey];
};

// хранилище результатов
myFunc.cache = {};

// каррирование
//TODO