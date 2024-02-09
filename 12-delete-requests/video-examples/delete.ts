interface User {
  id: number;
  name: string;
}

async function handler(req: Request) {
  const url = new URL(req.url);
  const deleteUserRoute = new URLPattern({ pathname: "/user/:id" });

  if (deleteUserRoute.test(url) && req.method === "DELETE") {
    // delete a user
    const matches = deleteUserRoute.exec(url);
    const userID = Number(matches?.pathname.groups.id);

    const usersFile = await Deno.readTextFile("users.json");
    const users = JSON.parse(usersFile);
    const updatedUsers = users.filter((user: User) => user.id !== userID);

    await Deno.writeTextFile("users.json", JSON.stringify(updatedUsers));
    return new Response(null, { status: 204 });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
