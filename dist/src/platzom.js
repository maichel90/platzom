"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {

    var translation = str;

    //si la palabra termina en ar. se le quita ar

    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2);
    }

    // si inicia con Z se ande pe al final


    if (str.toLowerCase().startsWith("z")) {
        translation += 'pe';
    }

    // si su tamano es mayor a diez poner gion en la mitad

    if (translation.length >= 10) {
        var first = translation.slice(0, Math.round(translation.length / 2));
        var second = translation.slice(Math.round(translation.length / 2));

        translation = first + "-" + second;
    }
    // si es palindromo ninguna regla cuenta se vevuelve mayus y minus

    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}

var reverse = function reverse(str) {
    return str.split('').reverse().join('');
};

function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
        var char = str.charAt(i);
        translation += capitalize ? char.toUpperCase() : char.toLowerCase();
        capitalize = !capitalize;
    }
    return translation;
}