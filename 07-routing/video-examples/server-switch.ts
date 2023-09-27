async function handler(req: Request) {
  const url = new URL(req.url);

  switch (url.pathname) {
    case "/meow": {
      return new Response("🦁");
    }
    case "/woof": {
      return new Response("🐺");
    }
    default: {
      return new Response("🦕");
    }
  }
}

Deno.serve(handler);
