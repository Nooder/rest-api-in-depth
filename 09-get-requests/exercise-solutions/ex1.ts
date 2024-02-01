const file = await Deno.readTextFile("movies.json");
const movies = JSON.parse(file);

async function handler(req: Request) {
  const url = new URL(req.url);
  const getAllMovies = new URLPattern({ pathname: "/movies" });

  if (getAllMovies.test(url) && req.method === "GET") {
    const jsonString = JSON.stringify(movies);
    return new Response(jsonString, {
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
