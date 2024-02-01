/*
    1. Create a new Deno project/workspace

    2. Read in the movies.json file as a string and
       parse it in to a Javascript Object (JSON.parse)

    3. Use the URLPattern API to create a route for:
       /movies?genre=xxx
       - (genre is a search parameter with a genre in a format
         to match like Action or Comedy etc)
         Eg: /movies?genre=Action, /movies?genre=Comedy

    4. Respond to any GET request to the /movies?genre=
       route with all the movies that match the
       genre in the route (OR expression) with all the info
       for each of the movies that match

    5. Respond to any other route/method with a 404

    6. Test this in Insomnia by testing a genres
      and also test the 404 route(s)
*/
