(function (_) {

    angular.module('pokedex.controllers', [])
        /**
         * Promises
         * Ejecutamos el metodo all del servicio pokemonService, este método all nos retorna una promesa.
         * Si la promesa se resuelve, nos lo devuelve en "then"
         * Aislar esta llamada http entre el controlador y el servicio nos ayuda a que si el día de mañana,se cambia la llamada por api rest, sólo se cambiaría el servicio.
         * El CONTROLADOR sólo recibe el listado de pokemon, el cómo lo está obteniendo se realiza desde el SERVICIO
         */
        .controller('PokedexController', ['$scope', '$routeParams', 'pokemonService', function ($scope, $routeParams, pokemonService) {
            var type = $routeParams.type;

            // Si en la url nos indican el tipo devolvemos pokemons por tipo, sino devolvemos todos los pokemons
            // Para esto hemos inyectado routeParams y configura nuestra rutas
            if (type) {
                $scope.type = type;
                
                pokemonService.byType(type).then(function (data) {
                    $scope.pokemons = data;
                    $scope.groupped = partition(data, 4);
                });
            } else {
                pokemonService.all().then(function (data) {
                    $scope.pokemons = data;
                    $scope.groupped = partition(data, 4);
                });
            }

            function partition(data, n) {
                return _.chain(data).groupBy(function (element, index) {
                    return Math.floor(index / n);
                }).toArray().value();
            }

        }])

        /**
         * El servicio $routeParams propio de angular: es el que va a gestionar el que hemos definido en routes dentro de app.js
         */
        .controller('PokemonController', ['$scope', '$routeParams', 'pokemonService', function ($scope, $routeParams, pokemonService) {
            
            //Cambiamos el controlador para que use scope en vez de this:
            //this.pokemon = {
            var name = $routeParams.name;

            $scope.pokemon = {};

            //llamar un pokemon por el nombre
            //Resultado de una promesa:
            //OK: function (data)
            //KO: function (error). Cuando la promesa no puede obtener la información.
            pokemonService.byName(name)
                .then(
                    function (data) {
                        
                        $scope.pokemon  = data;
                    }, 
                    function (error) {
                        
                    }    
                );

        }])
  
        .controller('TabsController', function (){
            this.tab = 1;
            
            this.selectTab = function (tab) {
            this.tab = tab;
            };
            
        });

})(_);