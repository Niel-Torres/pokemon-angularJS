(function() {
    angular.module('pokedex.directives', [])
        .directive('pokemonData', function() {
            return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-data.html'
            }
        })
  
        .directive('pokemonName', function() {
            return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-name.html'
            }
        })
    
        .directive('pokemonImage', function() {
            return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-image.html'
            }
        })
    
        .directive('pokemonStats', function() {
            return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-stats.html'
            }
        })
    
        .directive('pokemonEvolution', function() {
            return {
            restrict: 'E',
            templateUrl: 'partials/pokemon-evolution.html'
            }
        })

        .directive('pokemonType', function() {
            return {
                restrict: 'E',
                templateUrl: 'partials/pokemon-type.html'
            }
        })

        .directive('pokemon404', function () {
            return{
                restrict: 'E',
                templateUrl: './partials/pokemon-404.html'
            }
        })

        .directive('pokemonSearch', function () {
            return {
                restrict: 'E',
                templateUrl: './partials/pokemon-search.html'
            }
        })
        
        /**
         * Inyectamos el servicio de pokemonService a la directiva pokemonComments
         * Al inyectarle el servicio de pokemon, vamos a poder tener acceso a guardar comentarios y obtener comentarios 
         **/
        .directive('pokemonComments', ['pokemonService', function (pokemonService) {
            return {
                restrict: 'E',
                templateUrl: 'partials/pokemon-comments.html',
                //Definimos el scope de la directiva, ojo no es el mismo scope del controlador
                //Solo nos estamos quedando con el nombre (name)
                //@ = Campo de texto
                scope: {
                    name: '@name'
                },
                //Esta función de enlace(link), me va a permitir enlazar las propiedades del scope con mi directiva
                //La idea de este es observar si cambiamos a otro pokemon y obtener los comentarios de ese pokemon
                link: function (scope, element, attributes) {
                    attributes.$observe('name', function(value) {
                        if(value){
                            scope.name = value;
                            scope.comments = pokemonService.getComments(value);
                        }
                    });
                },
                controller: function ($scope) {
                    $scope.comments = pokemonService.getComments($scope.name);
                    $scope.comment = {};
                    $scope.show = false;
        
                    $scope.toggle = function (){
                        $scope.show = !$scope.show;
                    }
        
                    $scope.anonymousChanged = function (){
                        if($scope.comment.anonymous){
                            $scope.comment.email = ""; 
                        }
                    };
        
                    $scope.addComment = function () {
                        $scope.comment.date = Date.now();
                        pokemonService.saveComment($scope.name, $scope.comment);
                        $scope.comments = pokemonService.getComments($scope.name);
                        $scope.comment = {};
                    };
                }
            };
        }]);
})();


