(function() {
  angular.module('pokedex.services', [])
    .factory('pokemonService', ['$http', '$q', '$filter', function($http, $q, $filter) {
      
      var normalize = $filter('normalize');

      function all(){
        var deferred = $q.defer();
        
        $http.get('/pokemons.json', { cache: true })
          .success(function (data) {
            deferred.resolve(data); // Al objeto diferido le estamos diciendo que resuelva la promesa y le pasamos el "data" que acabamos de obtener de la peticón http
          });
        
        return deferred.promise; //Devolvemos la promesa, esta promesa se va resolver cuando se ejecute la función asíncrona
      }

      function byName(name) {
        name = normalize(name);
        var deferred = $q.defer();

        //Obtener toda la lista de los pokemon y luego filtrarla para otener esa lista filtrada en byName
        all().then(function(data) {
          var results = data.filter(function (pokemon) {
            return normalize(pokemon.name) === name;
          });

          if(results.length > 0) {
            deferred.resolve(results[0]);
          } else {
            deferred.reject();
          }
          
        });

        return deferred.promise;
      }

      return {
        all: all,
        byName: byName
      }
    }])

})();