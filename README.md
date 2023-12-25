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
 - To start developement server (PORT: 3000)

  ```
  $ npm run dev
  ```
  
   - To compile typescript code and then start server (PORT: 3000)

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


##  Sample Request-Response:

### GET `/api/products/3`

```
// response
{
    "id": 3,
    "productName": "Tablet",
    "price": 30000
}
```

### POST `/api/products/`

```
// request body
{
    "id": 16,
    "productName": "Hadron Collider",
    "price": 99999
}
```

```
// response 
{
    "id": 16,
    "productName": "Hadron Collider",
    "price": 99999
}
```

### PUT `/api/products/16`

```
// request body (In previous response body we can see that product id 16 was Hadron Collider)
{
    "productName": "Particle Accelerator"  // Hadron Collider => Particle Accelerator
}
```

```
// response 
{
    "id": 16,
    "productName": "Particle Aceelerator",
    "price": 99999
}
```

### DELETE `/api/products/15`

```
// response (object of deleted product is returned)
{
    "id": 15,
    "productName": "Smartwatch",
    "price": 12000
}
```










