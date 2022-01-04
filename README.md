# json-server-first-glance
utilising [json-server](https://github.com/typicode/json-server) for RESTful services


## install and see the capabilities of json-server

### run
 - npm install
 - npx json-server --watch generate.js
 
 Using [postman](https://www.postman.com/) or any of your favorite HTTP client,
 make a GET request to http://localhost:3000/people
 
 faker steps in and generates a list of random people for you to use
 
 Try making the following HTTP request to http://localhost:3000/
    POST request, 
    http://localhost:3000/people/
    
    in the body of your payload include
    {
      "id": 1001,
      "name": "KimPossible",
      "avatar": "https://cdn.fakercloud.com/avatars/sharvin_128.jpg"  
    }
    
    GET request 
    http://localhost:3000/people
    
    you get back a response of list of 101 people including our KimPossible character above
    
    PUT request 
    http://localhost:3000/people/1001
    
    in the body of your payload include
    {
      "id": 1001,
      "name": "JakeTran",
      "avatar": "https://cdn.fakercloud.com/avatars/sharvin_128.jpg"  
    }
    
    the request above updates the 'person' at id 1001 from oldname KimPossible to JakeTran
    
    DELETE request
    http://localhost:3000/people/1001
    
    this request deletes our initially posted 'person' called KimPossible
    
    
