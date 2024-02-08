async function handler(req: Request) {
  const url = new URL(req.url);
  const replaceUserRoute = new URLPattern({ pathname: "/user/:id" });

  if (replaceUserRoute.test(url) && req.method === "PATCH") {
    // update the user given
    const userBody = await req.json();
    const userID = Number(userBody["id"]);
    const file = await Deno.readTextFile("users.json");
    const users = JSON.parse(file);
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userID) {
        // found the user to update
        users[i] = { ...users[i], ...userBody };
        await Deno.writeTextFile("users.json", JSON.stringify(users));
        return new Response(JSON.stringify(users[i]), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      }
    }
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
