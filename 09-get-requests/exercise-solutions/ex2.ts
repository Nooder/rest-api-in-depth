const file = await Deno.readTextFile("movies.json");
const movies = JSON.parse(file);

async function handler(req: Request) {
  const url = new URL(req.url);
  const getMovieById = new URLPattern({ pathname: "/movies/:id" });

  if (getMovieById.test(url) && req.method === "GET") {
    const split = url.pathname.split("/");
    const id = Number(split[2]);
    // loop through movies to find the id
    for (const movie of movies) {
      if (movie.id === id) {
        return new Response(JSON.stringify(movie), {
          headers: { "content-type": "application/json" },
        });
      }
    }
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
