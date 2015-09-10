Sandbox.modules = {};

// модуль
Sandbox.modules.event = function (box) {
    box.getElement = function () {};
    box.getStyle = function () {};
    box.foo = "bar";
};

// модуль
Sandbox.modules.dom = function (box) {
    box.attachEvent = function () {};
    box.detachEvent = function () {};
};

// модуль
Sandbox.modules.ajax = function (box) {
    box.makeRequest = function () {};
    box.getResponse = function () {};
};

function Sandbox() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    // проверить была ли функция вызвана как конструктор
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // добавить свойства к оъекту 'this', если это необходимо
    this.a = 1;
    this.b = 2;

    // добавить модули в базовый объект 'this'
    // отстутствие арументов с именами модулей или аргумент со значением "*"
    // предполагает необходимость включения "всех модулей"
    if (!modules || modules === "*") {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    // инициализировать необходимыые модули
    for (i = 0; i < modules.length; i += 1) {
        Sandbox.modules[modules[i]](this);
    }

    // вызвать функцию обратного вызова
    callback(this);
}

// добавить свойства к прототипу, если это необходимо
Sandbox.prototype = {
    name: "My Application",
    version: "1.0",
    getName: function () {
        return this.name;
    }
};

// ИСПОЛЬЗОВАНИЕ
Sandbox(['ajax', 'event'], function (box) {
    // console.log(box);
});

Sandbox('ajax', 'dom', function () {
    // console.log(box);
});