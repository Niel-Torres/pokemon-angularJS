(function() {

    angular.module('pokedex.controllers', [])
        /**
         * Promises
         * Ejecutamos el metodo all del servicio pokemonService, este método all nos retorna una promesa.
         * Si la promesa se resuelve, nos lo devuelve en "then"
         * Aislar esta llamada http entre el controlador y el servicio nos ayuda a que si el día de mañana,se cambia la llamada por api rest, sólo se cambiaría el servicio.
         * El CONTROLADOR sólo recibe el listado de pokemon, el cómo lo está obteniendo se realiza desde el SERVICIO
         */
        .controller('PokedexController', ['$scope', 'pokemonService', function ($scope, pokemonService) {
           pokemonService.all().then(function (data) {
               $scope.pokemons = data;
           });
        }])

        .controller('PokemonController', ['$scope', function ($scope) {
            
            //Cambiamos el controlador para que use scope:
            //this.pokemon = {
            
            //Objeto pokemon
            $scope.pokemon = {
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
        }])
  
        .controller('TabsController', function (){
            this.tab = 1;
            
            this.selectTab = function (tab) {
            this.tab = tab;
            };
            
        });

})();