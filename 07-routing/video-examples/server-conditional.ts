async function handler(req: Request) {
  const url = new URL(req.url);

  if (url.pathname === "/meow") {
    return new Response("🦁");
  } else {
    return new Response("Not Found 🦕");
  }
}

Deno.serve(handler);
