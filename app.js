var app = angular.module('foodApp', []);

app.controller('FoodController', function ($scope) {
  $scope.menu = [
    // Your menu items here
  ];

  $scope.cart = [];
  $scope.currentPage = 'menu';

  $scope.showMenu = function () {
    $scope.currentPage = 'menu';
  };

  $scope.showCart = function () {
    $scope.currentPage = 'cart';
  };

  $scope.showAbout = function () {
    $scope.currentPage = 'about';
  };

  $scope.addToCart = function (item) {
    if (item.quantity > 0) {
      $scope.cart.push({
        name: item.name,
        quantity: item.quantity
      });
      item.quantity = 0;
    }
  };

  $scope.placeOrder = function () {
    // Implement order placement logic here
    console.log('Order placed:', $scope.cart);
    // You can send the order to a server or perform other actions as needed
    // For simplicity, this example just logs the order to the console
  };
});
