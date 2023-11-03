const file = await Deno.readTextFile("./users.json");
const users = JSON.parse(file);

async function handler(req: Request) {
  const url = new URL(req.url);
  const usersRoute = new URLPattern({ pathname: "/users" });

  // /users route matches
  if (usersRoute.test(url)) {
    const usersString = JSON.stringify(users);
    return new Response(usersString, {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
