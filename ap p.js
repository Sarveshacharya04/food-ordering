angular.module('bookingsApp')
    .factory('bookingsService', ['$http', function($http) {
        var bookingsService = {};

        bookingsService.getBookings = function() {
            return $http.get('/api/bookings');
        };

        bookingsService