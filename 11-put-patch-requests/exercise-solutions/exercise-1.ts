/*
    1. Create a new Deno project/workspace

    2. We will be using the users.json file for this
       exercise. Make sure to read/write to it where
       appropriate in the route(s) below

    3. Create a route for /user/:id using the URLPattern
       API and use it to test for PUT requests

    4. Use Insomnia to create a PUT request with the
       JSON body for a new user with an existing "id"
       inside the users.json file, as well as an updated
       "name" and "email" field

    5. Accept this request on the Deno server's route,
       save the new user to the users.json file and
       respond with the updated user with a 200
       and the replaced user's data.

    6. Test this in Insomnia with other existing users and
       check that the response is accurate and also shows
       up in the users.json file.
*/
