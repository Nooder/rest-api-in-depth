async function handler(req: Request) {
  const method = req.method;
  const url = req.url;
  const responseString = `${method} ${url}`;
  const urlObject = new URL(req.url);
  const pathname = urlObject.pathname;
  console.log(`${method} ${pathname}`);
  return new Response(responseString);
}

Deno.serve({ port: 9000 }, handler);
