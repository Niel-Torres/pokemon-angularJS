// Es el que va a contener nuestra aplicación angularJS

/**
 * Declaramos una función IIFE - Es decir una función que se llama a si misma "()"
 * IIFE: Expresión de función ejecutada inmediatamente
 * (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
 */
(function () {
  //Modulo
  var app = angular.module("pokedex", [
    "ngRoute",
    "pokedex.controllers",
    "pokedex.directives",
    "pokedex.filters",
  ]);

  app.config(["$routeProvider", function ($routeProvider) {
    
      $routeProvider
        .when('/', {
          templateUrl: 'views/pokedex.html',
          controller: 'PokedexController'
        })
        .when("/pokemon/:id", {
          templateUrl: "views/pokemon.html",
          controller: "PokemonController",
          controllerAs: "pkmCtrl",
        })
        .otherwise({
          redirectTo: '/'
        });
    },
  ]);
})();
