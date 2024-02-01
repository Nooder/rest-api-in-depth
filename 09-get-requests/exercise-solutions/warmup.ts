async function handler(req: Request) {
  const method = req.method;
  if (method === "GET") {
    return new Response(null, { status: 200 });
  }
  return new Response(null, { status: 404 });
}

Deno.serve(handler);
