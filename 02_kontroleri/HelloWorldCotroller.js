// Kontroler je u suštini funkcija koja je dodeljena varijabli
// (U ovom slučaju HelloWorldController varijabli).
(function() {
    var HelloWorldController = function($scope) {
        // $scope je injektovan u kontroler
        $scope.message = "hello, World!!!"; // dodajemo message objekat u scope
    };

    var app = angular.module("myFirstModule"); // Preuzimamo referencu na modul koji je ranije kreiran (u app.js)
    app.controller("HelloWorldController", HelloWorldController); // Registrujemo kontroler u preuzetom modulu

})();
