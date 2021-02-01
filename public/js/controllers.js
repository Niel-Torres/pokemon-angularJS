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

        .controller('PokemonController', ['$scope', 'pokemonService', function ($scope, pokemonService) {
            
            //Cambiamos el controlador para que use scope en vez de this:
            //this.pokemon = {

            //llamar un pokemon por el nombre
            $scope.pokemon = {};
            pokemonService.byName('mew')
                .then(function (data) {
                    $scope.pokemon  = data;
                })

        }])
  
        .controller('TabsController', function (){
            this.tab = 1;
            
            this.selectTab = function (tab) {
            this.tab = tab;
            };
            
        });

})();