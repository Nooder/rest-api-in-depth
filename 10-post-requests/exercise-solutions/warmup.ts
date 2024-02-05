async function handler(req: Request) {
  const url = new URL(req.url);

  if (req.method === "POST") {
    const body = await req.json();
    console.log(body);
    return new Response(null, { status: 201 });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
