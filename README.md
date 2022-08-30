# Node Js, Express Js, MySql, JsonWebToken, Express-Validator Rest API 

Build Restful Authentication API for a simple application using NodeJs ExpressJs, Mysql, jwt & Express-validator.

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/AshokLakshmi/nodejs-expressjs-mysql-authentication--rest-api.git
```

**2. Create .env file**
```bash
SERVER_PORT=your port 
NODE_ENV_MODE=development 
JWT_SECRET=your jwt secret key 

MYSQL_DB_HOST=database host name 
MYSQL_DB_USER=database username 
MYSQL_DB_PASSWORD=database password 
MYSQL_DB_NAME=database name
```

**3. Run Command
```bash
run this command to start the app
nodemon server.js 
or
node server.js

```

The app will start running at <http://localhost:5001>.

## Explore Rest APIs

The app defines following methods is this APIs.
    
    POST /api/register
    
    POST /api/login
    
    GET /api/signout
    
    GET /api/protected

You can test them using postman or any other rest client.

#### Library or Dependencies used in this project

1.  cookie-parser
2.  cors
3.  dotenv
4.  express
5.  express-jwt
6.  express-validator
7.  mysql

### cookie-parser:

cookie-parser is a middleware which parses cookies attached to the client request object.

### cors:

CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

### dotenv:

DotEnv is a lightweight npm package.we used that because it's automatically loads environment variables from a . env file into the process

### express-jwt:

This module provides Express middleware for validating JWTs (JSON Web Tokens) through the jsonwebtoken module. The decoded JWT payload is available on the request object.

### express-validator:

Express Validator is an Express middleware library that you can incorporate in your apps for server-side data validation

### mysql:

This is a node.js driver for mysql.It's used for connecting nodejs server with database and making all querys.


