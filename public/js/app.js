// Es el que va a contener nuestra aplicación angularJS

/**
 * Declaramos una función IIFE - Es decir una función que se llama a si misma "()"
 * IIFE: Expresión de función ejecutada inmediatamente
 * (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen. 
 */ 
(function () {
    //Modulo
    var app = angular.module('pokedex', []);

    //Controlador
    app.controller('PokemonController', function () {
      //Objeto pokemon
      this.pokemon = {
        id: "001",
        name: "Bulbasaur",
        species: "Seed Pokémon",
        type: [ "Grass", "Poison" ],
        height: "2′4″ (0.71m)",
        weight: "15.2 lbs (6.9 kg)",
        abilities: [ "Overgrow", "Chlorophyll"],
        stats: {
          hp: 45,
          attack: 49,
          defense: 49,
          "sp.atk": 65,
          "sp.def": 65,
          speed: 45,
          total: 318
        },
        evolution: ["Bulbasaur", "Ivysaur", "Venusaur"]
      }; 
    });

    app.controller('TabsController', function (){
      this.tab = 1;
      
      this.selectTab = function (tab) {
        this.tab = tab;
      };
      
    });

    app.controller('CommentsController', function (){
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

    });

   

    app.filter('imageify', function() {
      return function (input) {
        var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
        return url;
      }
    })

})();