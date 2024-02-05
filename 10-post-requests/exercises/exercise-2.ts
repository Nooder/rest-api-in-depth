/*
    1. Create a new Deno project/workspace

    2. Create a forest.json file with an array with
       one Object with the following info:
       { "id": 1, "type": "Moose", "count": 30 }

    3. Create a route for /animal using the URLPattern
       API and use it to test for POST requests

    4. Use Insomnia to create a POST request with the
       JSON body for a new animal with a "type" and
       "count" property to create that new animal
       in the forest.json file

    5. Add data validation to make "count" required
       as well as to check it's a valid integer. If
       not, return a JSON object to the client
       informing them of this error:
       { "error": "count field is required" } or
       { "error": "count field needs to be an integer" }

    6. Accept this request on the Deno server's route,
       save the new animal to the forest.json file and
       respond with the newly created animal with a 201
       and the animal's data. Make sure to create a unique
       ID for each new animal that is being added as well.

    7. Test this in Insomnia with more animals and check
       that the response is accurate and also shows up in
       the forest.json file. Also, check the error condition
       for both a missing count, and an invalid (string) count.
*/
