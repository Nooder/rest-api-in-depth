/*
    1. Create a new Deno project/workspace

    3. Create a route for /upload using the URLPattern
       API and use it to test for POST requests

    4. Use Insomnia to create a POST request with the
       body set to 'Multipart Form' and use the dropdown
       beside value to choose a 'File' to attach and give
       it a name field of 'fileUpload'.

    5. Accept this request on the Deno server's route,
       and get the file name submitted and the content
       in order to save it to the disk on the server-side
       using the submitted file-name. This will act like
       a file-server. Respond with an empty 201 created.

    6. Test this in Insomnia with a few files and check
       that the response is accurate as well as that the
       file is actually saved inside the folder on the
       server side.

    HINT* You can use several web APIs here to help,
          such as the File Web API, and UInt8Array
          Buffer views. You will also need to use
          the form data method of the request.
*/
