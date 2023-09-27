/*
    1. Start a new Deno workspace and create a
       server.ts file

    2. Create a web server in Deno and listen
       on the default port (8000)

    3. Use the URLPattern API to match the following
       routes and respond accordingly:
       - http://localhost:8000/profile/:username
         -> Return `Hello, ${username}!` as a String
            depending on the username in the pathname
       - http://localhost:8000/posts/:postId/:userId
         -> Return `All Posts for: {userId} and ${postId}`
            as a String depending on the pathnames given

    4. Test these routes in both your Browser and
       Insomnia to see if they work.
*/
