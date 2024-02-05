async function handler(req: Request) {
  const url = new URL(req.url);
  const createHeroRoute = new URLPattern({ pathname: "/hero" });

  if (createHeroRoute.test(url) && req.method === "POST") {
    // create our hero
    const body = await req.formData();
    const name = body.get("name");
    const cool = Boolean(body.get("cool"));
    const id = Math.floor(Math.random() * 1000);
    const hero = { id, name, cool };
    const file = await Deno.readTextFile("heroes.json");
    let heroes = JSON.parse(file);
    heroes = [...heroes, hero];
    await Deno.writeTextFile("heroes.json", JSON.stringify(heroes));
    return new Response(JSON.stringify(hero), {
      status: 201,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
