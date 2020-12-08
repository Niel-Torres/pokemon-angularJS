// Es el que va a contener nuestra aplicación angularJS

/**
 * Declaramos una función IIFE - Es decir una función que se llama a si misma "()"
 * IIFE: Expresión de función ejecutada inmediatamente
 * (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen. 
 */ 
(function () {
    //Modulo
    var app = angular.module('pokedex', [
      'pokedex.controllers',
      'pokedex.directives',
      'pokedex.filters'
    ]);

})();