#Endpoints

POST /auth/signup create user
POST post/questions post question
POST questions/<questionId>/answer post an answer to a question


GET post/questions  fetch all questions
GET questions/answers fetch all answers
GET post/questions/<questionId> fetch specific question
GET questions/answer fetch all answers

DELETE /questions/<questionId> delete a question


PUT /questions/<questionId>/answers/<answerId> update answer