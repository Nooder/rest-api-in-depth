const file = await Deno.readTextFile("movies.json");
const movies = JSON.parse(file);

async function handler(req: Request) {
  const url = new URL(req.url);
  const filterMoviesByGenre = new URLPattern({ pathname: "/movies" });

  if (filterMoviesByGenre.test(url) && req.method === "GET") {
    const genre = url.searchParams.get("genre");
    const movieResults = [];
    for (const movie of movies) {
      if (movie.genre.includes(genre)) {
        movieResults.push(movie);
      }
    }
    return new Response(JSON.stringify(movieResults), {
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
