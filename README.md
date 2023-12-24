  # The Return Journey Assignment 

  The assignment consists of two section:
  1. javascript-assignment: Has all three task related to js
  2. Node backend application consisting of RESTful APIs

  ## ⬇️ Installation


  - Clone this repo.

  ```
  $ git clone https://github.com/0xVegeta/rj-assignment.git
  ```


  - Install dependencies

  ```
  $ npm i
  ```
 - To start developement server

  ```
  $ npm run dev
  ```
  
   - To compile typescript code and then start server

  ```
  $ npm run build
  $ npm start
  ```
  
   ## Run unit tests


  - I have thoroughly covered POST and PUT APIs, but have additionally provided some cases for GET APIs too

  ```
  $ npm run test
  ```
 ## Middleware


  - Middleware logs the timestamp, HTTP method and URL for all API request in terminal as well as a file called log.txt

  ```
  $ log.txt
  ```

  

  ## API Reference

  `/api/products`
  | REQUEST METHODS | ENDPOINTS | DESCRIPTION |
  | :-------------- | :-------: | ------------------: |
  | GET | / | Retrieve the list of all products |
  | GET | /:id | Retrieve details of a specific product by ID |
  | POST | / | Create a new product |
  | PUT | /:id/ | Update details of a specific product by ID |
  | DELETE | /:id | Delete product by ID |