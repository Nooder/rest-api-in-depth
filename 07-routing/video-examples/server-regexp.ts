async function handler(req: Request) {
  const url = new URL(req.url);

  if (url.pathname.match("/meow")) {
    return new Response("🦁");
  } else if (url.pathname.match(/\/rawr/)) {
    // .match('/rawr')
    return new Response("🐻");
  } else {
    return new Response("😱");
  }
}

Deno.serve(handler);
