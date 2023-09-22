async function handler(req: Request) {
  //   console.log(req.method);
  //   console.log(req.headers);

  const file = await Deno.open("./hello.html");
  const fileStream = file.readable;

  const htmlHeaders = new Headers();
  htmlHeaders.append("content-type", "text/html");

  return new Response(fileStream, {
    headers: htmlHeaders,
  });
}

Deno.serve(
  {
    port: 8000,
    hostname: "127.0.0.1",
  },
  handler
);

// 127.0.0.1:8000
// http://localhost:8000
