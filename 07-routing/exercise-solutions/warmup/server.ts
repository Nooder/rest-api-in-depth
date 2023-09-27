async function handler(req: Request) {
  // req.url; // http://localhost:8000
  const url = new URL(req.url);
  console.log(req.url);
  console.log(url);

  //   if (req.url === "http://localhost:8000/hello") {
  //     return new Response("Hello!");
  //   } else if (req.url === "http://localhost:8000/bye") {
  //     return new Response("See ya!");
  //   }
  if (url.pathname === "/hello") {
    return new Response("Hello!");
  } else if (url.pathname === "/bye") {
    return new Response("See ya!");
  }

  return new Response("Not Found");
}

Deno.serve(handler); // port 8000
