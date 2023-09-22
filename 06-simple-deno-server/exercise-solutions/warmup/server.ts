async function handler(req: Request) {
  return new Response("Hello!");
}

Deno.serve({ port: 9000 }, handler);
