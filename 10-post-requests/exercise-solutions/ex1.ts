async function handler(req: Request) {
  const url = new URL(req.url);
  const createAnimalRoute = new URLPattern({ pathname: "/animal" });

  if (createAnimalRoute.test(url) && req.method === "POST") {
    // create a new animal
    let animal = await req.json();
    const id = Math.floor(Math.random() * 1000);
    animal = { id, ...animal };
    const file = await Deno.readTextFile("forest.json");
    let animals = JSON.parse(file);
    animals = [...animals, animal];
    const returnBody = JSON.stringify(animals);
    await Deno.writeTextFile("forest.json", returnBody);
    return new Response(JSON.stringify(animal), {
      status: 201,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
