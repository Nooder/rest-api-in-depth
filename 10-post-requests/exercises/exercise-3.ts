/*
    1. Create a new Deno project/workspace

    2. Create a heroes.json file with an array with
       one Object with the following info:
       { "id": 1, "name": "Batman", "cool": false }

    3. Create a route for /hero using the URLPattern
       API and use it to test for POST requests

    4. Use Insomnia to create a POST request with the
       body for a new superhero with a "name" and
       "cool" property to create that new hero
       in the heroes.json file. However, set the body
       type to "Multipart Form" instead of JSON.

    5. Log out the text in the body of the request to
       take a look at what it looks like. Also, look
       in the 'Timeline' view of Insomnia and look
       through to find the request body there too.

    6. Accept this request on the Deno server's route,
       save the new hero to the heroes.json file and
       respond with the newly created hero with a 201
       and the hero's data. Make sure to create a unique
       ID for each new hero that is being added as well.

    7. Test this in Insomnia with more heroes and check
       that the response is accurate and also shows up in
       the heroes.json file.

    8. What is the difference between this type of Request
       body, a regular JSON body, and the url-encoded body
       (switch the body type in insomnia, with the same data)?

    HINT* How can you inspect a FormData encoded body?
*/
