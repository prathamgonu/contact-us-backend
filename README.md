# Gibbs-Assignment

// To Create a user use the following CURL:
curl --location 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Swaraj Kaushik",
    "email": "swarajkaushik1@gmail.com",
    "password": "Swaraj@123",
    "age": 22
}'

//To get the list of all the users use the following CURL:
curl --location 'http://localhost:3000/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc0YTA1MjMwNjlhZmRkMjJlNThkZTYiLCJpYXQiOjE2ODUzNjQ4MTl9.6hKGjj_ggz8sUeUGqsOVkXFFW00PWmSFacoEeAqfd_4'
note: you will get the token after signup

// To login the user use following CURL:
curl --location 'http://localhost:3000/users/login' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc0OWVhNTMwNjlhZmRkMjJlNThkZGQiLCJpYXQiOjE2ODUzNjQzODl9.Ty8wWXCLVvKf4c_6MhGJdKc2LCAxo5GRTakpdG0IYyo' \
--data-raw '{
    "email": "swarajkaushik@gmail.com",
    "password": "Swaraj@123"
}'

// To logout the user use following CURL:
curl --location --request POST 'http://localhost:3000/users/logout' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc0OWVhNTMwNjlhZmRkMjJlNThkZGQiLCJpYXQiOjE2ODUzNjQzODl9.Ty8wWXCLVvKf4c_6MhGJdKc2LCAxo5GRTakpdG0IYyo'
