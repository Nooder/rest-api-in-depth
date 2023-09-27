async function handler(req: Request) {
  const url = new URL(req.url);
  // patterns
  const rawrPattern = new URLPattern({
    pathname: "/rawr",
  });
  const meowPattern = new URLPattern({
    pathname: "/meow",
  });
  const animalPattern = new URLPattern({
    pathname: "/animal/:name",
  });
  // router.get('/animal/:name', () => {})

  if (rawrPattern.test(url)) {
    return new Response("🦁");
  } else if (meowPattern.test(url)) {
    return new Response("😸");
  } else if (animalPattern.test(url)) {
    const matches = animalPattern.exec(url);
    const animalName = matches?.pathname.groups.name;
    return new Response(animalName ?? "Not Found");
  } else {
    return new Response("🤦🏽‍♂️");
  }
}

Deno.serve(handler);
