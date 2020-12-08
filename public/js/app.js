// Es el que va a contener nuestra aplicación angularJS

/**
 * Declaramos una función IIFE - Es decir una función que se llama a si misma "()"
 * IIFE: Expresión de función ejecutada inmediatamente
 * (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen. 
 */ 
(function () {
    //Modulo
    var app = angular.module('pokedex', [
      'pokedex.controllers'
    ]);

    app.filter('imageify', function() {
      return function (input) {
        var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
        return url;
      }
    })

    app.directive('pokemonData', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/pokemon-data.html'
      }
    });

    app.directive('pokemonName', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/pokemon-name.html'
      }
    });

    app.directive('pokemonImage', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/pokemon-image.html'
      }
    });

    app.directive('pokemonStats', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/pokemon-stats.html'
      }
    });

    app.directive('pokemonEvolution', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/pokemon-evolution.html'
      }
    });

    app.directive('pokemonComments', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/pokemon-comments.html',
        controller: function () {
          this.comments = [];
          this.comment = {};
          this.show = true;

          this.toggle = function (){
            this.show = !this.show;
          }

          this.anonymousChanged = function () {
            if(this.comment.anonymous){
                this.comment.email = ""; 
            }
          };

          this.addComment = function () {
            this.comments.push(this.comment);
            this.comment.date = Date.now();
            this.comment = {};
          };  
        },
        controllerAs: 'cmtsCtrl'
      }
    });

})();