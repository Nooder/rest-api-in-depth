async function handler(req: Request) {
  const url = new URL(req.url);
  const updateUserRoute = new URLPattern({ pathname: "/user/:id" });

  if (updateUserRoute.test(url) && req.method === "PATCH") {
    // update the given user
    const userBody = await req.json();
    const userID = userBody["id"];
    const users = JSON.parse(await Deno.readTextFile("users.json"));

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userID) {
        // update the user
        const updatedUser = { ...users[i], ...userBody };
        users[i] = updatedUser;
        await Deno.writeTextFile("users.json", JSON.stringify(users));
        return new Response(JSON.stringify(updatedUser), { status: 200 });
      }
    }
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
