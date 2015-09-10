Sandbox.modules = {};

// ������
Sandbox.modules.event = function (box) {
    box.getElement = function () {};
    box.getStyle = function () {};
    box.foo = "bar";
};

// ������
Sandbox.modules.dom = function (box) {
    box.attachEvent = function () {};
    box.detachEvent = function () {};
};

// ������
Sandbox.modules.ajax = function (box) {
    box.makeRequest = function () {};
    box.getResponse = function () {};
};

function Sandbox() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    // ��������� ���� �� ������� ������� ��� �����������
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // �������� �������� � ������ 'this', ���� ��� ����������
    this.a = 1;
    this.b = 2;

    // �������� ������ � ������� ������ 'this'
    // ����������� ��������� � ������� ������� ��� �������� �� ��������� "*"
    // ������������ ������������� ��������� "���� �������"
    if (!modules || modules === "*") {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    // ���������������� ������������ ������
    for (i = 0; i < modules.length; i += 1) {
        Sandbox.modules[modules[i]](this);
    }

    // ������� ������� ��������� ������
    callback(this);
}

// �������� �������� � ���������, ���� ��� ����������
Sandbox.prototype = {
    name: "My Application",
    version: "1.0",
    getName: function () {
        return this.name;
    }
};

// �������������
Sandbox(['ajax', 'event'], function (box) {
    // console.log(box);
});

Sandbox('ajax', 'dom', function () {
    // console.log(box);
});