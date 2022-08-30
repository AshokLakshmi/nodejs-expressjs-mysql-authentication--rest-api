NodeJs ExpressJs MySql Authentication Rest API with jsonwebtoken
================================================================
##### .env-->
```:
SERVER\_PORT=your port 
NODE\_ENV\_MODE=development 
JWT\_SECRET=your jwt secret key 

MYSQL\_DB\_HOST=database host name 
MYSQL\_DB\_USER=database username 
MYSQL\_DB\_PASSWORD=database password 
MYSQL\_DB\_NAME=database name
```

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


