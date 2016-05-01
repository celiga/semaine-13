'use strict';

var expenseManagerApp = angular.module('expenseManagerApp', []);

expenseManagerApp.controller('expenseCtrl', ['$scope', function ($scope) {
    // V2 : with data
    $scope.expenses = [
        {value: 30.00},
        {value: 12.50},
        {value: 38.00}
    ];
    
    $scope.doTotal = function(){
        $scope.total = 0;
        for(var i = 0; i<$scope.expenses.length; i++){
            $scope.total += parseInt($scope.expenses[i].value);
        }
    };
    
    $scope.addExpense = function(){
        var newExpense = $scope.newExpense.trim();
        $scope.expenses.push({ value: newExpense });
        //$scope.total = $scope.total + parseInt(newExpense);
        $scope.newExpense = '';
    };
    
    $scope.removeExpense = function(index){
        //$scope.total = $scope.total - parseInt($scope.expenses[index].value);
        $scope.expenses.splice(index, 1);
    };
    
    $scope.$watch("expenses", $scope.doTotal, true);
    
    // V1 : empty data
    /*$scope.expenses = [];
    
    $scope.total = parseInt(0);
    
    $scope.addExpense = function(){
        var newExpense = $scope.newExpense.trim();
        $scope.expenses.push({ valeur: newExpense });
        $scope.total = $scope.total + parseInt(newExpense);
        $scope.newExpense = '';
    };
    
    $scope.removeExpense = function(index){
        $scope.total = $scope.total - parseInt($scope.expenses[index].valeur);
        $scope.expenses.splice(index, 1);
    };*/
}]);

// Correction
/*app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.depenses = [
        { valeur: 50 },
        { valeur: 25 }
    ];
    
    $scope.addDepense = function() {
        $scope.depenses.push({ valeur: parseInt($scope.valeur) });
    }
    
    $scope.rmDepense = function(i) {
        $scope.depenses.splice(i, 1);
    }
    
    $scope.doTotal = function() {
        total = 0;
        for (i = 0 ; i < $scope.depenses.length ; i++) {
            total += $scope.depenses[i].valeur;
        }
        $scope.total = total;
    }
    
    $scope.$watch("depenses", $scope.doTotal, true)
}]);*/