(function() {
  angular.module('pokedex.services', [])
    .factory('pokemonService', ['$http', '$q', function($http, $q) {
      
      function all(){
        var deferred = $q.defer();
        
        $http.get('/pokemons.json')
          .success(function (data) {
            deferred.resolve(data); // Al objeto diferido le estamos diciendo que resuelva la promesa y le pasamos el "data" que acabamos de obtener de la peticón http
          });
        
        return deferred.promise; //Devolvemos la promesa, esta promesa se va resolver cuando se ejecute la función asíncrona
      }
      return {
        all: all
      }
    }])

})();