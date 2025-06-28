# User-API
#  User Management REST API (Node.js + Express)

A simple RESTful API to manage a list of users. This project demonstrates routing, middleware, validation, error handling, and in-memory data management using Node.js and Express.

---

##  Project Structure

```

user-api/
├── app.js
├── package.json
├── data/
│   └── users.js
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── middleware/
│   ├── logger.js
│   └── validateUser.js
├── screenshots/
│   └── \[Thunder Client test screenshots]

````

---

##  Features

- Get all users
- Get a user by ID
- Create a new user with validation
- Update a user with validation
- Delete a user
- Logging middleware for all requests
- Error handling with appropriate status codes
- In-memory user data

---
```
##  Prerequisites

- Node.js (https://nodejs.org/)
- VS Code (with Thunder Client extension installed)

---

##  Dependencies

    -npm install 
     (OR)
    -npm install express
    

### Start the Server

   -npm start

```
 You should see:
Server is running on port 3000
```

---

##  Screenshots

Thunder Client test results in the `screenshots/` folder:

* `1.GET-users.png`
* `2.GET-user-by-id.png`
* `3.POST-user.png`
* `4.PUT-user.png`
* `5.DELETE-user.png`

---

##  Error Handling

 200  : Success                      
 201  : Created                      
 400  : Bad Request (missing fields) 
 404  : User not found 

##  Testing with Thunder Client (VS Code)

### Base URL:

```
http://localhost:3000/api
```

| Method | Endpoint     | Description    |

| GET    | `/users`     | Get all users  |
| GET    | `/users/:id` | Get user by ID |
| POST   | `/user`      | Add a new user |
| PUT    | `/user/:id`  | Update a user  |
| DELETE | `/user/:id`  | Delete a user  |

---
##  Sample Request Bodies

###  POST `/api/user`

```json
{
  "firstName": "--",
  "lastName": "--",
  "hobby": "--"
}
```

###  PUT `/api/user/1`

```json
{
  "firstName": "--",
  "lastName": "--",
  "hobby": "--"
}
```

##  Middleware

###  logger.js

Logs each request's method, URL, and status code.

###  validateUser.js

Validates required fields:

* `firstName`, `lastName`, `hobby` on POST
* At least one field on PUT

---

##  Connect with Me

 **GitHub**: [https://github.com/sahiltonge](https://github.com/sahiltonge)
 **LinkedIn**: [https://www.linkedin.com/in/sahiltonge](https://www.linkedin.com/in/sahil-tonge)

---

> Note: Data is stored in-memory. All changes will reset when the server restarts.
