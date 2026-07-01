# Library Management System API

## About the Project

This is a Library Management System API developed using Node.js, Express.js, MongoDB, and Mongoose. The application allows users to manage books and students, as well as issue and return books. 

## Project Flow

The application starts from index.js, which acts as the entry point of the project. It initializes the Express application, establishes a connection with the MongoDB database, registers all API routes, and starts the server.

Whenever a client sends a request using Postman, the request first reaches index.js. Based on the URL and HTTP method (GET, POST, PUT, or DELETE), the request is forwarded to the corresponding route.

The routes are responsible for matching the requested endpoint. Once the correct route is found, it calls the appropriate controller function to handle the request.

The controller contains the main application logic. It processes the incoming request, validates the data if necessary, and decides which database operation should be performed. Depending on the request, it can create new records, retrieve existing data, update information, delete records, issue books, or return issued books.

To perform these operations, the controller communicates with the models. Each model represents a collection in the MongoDB database and defines the structure of the stored data using Mongoose schemas.

The database executes the requested operation and returns the result to the controller. Finally, the controller sends an appropriate JSON response back to the client, indicating whether the request was completed successfully or if an error occurred.

## Features

* Book CRUD Operations
* Student CRUD Operations
* Book Issue Management
* Book Return Management
* MongoDB Database Integration

## CRUD Operations

* **Create:** Add new books, students, or issue records to the database.
* **Read:** Retrieve all records or a specific record using its ID.
* **Update:** Modify the details of existing books, students, or issue records.
* **Delete:** Remove records from the database when they are no longer needed.

## Conclusion

This project demonstrates the basic working of a REST API using Express.js and MongoDB. By separating the application into routes, controllers, models, and database configuration, the project remains modular, readable, and easier to maintain as it grows.
