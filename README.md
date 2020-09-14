# EDU STACKOVERFLOW

A place where users can ask questions and provide responses.

## Tech Stack <br>
- Node.js
- Express
- JSON Web Token
- Bcrypt
- Passport

## Main Files: Project Structure

    |--index.js
    |--server
        |--controllers
            |--answers.js
            |--posts.js
            |--user.js
        |--helpers
            |--validation.js
        |--models
            |--answers.js
            |--posts.js
            |--user.js
        |routes
            |--answer.js
            |--postRoute.js
            |--userRoute.js

## Envorinment Variables

- PORT -- `server port number`
- DB_URI -- `database URL`
- SECRET_KEY -- `Secret key for verifying the token`

## Usage
1. `clone` this repository.
2. `cd` into project root directory.
3. run `npm install` to install all dependencies. (you must have node installed)
4. Run `npm start` to start the server.
5. Open up `Postman` and then test out the Endpoints.

## User CRUD Operations

## SignUp User

Signs in a single user into the Application.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|/auth/signup|POST|None|None|

## Login User

Logs in a single user in the application.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|/auth/login|POST|None|None|
    
## Ask a question

Adds a question to the database.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/questions/<userid>`|POST|`None`|string

## Give a response

Adds an answer to a question in the database.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/questions/<questionid>/answers`|POST|`required`|string|

## Get all questions

Gets all questions from the database.

**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/questions`|GET|`None`|None

## Get all answers to a question

Gets all answers to a question in the database.

**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/questions/<questionId>/answers`|GET|`required`|None

## Delete a question

Deletes a single question from the database.

**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/questions/<questionId>`|DELETE|`required`|None

## Update an answer or mark an answer as accepted

User can edit an answer or select an answer as the preferred answer.

**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/questions/<questionId>/answers/<answerId>`|PUT|`required`|string

## Contributors

- Kalemba Ivan
- Lukeera Elywin Michael
- Kamoti Godfrey
- Edna Nakajugo (LF)