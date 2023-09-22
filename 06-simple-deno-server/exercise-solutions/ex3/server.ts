async function handler(req: Request) {
  // open the file
  const file = await Deno.open("./hello.html");
  const readableStream = file.readable;
  //   file.close();

  // header type?
  const headers = new Headers();
  headers.set("content-type", "text/html");

  // send the file as a response
  return new Response(readableStream, {
    headers,
  });
}

Deno.serve({ port: 9000 }, handler);
