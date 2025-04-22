<!-- index.html -->

<!DOCTYPE html>
<html ng-app="restaurantApp">

<head>
    <title>Restaurant Booking</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 600px;
            margin: 50px auto;
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input,
        select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .booking-details {
            margin-top: 20px;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <div class="container" ng-controller="BookingController">
        <h2>Book a Table</h2>
        <form ng-hide="bookingSubmitted">
            <label for="name">Name:</label>
            <input type="text" id="name" ng-model="bookingData.name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" ng-model="bookingData.email" required>

            <label for="phno">Phone Number:</label>
            <input type="tel" id="phno" ng-model="bookingData.phno" required>

            <label for="date">Date:</label>
            <input type="date" id="date" ng-model="bookingData.date" required>

            <label for="persons">Number of Persons:</label>
            <select id="persons" ng-model="bookingData.persons" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <!-- Add more options as needed -->
            </select>

            <button type="button" ng-click="submitBooking()">Book Now</button>
        </form>

        <div class="booking-details" ng-show="bookingSubmitted">
            <h3>Your booking details:</h3>
            <p><strong>Name:</strong> {{ bookingData.name }}</p>
            <p><strong>Email:</strong> {{ bookingData.email }}</p>
            <p><strong>Phone Number:</strong> {{ bookingData.phno }}</p>
            <p><strong>Date:</strong> {{ bookingData.date }}</p>
            <p><strong>Number of Persons:</strong> {{ bookingData.persons }}</p>
        </div>
    </div>

    <script src="app.js"></script>
</body>

</html>