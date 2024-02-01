/*
    1. Create a new Deno project/workspace

    2. Read in the movies.json file as a string and
       parse it in to a Javascript Object (JSON.parse)

    3. Use the URLPattern API to create a route for:
       /movies/:id
       (id will allow for a dynamic number like 1,2 etc.)

    4. Respond to any GET request to the /movies/:id route
       with the entire movie's object with the
       matching id from the movies.json file

    5. Respond to any other route/method with a 404

    6. Test this in Insomnia by testing a few movie ids
       (1-100) and also test the 404 route(s)
*/
