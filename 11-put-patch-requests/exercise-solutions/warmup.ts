async function handler(req: Request) {
  if (req.method === "PUT") {
    console.log("PUT", await req.json());
    return new Response(null, { status: 200 });
  }

  if (req.method === "PATCH") {
    console.log("PATCH", await req.json());
    return new Response(null, { status: 200 });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
